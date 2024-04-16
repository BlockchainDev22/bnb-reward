const TotalLiquidity = () => {
  return (
    <div className="mt-8 flex items-center gap-2 text-white rounded-2xl border border-main bg-second px-8 py-4">
      <div className="flex flex-col justify-center items-center w-[54px]">
        <img
          src="/assets/img/Total_liquidity_pool.png"
          alt="Total Liquidity"
          className="w-[54px] h-[54px]"
        />
      </div>
      <blockquote className="relative border-s-2 ps-4 sm:ps-6 dark:border-gray-700 w-full flex flex-col items-center justify-center">
        <p className="capitalize text-xs">total liquidity pool</p>
        <p className="text-xs">$ 1101111.32</p>
      </blockquote>
    </div>
  );
};

export default TotalLiquidity;
