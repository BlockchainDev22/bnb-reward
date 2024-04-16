
import { useEffect } from "react";
import { createWeb3Modal, defaultConfig, useWeb3ModalAccount } from '@web3modal/ethers5/react'

import { HSStaticMethods } from "preline/preline";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { NotificationContainer } from "react-notifications";
import ConnectWallet from "./components/utils/ConnectWallet";
// import MobileTab from "./components/utils/MobileTab";
import 'react-notifications/lib/notifications.css';
import { AppWrapper } from "./context";

const projectId = "8ca170054f000b2f220dc6fd4a919d45";
// const bsc = {
//   chainId: 56, //mainnet: 56,
//   name: "Binance Smart Chain",
//   currency: "BNB",
//   explorerUrl: "https://bscscan.com",
//   rpcUrl: "https://bsc-dataseed3.ninicoin.io/",
// };

const matic = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com/'
};

// const metadata = {
//   name: "Rewarder",
//   description: "Rewarder Finance",
//   url: "https://rewarder.net", // origin must match your domain & subdomain
//   icons: [],
// };

const metadata = {
  name: "Rewarder",
  description: "Rewarder Finance",
  url: "https://rewarder.net", // origin must match your domain & subdomain
  icons: [],
};

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 137,
    rpcUrl: 'https://polygon-rpc.com/'
  }),
  // chains: [bsc],
  chains: [matic],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // defaultChain: bsc,
  defaultChain: matic,
});

function App() {

  const { isConnected, chainId } = useWeb3ModalAccount();
  
  useEffect(() => {
    HSStaticMethods.autoInit();
  }, []);

  return (
    <AppWrapper>
      <div className="px-2 md:px-6 pt-8 pb-16 flex flex-wrap lg:flex-nowrap gap-12">
        <NotificationContainer/>
        {
          (isConnected && chainId === 56) ? (
            <>
              <Sidebar/>
              <Page/>
              {/* <MobileTab/> */}
            </>
          ) : <ConnectWallet/>
        }
      </div>
    </AppWrapper>
  );
}

export default App;
