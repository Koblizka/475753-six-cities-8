import { City, SortType } from '../../common/const';
import { offers } from '../../mocks/offers';
import { getCity } from '../../utils/utils';
import { changeActiveCity, changeSortType, chooseActiveOffer, loadOfferDetails } from '../actions';
import { processesReducer } from './processes-reducer';

describe('Reducer: processeReducer', () => {
  const state = {
    activeCity: getCity(City.Paris),
    currentOffer: null,
    activeOffer: null,
    activeSort: SortType.Popular,
  };

  const offer = offers[0];

  it('should return Amsterdam city obj', () => {
    expect(processesReducer(state, changeActiveCity(City.Amsterdam)))
      .toStrictEqual({
        ...state,
        activeCity: getCity(City.Amsterdam),
      });
  });

  it('should return given Offer', () => {
    expect(processesReducer(state, chooseActiveOffer(offer)))
      .toStrictEqual({
        ...state,
        activeOffer: offer,
      });
  });

  it('should return given null', () => {
    expect(processesReducer(state, chooseActiveOffer(null)))
      .toStrictEqual({
        ...state,
        activeOffer: null,
      });
  });

  it('should change activeSort to HighToLow', () => {
    expect(processesReducer(state, changeSortType(SortType.HighToLow)))
      .toStrictEqual({
        ...state,
        activeSort: SortType.HighToLow,
      });
  });

  it('should return offer as currentOffer', () => {
    expect(processesReducer(state, loadOfferDetails(offer)))
      .toStrictEqual({
        ...state,
        currentOffer: offer,
      });
  });
});

