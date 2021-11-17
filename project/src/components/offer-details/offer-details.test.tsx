import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { NameSpace } from '../../store/root-reducer';
import { offers } from '../../mocks/offers';
import { AuthorizationStatus, City, DataStatus, SortType } from '../../common/const';
import * as Redux from 'react-redux';
import OfferScreen from './offer-details';
import { userComments } from '../../mocks/user-comment';
import { getCity } from '../../utils/utils';

describe('Component: OfferScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Offers]: {nearbyOffers: offers},
      [NameSpace.User]: {authorizationStatus: AuthorizationStatus.IsAuth},
      [NameSpace.UserComments]: {
        reviews: userComments,
        offerCommnetsLoadStatus: DataStatus.IsLoaded,
        commentPostStatus: DataStatus.Default,
      },
      [NameSpace.Processes]: {
        activeCity: getCity(City.Paris),
        currentOffer: offers[0],
        activeOffer: offers[0],
        activeSort: SortType.Popular,
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByText} = render(
      <Router history={history}>
        <Provider store={store}>
          <OfferScreen />
        </Provider>
      </Router>,
    );

    const description = getByText(offers[0].description);

    expect(description).toBeInTheDocument();
  });
});

