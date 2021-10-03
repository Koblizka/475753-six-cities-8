import {LivePlaceProps} from '../../types/live-place';

const percentageRating = (rating: number): number | string =>
  (rating >= 0 || rating <= 5)
    ? `${rating * 20}%`
    : 0;

const getBookmarkClassName = (isBookmarked: boolean): string =>
  (isBookmarked)
    ? 'place-card__bookmark-button button'
    : 'place-card__bookmark-button place-card__bookmark-button--active button';

const getBookmarkState = (isBookmarked: boolean): string =>
  (isBookmarked)
    ? 'In bookmarks'
    : 'To bookmarks';

function PremiumMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({isPremium, isBookmarked, placeType, price, rating, name, photoSrc}: LivePlaceProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      {isPremium ? <PremiumMark /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={photoSrc} width="260" height="200" alt="Place presentation" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={getBookmarkClassName(isBookmarked)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{getBookmarkState(isBookmarked)}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: percentageRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{name}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
