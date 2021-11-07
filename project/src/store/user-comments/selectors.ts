import {DataStatus} from '../../common/const';
import {State} from '../../types/state';
import {UserComment} from '../../types/user-comment';
import {NameSpace} from '../root-reducer';

const getReviews = (state: State): UserComment[] | null => state[NameSpace.UserComments].reviews;
const getOfferCommnetsLoadStatus = (state: State): DataStatus => state[NameSpace.UserComments].offerCommnetsLoadStatus;
const getCommentPostStatus = (state: State): DataStatus => state[NameSpace.UserComments].commentPostStatus;

export {
  getReviews,
  getOfferCommnetsLoadStatus,
  getCommentPostStatus
};
