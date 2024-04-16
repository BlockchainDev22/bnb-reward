import CountUp from "react-countup";
import { useAppContext } from "../../../context";

const CurrentPrice = () => {

  const { currentPrice, decimal } = useAppContext();

  return (
    <div className="mt-8 flex items-center gap-2 text-white rounded-2xl border border-main bg-second px-8 py-4">
      <div className="flex flex-col justify-center items-center w-[54px]">
        <img
          src="/assets/img/1_mil_SMRAT.png"
          alt="Current 1 mil SMRAT Price"
          className="w-[54px] h-[54px]"
        />
      </div>
      <blockquote className="relative border-s-2 ps-4 sm:ps-6 dark:border-gray-700 w-full flex flex-col items-center justify-center">
        <p className="text-xs">Current RWRD Price</p>
        <p className="text-xs">$ <CountUp
              end={currentPrice}
              duration={1.5}
              separator=","
              decimals={decimal}
              decimal="."
            /></p>
      </blockquote>
    </div>
  );
};

export default CurrentPrice;
