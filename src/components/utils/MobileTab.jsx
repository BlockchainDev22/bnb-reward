const MobileTab = () => {
  return (
    <nav
      className="grid grid-cols-3	sm:flex space-x-2 bg-main fixed bottom-0 mt-10 left-0 sm:left-1/4 lg:left-1/2 lg:-translate-x-1/2 sm:px-2 border-main border md:rounded-full w-full sm:w-auto"
      aria-label="Tabs"
      role="tablist"
    >
      <button
        type="button"
        className="hs-tab-active:bg-transparent rounded-none hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-white py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-white focus:outline-none focus:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 sm:first:rounded-bl-xl sm:last:rounded-br-xl active justify-center"
        id="horizontal-scroll-tab-item-1"
        data-hs-tab="#horizontal-scroll-tab-preview"
        aria-controls="horizontal-scroll-tab-preview"
        role="tab"
      >
        Claim BNB
      </button>
      {/* <button
        type="button"
        className="hs-tab-active:bg-transparent rounded-none hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-white py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-white focus:outline-none focus:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 sm:first:rounded-bl-xl sm:last:rounded-br-xl justify-center"
        id="horizontal-scroll-tab-item-2"
        data-hs-tab="#horizontal-scroll-tab-2"
        aria-controls="horizontal-scroll-tab-2"
        role="tab"
      >
        Disruptive Transfer
      </button> */}
      <button
        type="button"
        className="hs-tab-active:bg-transparent rounded-none hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-white py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-white focus:outline-none focus:text-white disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 sm:first:rounded-bl-xl sm:last:rounded-br-xl justify-center"
        id="horizontal-scroll-tab-item-3"
        data-hs-tab="#horizontal-scroll-tab-3"
        aria-controls="horizontal-scroll-tab-3"
        role="tab"
      >
        Statistics
      </button>
    </nav>
  );
};

export default MobileTab;
