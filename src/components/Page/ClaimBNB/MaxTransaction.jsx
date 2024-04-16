import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from "react-copy-to-clipboard";
import constants from "../../../json/constants.json";
import rewarderABI from "../../../json/RewarderABI.json";
import CountUp from "react-countup";

const MaxTransaction = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [maxTxAmount, setMaxTxAmount] = useState(0);

  useEffect(() => {
    if (walletProvider && address) {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      const Rewarder = new ethers.Contract(
        constants.rewarder,
        rewarderABI,
        signer
      );
      async function getMaxTxAmount() {
        const income = await Rewarder._maxTxAmount();
        const _maxTxAmount = ethers.utils.formatUnits(income, "9");

        setMaxTxAmount(+_maxTxAmount);
      }

      getMaxTxAmount();
    }
  }, [walletProvider, address]);

  return (
    <div className="mt-8 flex items-center gap-2 text-white rounded-2xl border border-main bg-second px-8 py-4">
      <div className="flex flex-col justify-center items-center md:w-[54px] w-1/4">
        <img
          src="/assets/img/Max_trans.png"
          alt="Max Transaction"
          className="w-[54px] h-[54px]"
        />
      </div>
      <blockquote className="relative border-s-2 ps-4 sm:ps-6 dark:border-gray-700 w-full flex flex-col items-center justify-center">
        <div>
          <p className="capitalize text-xs">max transaction amount</p>
        </div>
        <div className="text-xs">
          <span className="uppercase">rwrd </span>
          <span>
            <CountUp end={maxTxAmount} duration={1.5} separator="," />
          </span>
          <CopyToClipboard text="">
            <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard>
          <span> | </span>
          <span>BNB </span>
          <span>0.2483</span>
          <CopyToClipboard text="">
            <FontAwesomeIcon icon={faCopy} />
          </CopyToClipboard>
        </div>
      </blockquote>
    </div>
  );
};

export default MaxTransaction;
