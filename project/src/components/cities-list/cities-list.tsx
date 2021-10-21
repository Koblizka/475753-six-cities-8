import {City} from '../../types/city';
import clsx from 'clsx';

type CitiesListProps ={
  cities: City[];
  activeCity: City;
}

function CitiesList({cities, activeCity}: CitiesListProps): JSX.Element {
  const activeCityName: string = activeCity.name;

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a className={`locations__item-link tabs__item ${clsx(activeCityName === city.name && 'tabs__item--active')}`} href="/">
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
