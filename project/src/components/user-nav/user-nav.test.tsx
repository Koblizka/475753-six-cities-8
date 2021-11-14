import { createMemoryHistory } from 'history';
import {render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import UserNav from '../user-nav/user-nav';
import { AuthorizationStatus } from '../../common/const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../store/root-reducer';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {authorizationStatus: AuthorizationStatus.NotAuth},
});

describe('Component: UserNav', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <UserNav />
        </Provider>
      </Router>,
    );

    const notAuthUserText = getByText('Sign in');

    expect(notAuthUserText).toBeInTheDocument();
  });
});
