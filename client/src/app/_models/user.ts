export interface User {
  username: string;
  token: string;
}

export interface LoginData {
  username: string | null;
  password: string | null;
}
