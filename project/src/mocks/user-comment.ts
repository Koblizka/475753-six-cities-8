import { UserComment, UserCommentServerside } from '../types/user-comment';

const userComments: UserComment[] = [
  {
    review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('2019-05-08T14:13:56.569Z'),
    reviewId: '1',
    rank: 4,
    user: {
      userAvatar: 'img/1.png',
      id: '4',
      isPro: false,
      userName: 'Max',
    },
  },
];

const userCommentsServerside: UserCommentServerside[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': '1',
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': '4',
      'is_pro': false,
      'name': 'Max',
    },
  },
];

const userCommentPost: {comment: string, rating: number} = {
  'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'rating': 4,
};

export {
  userComments,
  userCommentsServerside,
  userCommentPost
};
