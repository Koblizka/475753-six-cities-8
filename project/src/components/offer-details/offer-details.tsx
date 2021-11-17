import {Offer} from '../../types/offer';
import ReviewForm from '../review-form/review-form';
import CityMap from '../map/map';
import OffersNearList from '../offers-near-list/offers-near-list';
import {useCallback, useEffect, useMemo} from 'react';
import {Loader} from '../loader/loader';
import {ReviewList} from '../review-list/review-list';
import {useDispatch, useSelector} from 'react-redux';
import {updateOfferDetails} from '../../store/actions';
import PageHeader from '../header/header';

import {
  AppRoute,
  AuthorizationStatus,
  CardClassType,
  DataStatus
} from '../../common/const';
import {
  getOfferCapacity,
  percentageRating
} from '../../utils/utils';
import {
  Redirect,
  useHistory,
  useParams
} from 'react-router-dom';
import {
  bookmarkAction,
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
  fetchOfferDetailsAction
} from '../../store/api-actions';
import { getNearbyOffers, getOffersDetailsLoadStatus } from '../../store/offers/selectors';
import { getOfferCommnetsLoadStatus, getReviews } from '../../store/user-comments/selectors';
import {getCurrentOffer} from '../../store/processes/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';


function OfferScreen(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentOffer = useSelector(getCurrentOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const reviews = useSelector(getReviews);
  const offerDetailsLoadStatus = useSelector(getOffersDetailsLoadStatus);
  const offerCommnetsLoadStatus = useSelector(getOfferCommnetsLoadStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);


  const handleFetchOfferDetails = useCallback(
    (offerId: string) => dispatch(fetchOfferDetailsAction(offerId)),
    [dispatch],
  );
  const handleFetchNearbyOffers = useCallback(
    (offerId: string) => dispatch(fetchNearbyOffersAction(offerId)),
    [dispatch],
  );
  const handleFetchOfferComments = useCallback(
    (offerId: string) => dispatch(fetchOfferCommentsAction(offerId)),
    [dispatch],
  );

  const { id }  = useParams<{id: string}>();

  const offerData = currentOffer as Offer;
  const offersNear = nearbyOffers as Offer[];
  const offersForMap = useMemo(
    () => {
      if (!currentOffer) {
        return [];
      }

      return [...nearbyOffers, currentOffer];
    }, [currentOffer, nearbyOffers],
  );

  useEffect(() => {
    handleFetchOfferDetails(id);
    handleFetchNearbyOffers(id);
    handleFetchOfferComments(id);
  }, [id, handleFetchOfferDetails, handleFetchNearbyOffers, handleFetchOfferComments]);

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.IsAuth) {
      history.push(AppRoute.SignIn);
      return;
    }

    dispatch(bookmarkAction(offerData.id, offerData.isFavorite));
    dispatch(updateOfferDetails(offerData));
  };


  if (offerDetailsLoadStatus === DataStatus.NotLoaded) {
    return <Redirect to={AppRoute.NotFound} />;
  }

  if (offerCommnetsLoadStatus === DataStatus.NotLoaded) {
    return <Loader />;
  }

  return (
    <div className="page">
      <PageHeader />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offerData?.images.map((image) => (
                  <div className="property__image-wrapper" key={`${image}-${offerData.id}-${offerData.title}`}>
                    <img className="property__image" src={image} alt="Photography studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offerData?.isPremium
                  && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offerData?.title}
                </h1>
                <button
                  className={(offerData?.isFavorite) ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'}
                  type="button"
                  onClick={handleBookmark}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{(offerData?.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ {width: `${percentageRating(offerData?.rating)}%`} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offerData?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerData?.placeType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerData?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {getOfferCapacity(offerData?.maxAdults)}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{offerData?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offerData?.goods.map((good) => (
                    <li className="property__inside-item" key={`${good}-${offerData?.id}`}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offerData?.host?.userAvatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offerData?.host.userName}
                  </span>
                  {offerData?.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offerData?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {reviews && <ReviewList reviews={reviews}/>}
                {authorizationStatus === AuthorizationStatus.IsAuth && <ReviewForm offerId={offerData?.id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map" style={ {maxWidth: '1144px', margin: '0 auto 50px'} }>
            {
              offersNear &&
              (
                <CityMap
                  offers={offersForMap}
                  activeOffer={offerData}
                />
              )
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {
              offersNear &&
              (
                <OffersNearList
                  offers={offersNear}
                  className={CardClassType.NearPlaces}
                />
              )
            }
          </section>
        </div>
      </main>
    </div>
  );
}

export {OfferScreen};
export default OfferScreen;
