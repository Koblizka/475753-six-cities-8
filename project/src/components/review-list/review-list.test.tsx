import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { userComments } from '../../mocks/user-comment';
import { ReviewList } from './review-list';


describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const reviews = userComments;

    const {getByText} = render(
      <Router history={history}>
        <ReviewList reviews={reviews} />
      </Router>,
    );

    const reviewsCount = getByText(reviews.length);

    expect(reviewsCount).toBeInTheDocument();
  });
});
