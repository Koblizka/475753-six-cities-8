import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { UserReview } from './user-review';
import { userComments } from '../../mocks/user-comment';


describe('Component: UserReview', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const review = userComments[0];

    const {getByText} = render(
      <Router history={history}>
        <UserReview review={review} />
      </Router>,
    );

    const userCommentText = getByText(review.review);

    expect(userCommentText).toBeInTheDocument();
  });
});
