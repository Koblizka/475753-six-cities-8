import {Review} from '../types/review';
import {getRandomeDate} from '../utils/utils';
import {Users} from './users';

const Reviews: Review[] = [
  {
    offerId: '1',
    reviewId: '1',
    user: Users[0],
    review: 'POPIACHSJA111!!!11',
    rank: 2,
    date: getRandomeDate(),
  },
  {
    offerId: '1',
    reviewId: '2',
    user: Users[1],
    review: 'AWSAME',
    rank: 4,
    date: getRandomeDate(),
  },
  {
    offerId: '2',
    reviewId: '1',
    user: Users[2],
    review: 'NBoooooooo ',
    rank: 2,
    date: getRandomeDate(),
  },
  {
    offerId: '2',
    reviewId: '3',
    user: Users[0],
    review: 'Ahahahh hhahahah ',
    rank: 2,
    date: getRandomeDate(),
  },
  {
    offerId: '3',
    reviewId: '3',
    user: Users[1],
    review: 'sfjsbafbjkf asfnsd s sj s s s s ',
    rank: 2,
    date: getRandomeDate(),
  },
];

export {Reviews};
