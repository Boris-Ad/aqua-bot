import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isCompleteOrder } from '../../api/orders.api';

export const useSetOrderCompleted = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => isCompleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};
