import { Review } from '../../types/review';
import { getDateMonthYear, percentageRating } from '../../utils/utils';

type ReviewProps = {
  review: Review
};

function UserReview({review}: ReviewProps): JSX.Element {
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.userAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ {width: `${percentageRating(review.rank)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.review}
        </p>
        <time className="reviews__time" dateTime={ review.date.toISOString() }>{getDateMonthYear(review.date)}</time>
      </div>
    </li>
  );
}

export {UserReview};
