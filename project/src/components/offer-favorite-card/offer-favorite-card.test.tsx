import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import { AuthorizationStatus } from '../../common/const';
import * as Redux from 'react-redux';
import { OfferFavoriteCard } from './offer-favorite-card';

describe('Component: OfferFavoriteCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Offers]: {favoriteOffers: [offers[0]]},
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <OfferFavoriteCard
            offer={offers[0]}
          />
        </Provider>
      </Router>,
    );

    const description = getByText(offers[0].title);

    expect(description).toBeInTheDocument();
  });
});

