import {Fragment} from 'react';
import { REVIEWS_LIMIT_ON_PAGE } from '../../common/const';
import {UserComment} from '../../types/user-comment';
import {UserReview} from '../review/review';

type ReviewListProps = {
  reviews: UserComment[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  const sortReviewsDates = (firstReview: UserComment, anotherReview: UserComment) => new Date(anotherReview.date).valueOf() - new Date(firstReview.date).valueOf();

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews
            .slice(0, REVIEWS_LIMIT_ON_PAGE)
            .sort(sortReviewsDates)
            .map((review) =>
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
