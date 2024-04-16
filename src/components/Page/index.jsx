import ClaimBNB from "./ClaimBNB";
import DisruptiveTransfer from "./DisruptiveTransfer";
import Tabs from "./tabs";

const Page = () => {
  return (
    <div className="w-full lg:w-3/4">
      <Tabs/>
      <div className="flex rounded-3xl md:border md:border-main bg-main p-0 sm:p-6 md:p-12 mt-4">
        <div
          id="horizontal-scroll-tab-preview"
          role="tabpanel"
          className="w-full"
          aria-labelledby="horizontal-scroll-tab-item-1"
        >
            <ClaimBNB/>  
        </div>
        <div
          id="horizontal-scroll-tab-2"
          className="hidden w-full"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-2"
        >
            <DisruptiveTransfer />
        </div>
        <div
          id="horizontal-scroll-tab-3"
          className="hidden w-full"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-3"
        >
          <p className="text-gray-500 dark:text-gray-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-gray-200">
              third
            </em>{" "}
            item's tab body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
