import {AuthorizationStatus} from '../../common/const';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export {getAuthorizationStatus};
