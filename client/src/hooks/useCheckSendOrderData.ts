import { useDailyDateState } from '../store/daily-date.store';

import { useOrderStore } from '../store/useOrder';
import { createInformingElement } from '../utils/createInformingElement';

export const useCheckSendOrderData = () => {
  const dailyDateArr = useDailyDateState(state => state.deliveryDays);
  const totalPrice = useOrderStore(state => state.totalPrice);

  function checkSendOrderData(address: string, daily: boolean): boolean {
    if (daily) {
      if (dailyDateArr.length < 1) {
        createInformingElement('Укажите дату', 'danger');
        return false;
      }
    }

    if (totalPrice < 1) {
      createInformingElement('Нет заказа', 'danger');

      return false;
    }
    if (address.trim().length < 1) {
      createInformingElement('Укажите адрес', 'danger');
      return false;
    }

    return true;
  }

  return { checkSendOrderData };
};
