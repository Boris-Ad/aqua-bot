import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtTokenDecode } from '../utils/jwt-decode';

interface IUseToken {
  login: string;
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<IUseToken>()(
  persist(
    set => ({
      login: '',
      token: '',
      setToken: token => set(() => ({ token, login: jwtTokenDecode(token) })),
      removeToken: () => set(() => ({ token: '', login: '' })),
    }),
    {
      name: 'token',
    }
  )
);
