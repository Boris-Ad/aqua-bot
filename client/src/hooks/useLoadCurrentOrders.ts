import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCurrentOrders } from '../api/orders.api';

export const useLoadCurrentOrders = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['orders'],
    queryFn: getCurrentOrders,
    initialData: () => queryClient.getQueryData(['orders']),
  });
};
