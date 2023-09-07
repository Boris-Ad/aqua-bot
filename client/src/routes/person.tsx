import React from 'react';
import DeliveryAddress from '../components/orders/DeliveryAddress';
import clsx from 'clsx';
import { useGetUser } from '../hooks/useGetUser';
import { useCreateUser } from '../hooks/useCreateUser';
import { useUpdateUser } from '../hooks/useUpdateUser';
import { createInformingElement } from '../utils/createInformingElement';

const PersonPage: React.FC = () => {
  const { data: user } = useGetUser();

  const avatars = ['man', 'woman', 'gamer', 'girl', 'user', 'dog'];
  const [avatar, setAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [addressDelivery, setAddressDelivery] = React.useState('');
  const createUser = useCreateUser(avatar, userName, addressDelivery);
  const updateUser = useUpdateUser(avatar, userName, addressDelivery);


  React.useEffect(() => {
    if (user?.avatar) {
      setAvatar(user?.avatar);
    }
    if (user?.name) {
      setUserName(user?.name);
    }
    if (user?.address) {
      setAddressDelivery(user?.address);
    }
  }, [user]);

  const savePersonData = () => {
    if (!avatar) {
      return createInformingElement('Укажите аватарку', 'danger');
    }

    if (!userName) {
      return createInformingElement('Укажите Имя', 'danger');
    }

    if (!addressDelivery) {
      return createInformingElement('Укажите Адрес', 'danger');
    }

    if (user) {
      updateUser.mutate();
    } else {
      createUser.mutate();
    }
  };

  return (
    <div className="text-sky-600 space-y-4">
      <div className="w-full px-2 pt-3 pb-4 border bg-white border-sky-400 rounded-md">
        <h3 className="text-lg font-medium">{user ? 'Изменить данные:' : 'Сохранить данные:'}</h3>
        <p>Аватарка:</p>
        <div className="my-2 w-full flex items-center gap-2">
          <div className="h-[40px] w-[40px] mr-2 border border-sky-400 rounded-md flex justify-center items-center">
            {avatar && <img src={`/avatars/${avatar}.png`} width="30" height="30" alt="man" onClick={() => setAvatar('')} />}
          </div>
          <div className="h-[30px] flex gap-3">
            {avatars.map(ava => (
              <img key={ava} src={`/avatars/${ava}.png`} width="30" height="30" alt={ava} onClick={() => setAvatar(ava)} />
            ))}
          </div>
        </div>
        <p className="">Имя:</p>
        <input
          autoComplete="off"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          type="text"
          name="name"
          className="p-2 my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring
           focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        />
        <p className="mt-4 leading-3">Адрес доставки:</p>

        <div className="my-3">
          <DeliveryAddress setAddressDelivery={setAddressDelivery} />
          {addressDelivery && <p className="mt-2">{addressDelivery}</p>}
        </div>
        <button
          onClick={savePersonData}
          className={clsx(
            'p-2 my-2  text-gray-100 rounded-md active:ring-2 active:ring-offset-2 bg-sky-600 active:ring-sky-400 transition'
          )}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default PersonPage;
