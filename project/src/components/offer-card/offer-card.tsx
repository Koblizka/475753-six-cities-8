import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CardClassType, OfferCardPhotoSize } from '../../common/const';
import {Offer} from '../../types/offer';
import { percentageRating } from '../../utils/utils';

type OfferCardProps = {
  offer: Offer;
  className: CardClassType | null;
}

function OfferCard({offer, className}: OfferCardProps): JSX.Element {
  return(
    <React.Fragment>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`${className ? className : 'favorites'}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <img className="place-card__image"
            src={className ? offer.images[0] : offer.previewImage}
            width={className ? OfferCardPhotoSize.bigWidth : OfferCardPhotoSize.smallWidth}
            height={className ? OfferCardPhotoSize.bigHeight : OfferCardPhotoSize.smallHeight}
            alt="Place presentation"
          />
        </Link>
      </div>
      <div className={`${!className && 'favorites__card-info '}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={(offer.isFavorite) ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{(offer.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${percentageRating(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.placeType}</p>
      </div>
    </React.Fragment>
  );
}

export {OfferCard};
