import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

export interface IAuth {
  token: string;
}
export interface AuthState {
  pending: boolean;
  token: string;
  error: string | null;
}

export interface LoginPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface LoginSuccessPayload {
  token: string;
}
export interface LoginFailurePayload {
  error: string;
}

export interface SignupSuccessPayload {
  token: string;
}

export interface SignupFailurePayload {
  error: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export interface SignupPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
  payload: SignupPayload;
}

export type SignupSuccess = {
  type: typeof SIGNUP_SUCCESS;
  payload: SignupSuccessPayload;
};

export type SignupFailure = {
  type: typeof SIGNUP_FAILURE;
  payload: SignupFailurePayload;
};

export type AuthActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | SignupFailure
  | SignupSuccess
  | SignupRequest;
