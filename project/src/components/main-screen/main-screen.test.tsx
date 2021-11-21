import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import * as Redux from 'react-redux';
import { getCity } from '../../utils/utils';
import MainScreen from './main-screen';
import {
  AuthorizationStatus,
  City,
  DataStatus,
  SortType
} from '../../common/const';

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Offers]: {
        offers: offers,
        offersLoadStatus: DataStatus.IsLoaded},
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
      [NameSpace.Processes]: {
        activeCity: getCity(City.Amsterdam),
        activeSort: SortType.Popular,
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </Router>,
    );

    const description = getByText(offers[0].title);

    expect(description).toBeInTheDocument();
  });
});

