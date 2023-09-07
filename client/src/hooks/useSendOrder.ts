import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendOrder } from '../api/orders.api';
import { useOrderStore } from '../store/useOrder';
import { IOrder } from '../types/types';
import { useDailyDateState } from '../store/daily-date.store';
import { useGetUser } from './useGetUser';
import { useCreateUser } from './useCreateUser';
import { useCheckSendOrderData } from './useCheckSendOrderData';
import { HTTPError } from 'ky';
import { createInformingElement } from '../utils/createInformingElement';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from './telegram/useTelegram';
import { messageInTelegramBot } from '../api/admin.api';

export const useSendOrder = (category: string, address: string, dailyDelivery: boolean) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [bottle5, bottle10, bottle20] = useOrderStore(state => [state.bottle5, state.bottle10, state.bottle20]);
  const totalPrice = useOrderStore(state => state.totalPrice);
  const deliveryDays = useDailyDateState(state => state.deliveryDays).join(' ');
  const dailyWeek = useDailyDateState(state => state.dailyWeek);
  const { data: user } = useGetUser();
  const currentAddress = address || user?.address || '';
  const {tgUser} = useTelegram()
  const tgId = tgUser?.id 

  const createUser = useCreateUser();
  const { checkSendOrderData } = useCheckSendOrderData();

  const order: IOrder = {
    userTelegId: tgId ?? 0,
    bottle5,
    bottle10,
    bottle20,
    categoryName: category,
    address: currentAddress,
    price: totalPrice,
    daily: dailyDelivery,
    dailyData: deliveryDays,
    dailyWeek,
  };

  const mutation = useMutation({
    mutationFn: () => sendOrder(order),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      createInformingElement('Заказ принят', 'access');
      messageInTelegramBot(currentAddress)
      navigate('/home');
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const json = await error.response.json();
        if (error.response.status === 400 && json.error === 'order') {
          createInformingElement(json.message, 'danger');
        }
      }
    },
  });

  return async function () {
    const check = checkSendOrderData(currentAddress, dailyDelivery);
    if (!check) return;

    if (!user) {
      await createUser.mutateAsync();
      await mutation.mutateAsync();
    } else {
      await mutation.mutateAsync();
    }
  };
};
