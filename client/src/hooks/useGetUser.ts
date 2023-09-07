import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user.api';

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  });
};
