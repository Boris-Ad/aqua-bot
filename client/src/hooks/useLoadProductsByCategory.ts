import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/products.api';

export const useLoadProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products-by-category', category],
    queryFn: () => getProductsByCategory(category),
    staleTime: Infinity,
    keepPreviousData: true,
  });
};
