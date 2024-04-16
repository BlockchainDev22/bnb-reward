import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'
import { ethers } from "ethers";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../json/constants.json";
import rewarderABI from "../../json/RewarderABI.json";
import CountUp from "react-countup";
import { useAppContext } from "../../context";

const AddressInfo = () => {

  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const { currentPrice } = useAppContext();

  const [tokenBalance, setTokenBalance] = useState(0);

  useEffect(() => {
    if (walletProvider && address) {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      const Rewarder = new ethers.Contract(constants.rewarder, rewarderABI, signer);
      async function getTokenBalance() {
        const income = await Rewarder.balanceOf(address);
        const balance = ethers.utils.formatUnits(income, "9");
        setTokenBalance(+balance);
      }

      getTokenBalance();
    }
  }, [walletProvider, address]);

  return (
    <div className="border border-main rounded-2xl p-6 text-white bg-main">
      <h1 className="text-xl font-bold">Address information</h1>

      <div className="mt-4">
        <h3 className="text-[13px]">Your address</h3>
        <p className="text-sm text-ellipsis w-48 overflow-hidden">{address.slice(0, 6) + '...' + address.slice(-4)}</p>
        <div className="flex gap-2 flex-wrap items-center">
          <CopyToClipboard text={address}>
            <span className="text-xs cursor-pointer">
              <FontAwesomeIcon icon={faCopy} size="lg" className="mr-1" />
              Copy address
            </span>
          </CopyToClipboard>
          <div>
            <a
              className="text-xs cursor-pointer"
              href={`https://bscscan.com/address/${address}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/img/bscscan.svg"
                alt="bscscan"
                className="w-4 mr-1 inline-block"
              />
              View on Bscscan Explorer
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-[13px]">Your Rewarder Balance:</h3>
        <p className="uppercase">RWRD <CountUp
              end={tokenBalance}
              duration={1.5}
              separator=","
              decimals={2}
              decimal="."
            /></p>
        <p>&#40;<CountUp
              end={currentPrice * tokenBalance}
              duration={1.5}
              separator=","
              decimals={10}
              decimal="."
            />$&#41;</p>
      </div>
    </div>
  );
};

export default AddressInfo;
