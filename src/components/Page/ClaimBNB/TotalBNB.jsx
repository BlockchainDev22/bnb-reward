import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { ethers } from "ethers";
import constants from "../../../json/constants.json";
import rewarderABI from "../../../json/RewarderABI.json";
import { useAppContext } from "../../../context";

const TotalBNB = () => {

  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [BNBPool, setBNBPool] = useState(0);
  const { bnbPrice } = useAppContext();

  useEffect(() => {
    if (walletProvider && address) {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);

      const signer = ethersProvider.getSigner();

      const WBNB = new ethers.Contract(
        constants.wbnb,
        rewarderABI,
        signer
      );

      async function getBNBPool() {
        const bnb = await WBNB.balanceOf(constants.pancakePair)
        const pool = ethers.utils.formatEther(bnb);
        setBNBPool(+pool);
      }

      getBNBPool();
    }
  }, [walletProvider, address]);

  return (
    <div className="mt-8 flex items-center gap-2 text-white rounded-2xl border border-main bg-second px-8 py-4">
      <div className="flex flex-col justify-center items-center w-[54px]">
        <img
          src="/assets/img/Total_BNB_in_liquidity_pool.png"
          alt="Total BNB"
          className="w-[54px] h-[54px]"
        />
      </div>
      <blockquote className="relative border-s-2 ps-4 sm:ps-6 dark:border-gray-700 w-full flex flex-col items-center justify-center">
        <div>
          <p className="text-xs">Total BNB in liquidity pool</p>
        </div>
        <div className="flex gap-1 text-xs">
          <span>BNB</span>
          <span>
            <CountUp end={BNBPool} decimals={2} duration={1.5} separator="," />
          </span>
          <span>|</span>
          <span>BUSD</span>
          <span><CountUp end={BNBPool * bnbPrice} decimals={2} duration={1.5} separator="," /></span>
        </div>
      </blockquote>
    </div>
  );
};

export default TotalBNB;
