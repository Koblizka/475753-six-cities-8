import {SortType} from '../../common/const';
import {City} from '../../types/city';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

const getActiveCity = (state: State): City => state[NameSpace.Processes].activeCity;
const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Processes].currentOffer;
const getActiveOffer = (state: State): Offer | null => state[NameSpace.Processes].activeOffer;
const getActiveSort = (state: State): SortType => state[NameSpace.Processes].activeSort;

export {
  getActiveCity,
  getCurrentOffer,
  getActiveOffer,
  getActiveSort
};

