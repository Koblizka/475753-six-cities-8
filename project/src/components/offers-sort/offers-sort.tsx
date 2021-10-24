import clsx from 'clsx';
import {MouseEvent} from 'react';
import {sortTypeMap} from '../../common/const';
import {changeSortType} from '../../store/actions';
import {Actions} from '../../types/actions';
import {State} from '../../types/state';
import {Dispatch, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';


const mapStateToProps = ({activeSort}: State) => ({
  activeSort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => (
  {
    onSortTypeChoose(sortType: string) {
      dispatch(changeSortType(sortType));
    },
  }
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type TypeFromRedux = ConnectedProps<typeof connector>;


function OffersSort({activeSort, onSortTypeChoose}: TypeFromRedux): JSX.Element {
  const [selectState, setSelectState] = useState<boolean>(false);

  const handleClick = () => setSelectState(!selectState);

  const handleOptionChoose = (evt: MouseEvent<HTMLLIElement>) => {
    onSortTypeChoose(evt.currentTarget.dataset.type as string);
    setSelectState(!selectState);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {sortTypeMap[activeSort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${clsx(selectState && 'places__options--opened')}`}>
        {
          [...Object.entries(sortTypeMap)].map(([type, value]): JSX.Element => (
            <li
              className={`places__option ${clsx(activeSort === type && 'places__option--active')}`}
              data-type={type}
              key={`${type}`}
              tabIndex={0}
              onClick={handleOptionChoose}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export {OffersSort};
export default connector(OffersSort);
