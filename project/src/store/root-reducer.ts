import {combineReducers} from 'redux';
import {offersReducer} from './offers/offers-reducer';
import {processesReducer} from './processes/processes-reducer';
import {userCommentsReducer} from './user-comments/user-comments-reducer';
import {userReducer} from './user/user-reducer';


enum NameSpace {
  Offers = 'OFFERS',
  Processes = 'PROCESSES',
  UserComments = 'USER_COMMENTS',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
  [NameSpace.Processes]: processesReducer,
  [NameSpace.UserComments]: userCommentsReducer,
  [NameSpace.User]: userReducer,
});

type RootState = ReturnType<typeof rootReducer>

export {NameSpace, rootReducer};
export type {RootState};
