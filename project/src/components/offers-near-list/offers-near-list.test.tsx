import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { AuthorizationStatus, CardClassType } from '../../common/const';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import OffersNearList from './offers-near-list';
import { offers } from '../../mocks/offers';

it('should render correctly', () => {
  const history = createMemoryHistory();

  const mockStore = configureMockStore();
  const store = mockStore({
    [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
  });


  const {getByText} = render(
    <Router history={history}>
      <Provider store={store}>
        <OffersNearList
          offers={[offers[0]]}
          className={CardClassType.NearPlaces}
          onOfferChoose={() => jest.fn()}
        />
      </Provider>
    </Router>,
  );

  const description = getByText('Rating');

  expect(description).toBeInTheDocument();
});
