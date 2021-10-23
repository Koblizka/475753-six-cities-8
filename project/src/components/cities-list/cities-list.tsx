import {City} from '../../types/city';
import clsx from 'clsx';
import {Dispatch} from 'redux';
import {Actions} from '../../types/actions';
import {MouseEvent} from 'react';
import {changeActiveCity, fillOffersList} from '../../store/actions';
import {connect, ConnectedProps} from 'react-redux';

type CitiesListProps ={
  cities: City[];
  activeCity: City;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => (
  {
    onActiveCityChange(evt: MouseEvent<HTMLLIElement>, activeCityName: string) {
      evt.preventDefault();

      if (activeCityName !== evt.currentTarget.innerText) {
        dispatch(changeActiveCity(evt.currentTarget.innerText));
        dispatch(fillOffersList());
      }
    },
  }
);

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CitiesListProps;

function CitiesList({cities, activeCity, onActiveCityChange}: ConnectedComponentProps): JSX.Element {
  const activeCityName: string = activeCity.name;

  const handleClick = (evt: MouseEvent<HTMLLIElement>) => {
    onActiveCityChange(evt, activeCityName);
  };

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li className="locations__item" key={city.name} onClick={handleClick}>
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
export default connector(CitiesList);
