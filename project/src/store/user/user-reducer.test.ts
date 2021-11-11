import { AuthorizationStatus } from '../../common/const';
import { ActionType } from '../../types/actions';
import { userReducer } from './user-reducer';


describe('Reducer: userReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  it('should update authorizationStatus to "IS_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NotAuth};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.IsAuth,
    };

    expect(userReducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.IsAuth});
  });

  it('should update authorizationStatus to "NOT_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NotAuth};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.NotAuth,
    };

    expect(userReducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NotAuth});
  });
});

