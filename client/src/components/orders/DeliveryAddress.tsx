import React from 'react';
import { IoLocationSharp, IoChevronDownOutline } from 'react-icons/io5';
import { YMaps, Map, GeolocationControl } from '@pbe/react-yandex-maps';
import ymaps from 'yandex-maps';
import clsx from 'clsx';

interface DeliveryAddressProps {
  setAddressDelivery: (address: string) => void;
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = React.memo(({ setAddressDelivery }) => {
  const ref = React.useRef<any>();
  const [dataMap, setDataMap] = React.useState<typeof ymaps>();
  const [address, setAddress] = React.useState<any>();
  const [hiddenMap, setHiddenMap] = React.useState(false);

  const mapState = React.useMemo(() => ({ center: [52.97, 36.06], zoom: 12, controls: [] }), []);

  const setGeo = async (event: any) => {
    const coords = (await event.get('coords')) as Array<number>;
    await ref.current.geoObjects.removeAll();
    if (!dataMap) return undefined;
    if (coords) {
      const res = await dataMap.geocode(coords);
      const first = res.geoObjects.get(0);
      setAddress(first.properties.get('text', {}));
      await ref.current.geoObjects.add(new dataMap.Placemark(coords, {}));
    }
  };

  const confirmAddress = (address: string) => {
    setAddressDelivery(address);
    setHiddenMap(false);
  };

  return (
    <div className={clsx('overflow-hidden transition-all duration-500', hiddenMap ? 'h-[420px]' : 'h-10')}>
      <button
        onClick={() => setHiddenMap(prev => !prev)}
        className="w-full p-2 flex gap-3 items-center rounded-md bg-gradient-to-r from-sky-600 to-sky-300 text-white"
      >
        <IoLocationSharp />
        <p className="flex-1 text-start">Укажите адрес доставки</p>
        <IoChevronDownOutline className={clsx('transition-transform duration-300', hiddenMap && 'rotate-180')} />
      </button>

      <div
        className={clsx(
          'w-full p-2 border bg-white border-sky-400 rounded-md mt-2 transition-transform duration-700',
          !hiddenMap && 'translate-y-full'
        )}
      >
        <div className="mb-3">
          <YMaps query={{ load: 'package.full', lang: 'ru_RU', apikey: 'bd4b3dee-7653-4721-a80c-5c6b2188a346' }}>
            <Map instanceRef={ref} defaultState={mapState} width={'100%'} onClick={setGeo} onLoad={ymaps => setDataMap(ymaps)}>
              <GeolocationControl options={{ float: 'left' }} />
            </Map>
          </YMaps>
        </div>
        <div className="text-sm ">
          <p className="line-clamp-1">Адрес: {address}</p>
          <button onClick={() => confirmAddress(address)} className="w-full mt-3 p-2 bg-sky-600 text-gray-100 rounded-md">
            Подтвердить адрес доставки
          </button>
        </div>
      </div>
    </div>
  );
});

export default DeliveryAddress;
