import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import ReviewForm from './review-form';
import { NameSpace } from '../../store/root-reducer';
import { AuthorizationStatus, DataStatus } from '../../common/const';

import { userComments } from '../../mocks/user-comment';


describe('Component: ReviewForm', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
    [NameSpace.UserComments]: {
      reviews: userComments,
      offerCommnetsLoadStatus: DataStatus.IsLoaded,
      commentPostStatus: DataStatus.Default,
    },
  });

  const offerId = '1';

  it('should render correctly', () => {
    const {getByRole} = render(
      <Provider store={ store }>
        <ReviewForm
          offerId={offerId}
        />);
      </Provider>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
