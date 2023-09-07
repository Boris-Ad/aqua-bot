import { IoLocationSharp } from 'react-icons/io5';
import { useGetUser } from '../../hooks/useGetUser';
import React from 'react';

interface AddressDeliveryProps {
  address: string;
}

const AddressDelivery: React.FC<AddressDeliveryProps> = ({ address }) => {
  const { data: user } = useGetUser();

  return (
    <div className="border-t-[1px]  border-sky-400 mt-4 mb-2 pt-2">
      <div className="flex items-center gap-3">
        <IoLocationSharp />
        <p>Адрес доставки:</p>
      </div>
      <p className="line-clamp-2">{address ? address : user?.address}</p>
    </div>
  );
};

export default AddressDelivery;
