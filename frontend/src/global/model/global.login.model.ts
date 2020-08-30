export type LoginState = {
  isLoggedIn: boolean;
  authToken: string;
};

export type LoginRequestPayload = {
  userId: string;
  password: string;
  successCallback: () => void;
};

export type LoginRequestBody = {
  userId: string;
  password: string;
};

export type LoginSuccessPayload = LoginState;

export type LoginResponseBody = {
  status: string;
  authToken: string;
};
