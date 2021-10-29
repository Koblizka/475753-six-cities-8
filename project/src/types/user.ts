type User = {
  id: string;
  userName: string;
  userAvatar: string;
  isPro: boolean;
}

type UserServerside =
Omit<User,
  | 'userName'
  | 'userAvatar'
  | 'isPro'
  > & {
  'name': string;
  'avatar_url': string;
  'is_pro': boolean;
}

export type {User, UserServerside};
