import {Place} from '../../types/place';
import {percentageRating} from '../../utils/utils';
import {
  AppRoute,
  CardType,
  photoSize
} from '../../common/const';
import React from 'react';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: Place;
  cardType: string;
  onOfferChoose?: (offer: Place | null) => void;
}

function PlaceCard({offer, cardType, onOfferChoose}: PlaceCardProps): JSX.Element {

  const getPhoto = (photoType: string): JSX.Element => (
    <img className="place-card__image"
      src={cardType === CardType.Cities ? offer.photoSrc.big[0] : offer.photoSrc.small[0]}
      width={cardType === CardType.Cities ? photoSize.bigWidth : photoSize.smallWidth}
      height={cardType === CardType.Cities ? photoSize.bigHeight : photoSize.smallHeight}
      alt="Place presentation"
    />
  );

  return (
    <article
      className={cardType === CardType.Cities ? 'cities__place-card place-card' : 'favorites__card place-card'}
      onMouseEnter={onOfferChoose ? () => onOfferChoose(offer) : undefined}
      onMouseLeave={onOfferChoose ? () => onOfferChoose(null) : undefined}
    >
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className= {cardType === CardType.Cities ? 'cities__image-wrapper place-card__image-wrapper' : 'favorites__image-wrapper place-card__image-wrapper'}>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          {getPhoto(cardType)}
        </Link>
      </div>
      <div className={cardType === CardType.Cities ? 'place-card__info' : 'favorites__card-info place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={(offer.isBookmarked) ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{(offer.isBookmarked) ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${percentageRating(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.placeType}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
