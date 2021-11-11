import { UserComment } from '../types/user-comment';

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

export default userComments;
