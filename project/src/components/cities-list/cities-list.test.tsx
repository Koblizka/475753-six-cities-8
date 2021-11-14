import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { City } from '../../common/const';
import { CitiesList } from './cities-list';
import { getCity } from '../../utils/utils';
import { cities } from '../../mocks/cities';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';


describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const activeCity = getCity(City.Amsterdam);

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Processes]: {activeCity: activeCity},
    });


    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <CitiesList activeCity={activeCity} cities={cities} />
        </Provider>
      </Router>,
    );

    const description = getByText(activeCity.name);

    expect(description).toBeInTheDocument();
  });
});
