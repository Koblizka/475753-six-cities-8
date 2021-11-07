import clsx from 'clsx';
import {MouseEvent} from 'react';
import {SortType, sortTypeMap} from '../../common/const';
import {changeSortType} from '../../store/actions';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActiveSort} from '../../store/processes/selectors';


function OffersSort(): JSX.Element {
  const dispatch = useDispatch();

  const activeSort = useSelector(getActiveSort);

  const handleSortTypeChoose = (sortType: SortType) => dispatch(changeSortType(sortType));


  const [selectState, setSelectState] = useState<boolean>(false);

  const handleClick = () => setSelectState(!selectState);

  const handleOptionChoose = (evt: MouseEvent<HTMLLIElement>) => {
    handleSortTypeChoose(evt.currentTarget.dataset.type as SortType);
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
export default OffersSort;
