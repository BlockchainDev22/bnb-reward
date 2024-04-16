import { useState } from "react";
import {
  faPaperPlane,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import constants from "../../../json/constants.json";
import rewarderABI from "../../../json/RewarderABI.json";
import notify from "../../../utils/notify";

const DisruptiveTransfer = () => {
  
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [isProcessing, setProcessing] = useState(false);

  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  
  const send = async() => {

    if (!ethers.utils.isAddress(to)) {
      notify.warning("Invalid address", "Warning");
      return;
    }

    setProcessing(true);
    try {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      

      const Rewarder = new ethers.Contract(
        constants.rewarder,
        rewarderABI,
        signer
      );
      
      const token = await Rewarder.balanceOf(address);
      const tBalance = ethers.utils.formatUnits(token, "9");
      if (+tBalance < amount) {
        notify.warning("Insufficient token balance", "Warning");
        throw Error();
      }

      const fee = await Rewarder.disruptiveCoverageFee();
      const _amount = ethers.utils.parseUnits(amount, "9");
      const eth = await signer.getBalance();
      if (eth <= fee) {
        notify.warning("Insufficient BNB balance", "Warning");
        throw Error();
      }

      await Rewarder.disruptiveTransfer(to, _amount, {
        value: fee
      });

      notify.success("Disruptive Transfer Successfully", "Success");

    } catch(err) {
      console.log(err);
    }
    setProcessing(false);

  }

  const setMax = async() => {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      const Rewarder = new ethers.Contract(
        constants.rewarder,
        rewarderABI,
        signer
      );

      const income = await Rewarder.balanceOf(address);
      const balance = ethers.utils.formatUnits(income, "9");
      setAmount(+balance);
    } catch(err) {

    }
  }

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[450px] rounded-2xl border border-main bg-second px-12 py-8 flex flex-col gap-5">
        <h1 className="text-center">
          <span className="text-white font-semibold">
            Disruptive Transfer between 2 wallets
          </span>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-cyan-500 ml-2"
          />
        </h1>
        <div>
          <div className="relative">
            <input
              type="text"
              className="py-3 px-4 block w-full rounded-lg text-sm outline-none text-white bg-[#123257] dark:border-gray-700 dark:text-gray-400"
              placeholder="Recipient (address)"
              aria-describedby="hs-validation-name-success-helper"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              disabled={isProcessing}
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="number"
              id="hs-validation-name-success"
              name="hs-validation-name-success"
              className="py-3 px-4 block w-full rounded-lg text-sm outline-none text-white bg-[#123257] dark:border-gray-700 dark:text-gray-400"
              placeholder="Amount (RWRD)"
              required
              aria-describedby="hs-validation-name-success-helper"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={isProcessing}
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 z-10">
              <span className="text-cyan-500 cursor-pointer hover:underline" onClick={setMax}>
                Max
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-4"
            onClick={send}
          >
            {
              isProcessing ? (
                <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span className="capitalize">send</span>
                </>
              )
            }
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisruptiveTransfer;
