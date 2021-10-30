type User = {
  id: string;
  userName: string;
  userAvatar: string;
  isPro: boolean;
}

type UserServerside = {
  'id': string;
  'name': string;
  'avatar_url': string;
  'is_pro': boolean;
}

export type {User, UserServerside};
