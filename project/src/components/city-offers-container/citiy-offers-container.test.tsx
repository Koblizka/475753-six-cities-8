import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import { AuthorizationStatus, City, SortType } from '../../common/const';
import CityOffersContainer from './city-offer-container';
import { getCity, getCityOffers } from '../../utils/utils';

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const offersAmount = getCityOffers(City.Paris, offers).length;
    const activeCity = getCity(City.Paris);

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
      [NameSpace.Processes]: {
        activeCity: activeCity,
        activeSort: SortType.Popular,
      },
      [NameSpace.Offers]: {offers: offers},
    });

    const hasOffers = true;

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <CityOffersContainer
            hasOffers={hasOffers}
          />
        </Provider>
      </Router>,
    );

    const description = getByText(`${offersAmount} places to stay in ${activeCity.name}`);

    expect(description).toBeInTheDocument();
  });
});

