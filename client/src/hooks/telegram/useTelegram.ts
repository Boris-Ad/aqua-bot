import React from 'react';
import { useNavigate } from 'react-router-dom';

export function useTelegram() {
  const tg = window.Telegram.WebApp;
  const tgUser = tg.initDataUnsafe?.user;
  const queryId = tg.initDataUnsafe?.query_id;

  const onClose = () => {
    tg.close();
  };

  const setBackButton = (path: string) => {
    const { tg } = useTelegram();
    const navigate = useNavigate();

    React.useEffect(() => {
      tg.BackButton.show();
      tg.onEvent('backButtonClicked', () => navigate(path));
      return () => {
        tg.offEvent('backButtonClicked', () => navigate(path));
        tg.BackButton.hide();
      };
    }, []);
  };

  return { tg, onClose, tgUser, queryId, setBackButton };
}
