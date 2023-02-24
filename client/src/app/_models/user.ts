export interface User {
  username: string;
  token: string;
  photoUrl: string;
}

export interface LoginData {
  username: string | null;
  password: string | null;
}
