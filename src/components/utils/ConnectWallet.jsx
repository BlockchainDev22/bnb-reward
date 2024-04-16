import { useWeb3Modal } from "@web3modal/ethers5/react";

const ConnectWallet = () => {
  const { open } = useWeb3Modal();

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center flex-col items-center rounded-2xl border border-main bg-main p-8 w-[460px] text-white">
        <img src="/assets/img/logo.png" alt="logo" className="w-32" />
        <h3 className="mt-4">Welcome to Rewarder.net - Here you will earn BNB rewards every 48 hours!</h3>
        <div className="bg-second rounded-lg p-8 mt-4 flex flex-col justify-center items-center gap-2 text-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-lg text-cyan-500 font-semibold">
              You are not connected to Rewarder Finance yet
            </h1>
            <p className="text-sm">To use the Dapp, make sure:</p>
            <p className="text-sm">
              You are using the{" "}
              <span className="text-cyan-500 font-bold">
                Binance Smart Chain
              </span>{" "}
              network and you need to connect wallet to use
            </p>
          </div>
          <div>
            <h1>We suggest to use:</h1>
            <ul className="text-cyan-500">
              <li>Metamask</li>
              <li>TrustWallet</li>
              <li>Binance Smart Chain Wallet</li>
              <li>SafePal</li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-4"
          onClick={open}
        >
          Connect to a wallet
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
