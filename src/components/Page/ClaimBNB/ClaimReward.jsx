import { useEffect, useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import CountUp from "react-countup";
import { faGift, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../../json/constants.json";
import rewarderABI from "../../../json/RewarderABI.json";
import moment from "moment";

const ClaimReward = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [rewardPool, setRewardPool] = useState(0);
  const [BNBReward, setBNBReward] = useState(0);
  const [nextClaimDate, setNextClaimDate] = useState(0);
  const [lockPeriod, setLockPeriod] = useState(0);
  const [isProcessing, setProcessing] = useState(false);

  const getRewardPool = async() => {
    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      const Rewarder = new ethers.Contract(
        constants.rewarder,
        rewarderABI,
        signer
      );

    const pool = await ethersProvider.getBalance(constants.rewarder);
    const _reward = ethers.utils.formatEther(pool);

    const income = await Rewarder.calculateBNBReward(address);
    const _BNBReward = ethers.utils.formatEther(income);

    const claimDate = await Rewarder.nextAvailableClaimDate(address);
    const lock = await Rewarder.disableEasyRewardFrom();

    setNextClaimDate(claimDate.toNumber() * 1000);
    setLockPeriod(lock.toNumber());
    setRewardPool(+_reward);
    setBNBReward(+_BNBReward);
  }

  useEffect(() => {
    if (walletProvider && address && getRewardPool) {
        
      getRewardPool();
    }
  }, [walletProvider, address, getRewardPool]);

  const claimReward = async() => {

    try {
      setProcessing(true);
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      const Rewarder = new ethers.Contract(
        constants.rewarder,
        rewarderABI,
        signer
      );

      await Rewarder.claimBNBReward();

    } catch(err) {

    }

    await getRewardPool();
    setProcessing(false);
  }

  return (
    <div className="mt-8 text-white rounded-2xl border border-main bg-second px-2 md:px-12 py-4">
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-60">
          <h3 className="text-xs md:text-base">Reward Pool</h3>
          <img
            src="/assets/img/BNB_Reward.png"
            alt="BNB Reward"
            className="w-20"
          />
          <h1 className="text-sm md:text-xl">
            BNB{" "}
            <CountUp
              end={rewardPool.toFixed(2)}
              duration={1.5}
              separator=" "
              decimals={2}
              decimal="."
            />
          </h1>
        </div>
        <blockquote className="relative border-s-2 ps-4 sm:ps-6 dark:border-gray-700 w-full flex flex-col items-center justify-center">
          <div>
            <span className="text-xs md:text-2xl font-semibold">
              <span className="text-xs md:text-sm">My reward: </span>
              <CountUp
                end={BNBReward}
                duration={1.5}
                separator=" "
                decimals={10}
                decimal="."
              />{" "}
              BNB
            </span>
          </div>
          <div>
            <p className="text-cyan-500 text-center text-[8px] md:text-sm">
              <span>
                *pool is always changing based on buys, sells, and collects by
                others, learn more here
              </span>
              <a
                href="https://docs.rewarder.finance/innovation/earn-bnb"
                rel="noreferrer"
                target="_blank"
                className="ml-1"
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
              </a>
            </p>
          </div>
          <div>
            <h1 className="text-xs md:text-md text-center">
              {
                (nextClaimDate) ? <span>You can collect your BNB at {moment(nextClaimDate).format('MMMM Do YYYY, h:mm A')} &#40;at your timezone&#41;</span>
                : <span>You will receive 0.000000 BNB &#40;after tax&#41;</span>
              }            
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="py-3 px-4 hidden md:inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none my-4"
              disabled={!BNBReward || moment().unix() < lockPeriod}
              onClick={claimReward}
            >
              {
                isProcessing ? (
                  <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faGift} />
                    <span className="capitalize">claim my reward</span>
                  </>
                )
              }
            </button>
          </div>
        </blockquote>
      </div>
      <div className="text-center">
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none my-4 mx-auto md:hidden"
            disabled={!BNBReward || moment().unix() < lockPeriod}
            onClick={claimReward}
          >
            {
              isProcessing ? (
                <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
              ) : (
                <>
                  <FontAwesomeIcon icon={faGift} />
                  <span className="capitalize">claim my reward</span>
                </>
              )
            }
          </button>
        </div>
    </div>
  );
};

export default ClaimReward;
