import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import { AuthorizationStatus, City, DataStatus, SortType } from '../../common/const';
import * as Redux from 'react-redux';
import CitiesOffers from './cities-offers';
import { getCity, getCityOffers } from '../../utils/utils';


describe('Component: CitiesOffers', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const cityOffers = getCityOffers(City.Paris, offers);

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
      [NameSpace.Processes]: {
        currentOffer: offers[0],
        activeOffer: offers[0],
        activeSort: SortType.Popular,
        activeCity: getCity(City.Amsterdam),
      },
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
          <CitiesOffers
            offersAmount={cityOffers.length}
            cityOffers={cityOffers}
            activeCity={cityOffers[0].city.name}
            offers={cityOffers}
            onOfferChoose={() => jest.fn()}
          />
        </Provider>
      </Router>,
    );

    const description = getByText(/places to stay in/i);

    expect(description).toBeInTheDocument();
  });
});

