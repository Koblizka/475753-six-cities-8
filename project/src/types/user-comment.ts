import {User, UserServerside} from './user';

type UserComment = {
  reviewId: string;
  user: User;
  review: string
  rank: number;
  date: Date;
}

type UserCommentServerside = {
  'id': string;
  'user': UserServerside;
  'comment': string
  'rating': number;
  'date': string;
}

type NewComment = {
  comment: string;
  rating: number;
}

export type {
  UserComment,
  UserCommentServerside,
  NewComment
};
