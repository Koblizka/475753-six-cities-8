import {AuthorizationStatus} from '../../common/const';
import {State} from '../../types/state';
import { UserAuthData } from '../../types/user';
import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUserAuthData = (state: State): UserAuthData | null => state[NameSpace.User].userAuthData;

export {getAuthorizationStatus, getUserAuthData};
