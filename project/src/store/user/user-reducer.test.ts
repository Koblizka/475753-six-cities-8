import { AuthorizationStatus } from '../../common/const';
import { ActionType } from '../../types/actions';
import { userReducer } from './user-reducer';


describe('Reducer: userReducer', () => {
  const state = {
    authorizationStatus: AuthorizationStatus.NotAuth,
    userAuthData: null,
  };

  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(
        {
          authorizationStatus: AuthorizationStatus.Unknown,
          userAuthData: null,
        },
      );
  });

  it('should update authorizationStatus to "IS_AUTH"', () => {
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.IsAuth,
    };

    expect(userReducer(state, requiredAuthorizationAction))
      .toEqual(
        {
          authorizationStatus: AuthorizationStatus.IsAuth,
          userAuthData: null,
        },
      );
  });

  it('should update authorizationStatus to "NOT_AUTH"', () => {
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.NotAuth,
    };

    expect(userReducer(state, requiredAuthorizationAction))
      .toEqual(
        {
          authorizationStatus: AuthorizationStatus.NotAuth,
          userAuthData: null,
        },
      );
  });
});

