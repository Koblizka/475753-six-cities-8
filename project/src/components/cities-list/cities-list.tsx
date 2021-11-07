import {City} from '../../types/city';
import clsx from 'clsx';
import {MouseEvent} from 'react';
import {changeActiveCity} from '../../store/actions';
import {useDispatch} from 'react-redux';
import React from 'react';

type CitiesListProps ={
  cities: City[];
  activeCity: City;
}

function CitiesList({cities, activeCity}: CitiesListProps): JSX.Element {
  const dispatch = useDispatch();

  const handleActiveCityChange = (cityName: string) => {
    dispatch(changeActiveCity(cityName));
  };

  const activeCityName: string = activeCity.name;

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    if (evt.currentTarget.dataset.city && evt.currentTarget.dataset.city !== activeCityName) {
      handleActiveCityChange(evt.currentTarget.dataset.city);
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a
              className={`locations__item-link tabs__item ${clsx(activeCityName === city.name && 'tabs__item--active')}`}
              data-city={city.name}
              href="/"
              onClick={handleClick}
            >
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
export default React.memo(CitiesList);
