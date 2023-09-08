import ky from 'ky';
import { useAuthStore } from '../store/auth.store';


const tg = window.Telegram.WebApp;
const tg_id = tg.initDataUnsafe.user?.id;

export const api = ky.create({
  prefixUrl: 'https://aqua-bot.tw1.ru/api/',
 // prefixUrl: 'http://localhost:3000/api/',
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set('Authorization', tg_id?.toString() || '0');
      },
    ],
  },
});

export const adminApi = ky.create({
  prefixUrl: 'https://aqua-bot.tw1.ru/api/',
  // prefixUrl: 'http://localhost:3000/api/',
  hooks: {
    beforeRequest: [
      request => {
        const token = useAuthStore.getState().token;
        request.headers.set('Authorization', `Bearer ${token}`);
      },
    ],
  },
});
