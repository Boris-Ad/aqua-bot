interface TotalCounterProps {
  totalPrice: number;
}

const TotalCounter: React.FC<TotalCounterProps> = ({ totalPrice }) => {
  return (
    <div className="w-full border bg-white border-sky-400 rounded-md ">
      <div className="px-5 py-2  border-b-[1px] border-sky-400">
        <p className="text-sm font-medium">Итого: {totalPrice} руб</p>
        <p className="text-sm font-medium">Скидка: 00 руб</p>
      </div>
      <div className="px-5 py-2">
        <span className="font-medium">Общий итог: {totalPrice} руб</span>
      </div>
    </div>
  );
};

export default TotalCounter;
