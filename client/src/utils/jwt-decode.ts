import jwt_decode from 'jwt-decode';
import { IJwtTokenDecodeResponse } from '../types/auth.types';

export const jwtTokenDecode = (token: string) => {
  const value = jwt_decode(token) as IJwtTokenDecodeResponse | undefined;
  if (value?.login) {
    return value.login;
  }
  return '';
};
