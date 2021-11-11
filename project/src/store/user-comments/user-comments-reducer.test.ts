import { DataStatus } from '../../common/const';
import userComments from '../../mocks/user-comment';
import { loadOfferComments, requireOfferComments, setCommentPostStatus } from '../actions';
import { userCommentsReducer } from './user-comments-reducer';

const state = {
  reviews: null,
  offerCommnetsLoadStatus: DataStatus.Default,
  commentPostStatus: DataStatus.Default,
};

describe('Reducer: userCommentsReducer', () => {
  it('Should update commentPostStatus', () => {
    expect(userCommentsReducer(state, setCommentPostStatus(DataStatus.IsSended)))
      .toEqual({
        ...state,
        commentPostStatus: DataStatus.IsSended,
      });
  });

  it('Should get reviews', () => {

    expect(userCommentsReducer(state, loadOfferComments(userComments)))
      .toEqual({
        ...state,
        reviews: userComments,
      });
  });

  it('Should update offerCommnetsLoadStatus', () => {

    expect(userCommentsReducer(state, requireOfferComments(DataStatus.IsLoaded)))
      .toEqual({
        ...state,
        offerCommnetsLoadStatus: DataStatus.IsLoaded,
      });
  });
});
