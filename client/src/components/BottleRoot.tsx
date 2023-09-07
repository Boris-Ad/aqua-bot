
interface BottleRootProps {
  src: string;
  size:string
}

const BottleRoot: React.FC<BottleRootProps> = ({ src, size }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[69px] h-[69px] rounded-full bg-gradient-to-b from-sky-200 to-sky-600 flex justify-center items-center">
        <img src={src} alt={src} />
      </div>
      <p className="text-cyan-700 text-sm font-medium">{size}</p>
    </div>
  );
};

export default BottleRoot;

