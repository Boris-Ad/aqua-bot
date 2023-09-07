import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/user.api';
import { useNavigate } from 'react-router-dom';

export const useGetUsersQuery = () => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ['user'],
    queryFn: getUsers,
    retry: false,
    onError: () => {
      navigate('/auth', { replace: true });
    },
  });
};
