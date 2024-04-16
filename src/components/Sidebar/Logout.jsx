import { useDisconnect } from "@web3modal/ethers5/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const { disconnect } = useDisconnect();
  
  return (
    <button
      type="button"
      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      onClick={disconnect}
    >
      <FontAwesomeIcon icon={faSignOut} />
      <span className="uppercase">log out</span>
    </button>
  );
};

export default Logout;
