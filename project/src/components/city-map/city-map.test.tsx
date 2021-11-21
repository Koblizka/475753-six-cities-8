import { render } from '@testing-library/react';
import CityMap from './city-map';
import { offers } from '../../mocks/offers';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { NameSpace } from '../../store/root-reducer';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { getCity } from '../../utils/utils';
import { createMemoryHistory } from 'history';
import { City } from '../../common/const';

describe('Component: CityMap', () => {

  it('should render', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Processes]: {
        activeCity: getCity(City.Paris),
        activeOffer: offers[0],
      },
    });

    const { getByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <CityMap
            offers={offers}
            activeOffer={offers[0]}
          />
        </Provider>
      </Router>,
    );

    expect(getByTestId('city-map')).toBeInTheDocument();
  });
});
