import { User } from './user';

type Review = {
  offerId: string;
  reviewId: string;
  user: User;
  review: string
  rank: number;
  date: Date;
}

export type {Review};
