import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { City } from '../../common/const';
import CitiesOffersEmpty from './cities-offers-empty';


describe('Component: CitiesOffersEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const activeCity = City.Amsterdam;

    const {getByText} = render(
      <Router history={history}>
        <CitiesOffersEmpty activeCity={activeCity} />
      </Router>,
    );

    const description = getByText(`We could not find any property available at the moment in ${activeCity}`);

    expect(description).toBeInTheDocument();
  });
});
