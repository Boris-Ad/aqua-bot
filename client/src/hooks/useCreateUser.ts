import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../api/user.api';
import { createInformingElement } from '../utils/createInformingElement';
import { useTelegram } from './telegram/useTelegram';

export const useCreateUser = (avatar?: string, name?: string, address?: string) => {
  const queryClient = useQueryClient();
  const {tgUser} = useTelegram()
  const tgId = tgUser?.id 

  const user = {
    telegId: tgId ?? 0,
    avatar,
    name,
    address,
  };

  return useMutation({
    mutationFn: () => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      if (avatar) {
        createInformingElement('Профиль создан', 'access');
      }
    },
    onError: () => {
      createInformingElement('Отказано в регистрации', 'danger');
    },
  });
};
