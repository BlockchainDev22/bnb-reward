import ClaimReward from "./ClaimReward";
import CurrentPrice from "./CurrentPrice";
import MaxTransaction from "./MaxTransaction";
import Slider from "./Slider";
import TotalBNB from "./TotalBNB";
import TotalLiquidity from "./TotalLiquidity";

const ClaimBNB = () => {
    return (
        <div className="w-full">
            <Slider/>
            <ClaimReward/>
            <div className="grid md:grid-cols-2 md:gap-10">
                <MaxTransaction/>
                <TotalLiquidity/>
            </div>
            <div className="grid md:grid-cols-2 md:gap-10">
                <TotalBNB/>
                <CurrentPrice/>
            </div>
        </div>
    )
}

export default ClaimBNB;