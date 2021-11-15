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

type UserAuthData = User & {
  email: string;
  token: string;
}

type UserAuthDataServerside = UserServerside & {
  'email': string;
  'token': string;
}


export type {
  User,
  UserServerside,
  UserAuthData,
  UserAuthDataServerside
};
