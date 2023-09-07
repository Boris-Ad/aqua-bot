import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrder } from '../api/orders.api';
import { createInformingElement } from '../utils/createInformingElement';

export const useDeleteOrder = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      createInformingElement('Заказ удален', 'access');
    },
  });
};
