import {LivePlaceProps} from '../../types/live-place';
import {percentageRating} from '../../utils/utils';

type PlaceCardProps = {
  offer: LivePlaceProps;
}

function PlaceCard({offer}: PlaceCardProps): JSX.Element {

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={offer.photoSrc} width="260" height="200" alt="Place presentation" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={(offer.isBookmarked) ? 'place-card__bookmark-button button' : 'place-card__bookmark-button place-card__bookmark-button--active button'} type="button">
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
          <a href="/">{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.placeType}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
