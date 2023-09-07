import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserCurrentOrdersForAdmin } from '../../api/orders.api';


export const useLoadUserOrdersForAdmin = (id:number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['orders'],
    queryFn: () =>  getUserCurrentOrdersForAdmin(id),
    initialData: () => queryClient.getQueryData(['orders']),
  });
};