import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrders } from '../../api/orders.api';
import { useNavigate } from 'react-router-dom';

export const useLoadOrders = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    initialData: () => queryClient.getQueryData(['orders']),
    retry: false,
    onError: () => {
      navigate('/auth', { replace: true });
    },
  });
};
