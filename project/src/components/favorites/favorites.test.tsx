import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import { AuthorizationStatus, DataStatus } from '../../common/const';
import FavoritesScreen from './favorites';
import * as Redux from 'react-redux';


describe('Component: FavoritesScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
      [NameSpace.Offers]: {
        nearbyOffersLoadStatus: DataStatus.IsLoaded,
        offersLoadStatus: DataStatus.IsLoaded,
        favoriteOffers: offers,
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <FavoritesScreen />
        </Provider>
      </Router>,
    );

    const description = getByText('Saved listing');

    expect(description).toBeInTheDocument();
  });
});

