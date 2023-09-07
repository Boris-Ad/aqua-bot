import { Error401 } from '../types/auth.types';
import { api } from './config.api';

type Token = { access_token: string };

export const signIn = async (data: { login: string; password: string }): Promise<Token | Error401> => {
  return await api.post('auth/login', { json: { ...data } }).json();
};

export const messageInTelegramBot = async (address: string) => {
  return await api.post('telegram', { json: {address} }).json();
};
