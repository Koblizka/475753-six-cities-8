import {renderHook} from '@testing-library/react-hooks';
import { City } from '../common/const';
import { getCity } from '../utils/utils';
import { useMap } from './use-map';

describe('Hook: useMap', () => {
  it('should return map instance if correct ref was passed', () => {
    const city = getCity(City.Paris);

    const ref = {
      current: document.createElement('section'),
    };

    const {result}  = renderHook(() => useMap(ref, city));

    expect(result.current).not.toBe(null);
  });
});
