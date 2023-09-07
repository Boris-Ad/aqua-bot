import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductCategories } from '../api/products.api';

export const useLoadProductCategories = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['categories'],
    queryFn: getProductCategories,
    initialData: () => queryClient.getQueryData(['categories']),
    staleTime: Infinity,
  });
};
