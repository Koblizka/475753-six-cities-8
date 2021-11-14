import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { SortType } from '../../common/const';
import { NameSpace } from '../../store/root-reducer';
import OffersSort from './offers-sort';


describe('Component: OffersSort', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const mockStore = configureMockStore();
    const store = mockStore({
      [NameSpace.Processes]: {activeSort: SortType.Popular},
    });


    const {getByText} = render(
      <Router history={history}>
        <Provider store={store} >
          <OffersSort />
        </Provider>
      </Router>,
    );

    const description = getByText('Sort by');

    expect(description).toBeInTheDocument();
  });
});
