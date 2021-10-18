import { City } from '../../types/city';

type CitiesListProps ={
  cities: City[];
  activeCity: string;
}

function CitiesList({cities, activeCity}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => {
          const keyValue = `${city}-${index}`;

          return (
            <li className="locations__item" key={keyValue}>
              <a className={`locations__item-link tabs__item ${activeCity === city.name && 'tabs__item--active'}`} href="/">
                <span>{city.name}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export {CitiesList};
