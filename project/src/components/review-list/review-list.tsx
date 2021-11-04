import {Fragment} from 'react';
import {UserComment} from '../../types/user-comment';
import {UserReview} from '../review/review';

type ReviewListProps = {
  reviews: UserComment[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) =>
            (
              <UserReview
                review={review}
                key={review.reviewId}
              />
            ),
          )
        }
      </ul>
    </Fragment>
  );
}

export {ReviewList};
