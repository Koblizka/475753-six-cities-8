import {Offer} from '../../types/offer';
import ReviewForm from '../review-form/review-form';
import {Map} from '../map/map';
import {OffersNearList} from '../offers-near-list/offers-near-list';
import {useEffect} from 'react';
import {Loader} from '../loader/loader';
import {ReviewList} from '../review-list/review-list';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {chooseActiveOffer} from '../../store/actions';
import {ThunkAppDispatch} from '../../types/actions';

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
  Link,
  Redirect,
  useParams
} from 'react-router-dom';
import {
  fetchNearbyOffersAction,
  fetchOfferCommentsAction,
  fetchOfferDetailsAction
} from '../../store/api-actions';

const mapStateToProps = (
  {
    activeCity,
    reviews,
    activeOffer,
    currentOffer,
    nearbyOffers,
    offerDetailsLoadStatus,
    nearbyOffersLoadStatus,
    offerCommnetsLoadStatus,
    authorizationStatus,
  }: State) => (
  {
    activeCity,
    reviews,
    activeOffer,
    currentOffer,
    nearbyOffers,
    offerDetailsLoadStatus,
    nearbyOffersLoadStatus,
    offerCommnetsLoadStatus,
    authorizationStatus,
  }
);

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => (
  {
    onOfferChoose(offer: Offer | null) {
      dispatch(chooseActiveOffer(offer));
    },
    onFetchOfferDetails(offerId: string) {
      dispatch(fetchOfferDetailsAction(offerId));
    },
    onFetchNearbyOffers(offerId: string) {
      dispatch(fetchNearbyOffersAction(offerId));
    },
    onFetchOfferComments(offerId: string) {
      dispatch(fetchOfferCommentsAction(offerId));
    },
  }
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferScreen(
  {
    reviews,
    activeCity,
    activeOffer,
    currentOffer,
    nearbyOffers,
    onOfferChoose,
    onFetchOfferDetails,
    onFetchNearbyOffers,
    onFetchOfferComments,
    offerDetailsLoadStatus,
    offerCommnetsLoadStatus,
    authorizationStatus,
  }: PropsFromRedux): JSX.Element {

  const { id }  = useParams<{id: string}>();

  useEffect(() => {
    onFetchOfferDetails(id);
    onFetchNearbyOffers(id);
    onFetchOfferComments(id);
  }, [id, onFetchOfferDetails, onFetchNearbyOffers, onFetchOfferComments]);

  const offerData = currentOffer as Offer;
  const offersNear = nearbyOffers as Offer[];

  if (offerDetailsLoadStatus === DataStatus.NotLoaded) {
    return <Redirect to={AppRoute.NotFound} />;
  }

  if (offerCommnetsLoadStatus === DataStatus.NotLoaded) {
    return <Loader />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offerData?.images.map((image) => (
                  <div className="property__image-wrapper" key={`${image}-${offerData.id}`}>
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
                <Map
                  offers={offersNear}
                  activeCity={activeCity}
                  selectedOffer={activeOffer}
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
                  onOfferChoose={onOfferChoose}
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
export default connector(OfferScreen);
