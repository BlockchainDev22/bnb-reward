import { faBookOpen, faChartBar, faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const list = [
    {
        text: "homepage", icon: faHome, to: ""
    },
    {
        text: "guide", icon: faBookOpen, to: "https://t.me/rewarder_official"
    },
    {
        text: "contract", icon: faChartBar, to: "https://bscscan.com/token/0xb2cbf3cce315537990e6d69090c39396d7b89f5b"
    },
    {
        text: "chart", icon: faChartLine, to: "https://www.dextools.io/app/en/bnb/pair-explorer/0x3d0a82cfe8a9ff878acb442c7a80c0d3f5dd215e?t=1711956808930"
    }
];

const NavList = () => {
  return (
    <ul className="flex flex-col w-full bg-main">
      {
        list.map((item, index) => (
            <li className="py-3 px-4 text-sm font-medium border border-main text-white -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white capitalize" key={index}>
                <a href={item.to} target="_blank" rel="noreferrer" className="inline-flex items-center gap-x-3.5">
                  <FontAwesomeIcon icon={item.icon}/>
                  {item.text}
                </a>
            </li>
        ))
      }
    </ul>
  );
};

export default NavList;
