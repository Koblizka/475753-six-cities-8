import { createMemoryHistory } from 'history';
import {render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import PageHeader from './header';
import UserNav from '../user-nav/user-nav';
import { AuthorizationStatus } from '../../common/const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { NameSpace } from '../../store/root-reducer';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
});

describe('Component: PageHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();


    const {getByAltText} = render(
      <Router history={history}>
        <Provider store={store}>
          <PageHeader />
          <UserNav />
        </Provider>
      </Router>,
    );

    const linkElement = getByAltText('6 cities logo');

    expect(linkElement).toBeInTheDocument();
  });
});
