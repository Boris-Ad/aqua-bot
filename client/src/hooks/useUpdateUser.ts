import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../api/user.api';
import { IUser } from '../types/types';
import { createInformingElement } from '../utils/createInformingElement';
import { useTelegram } from './telegram/useTelegram';

export const useUpdateUser = (avatar: string, name: string, address: string) => {
  const queryClient = useQueryClient();
  const {tgUser} = useTelegram()
  const tgId = tgUser?.id 

  const user: IUser = {
    telegId: tgId || 0,
    avatar,
    name,
    address,
  };

  return useMutation({
    mutationKey: ['user'],
    mutationFn: () => updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      createInformingElement('Профиль обновлен', 'access');
    },
  });
};
