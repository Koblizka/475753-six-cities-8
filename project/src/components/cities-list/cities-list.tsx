import { City } from '../../types/city';
import { City as ActiveCity} from '../../common/const';

type CitiesListProps ={
  cities: City[];
  activeCity: ActiveCity;
}

function CitiesList({cities, activeCity}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a className={`locations__item-link tabs__item ${activeCity === city.name && 'tabs__item--active'}`} href="/">
              <span>{city.name}</span>
            </a>
          </li>
        ),
        )
      }
    </ul>
  );
}

export {CitiesList};
