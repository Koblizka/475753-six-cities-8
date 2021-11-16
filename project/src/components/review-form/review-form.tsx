import {useDispatch, useSelector} from 'react-redux';
import {postCommentAction} from '../../store/api-actions';
import {NewComment} from '../../types/user-comment';
import {getCommentPostStatus} from '../../store/user-comments/selectors';

import {
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
  useState
} from 'react';
import {
  DataStatus,
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  RatingsToValuesMap
} from '../../common/const';


type ReviewFormProps = {
  offerId: string,
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useDispatch();

  const commentPostStatus = useSelector(getCommentPostStatus);

  const handlePostReview = (review: NewComment, id: string) => dispatch(postCommentAction(review, id));

  const [review, setReview] = useState<{rating: number, comment: string}>({
    rating: 0,
    comment: '',
  });

  const isFormCompleted = Boolean(review.rating) && (review.comment.length >= MIN_COMMENT_LENGTH);
  const isFormEnabled = commentPostStatus === DataStatus.IsSending;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setReview({...review, rating: Number(evt.target.value)});
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setReview({...review, comment: evt.target.value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    handlePostReview(review, offerId);

    setReview({
      rating: 0,
      comment: '',
    });
  };

  useEffect(() => {
    if (commentPostStatus === DataStatus.NotSended) {
      setReview({
        'rating': 0,
        'comment': '',
      });
    }
  }, [commentPostStatus]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(RatingsToValuesMap).map(([title, rank]): JSX.Element => (
            <Fragment key={`${rank}-${title}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rank}
                id={`${rank}-stars`}
                type="radio"
                checked={Number(rank) === review.rating}
                onChange={handleRatingChange}
                disabled={isFormEnabled}
              />
              <label htmlFor={`${rank}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ),
          )
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleCommentChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        value={review.comment}
        disabled={isFormEnabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormCompleted}>Submit</button>
      </div>
      {
        commentPostStatus === DataStatus.NotSended &&
          (
            <p style={ {color: 'red'} }>Comment wasnt poste cause some error</p>
          )
      }
    </form>
  );
}

export {ReviewForm};
export default ReviewForm;
