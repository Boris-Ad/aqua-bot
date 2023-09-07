export interface IJwtTokenDecodeResponse {
  login: string;
  exp: number;
  iat: number;
}

export interface IAdmin {
  login: string;
  password: string;
}

export interface Error401 {
  statusCode: number;
  message: string;
  error: string;
}
