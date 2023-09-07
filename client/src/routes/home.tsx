import BannerRoot from '../components/BannerRoot';
import BottleRoot from '../components/BottleRoot';
import RootSlider from '../components/RootSlider';
import { useLoadProductCategories } from '../hooks/useLoadProductCategories';
import { useLoadProductBottles } from '../hooks/useLoadProductBottles';

const HomePage: React.FC = () => {
  const { data: categories } = useLoadProductCategories();
  const { data: bottles } = useLoadProductBottles();

  return (
    <>
      <div className="bg-white p-[10px] rounded-md">
        <RootSlider />
      </div>
      <div className="bg-white p-[10px] rounded-md mt-2 space-y-4">
        <div>
          <h3 className="text-lg text-gray-600 font-medium">Чистая вода</h3>
        </div>

        {categories?.map(category => (
          <BannerRoot
            key={category.name}
            src={category.src}
            title={category.title}
            bottom_position={category.name === 'cleared' ? '-bottom-[2px]' : undefined}
            category={category.name}
          />
        ))}
      </div>
      <div className="mt-2 bg-white rounded-md">
        <div className="p-[10px] pb-0">
          <h3 className="text-lg text-gray-600 font-medium">Ёмкости</h3>
        </div>
        <div className="py-3 px-4 flex justify-between">
          {bottles?.map(bottle => (
            <BottleRoot key={bottle.size} src={bottle.src} size={bottle.size + ' Литров'} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
