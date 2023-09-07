import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductBottles} from '../api/products.api';

export const useLoadProductBottles = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['bottles'],
    queryFn: getProductBottles,
    initialData: () => queryClient.getQueryData(['bottles']),
    staleTime: Infinity,
  });
};