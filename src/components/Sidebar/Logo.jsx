import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div>
      <div className="logo flex flex-col justify-center items-center gap-1">
        <img
          src="/assets/img/logo.png"
          alt="app-logo"
          className="w-24 inline-block"
        />
        <p className="uppercase text-white text-xl font-semibold">rewarder</p>
        <p className="text-lg text-sky-600 font-semibold">
          Recurring BNB Rewards every 2 days!
        </p>
      </div>
      <a
        href={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0xB2cbF3ccE315537990E6D69090C39396d7B89f5b&inputCurrency=BNB`}
        target="_blank"
        rel="noreferrer"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-4"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="uppercase">buy $Rewarder</span>
      </a>
    </div>
  );
};

export default Logo;
