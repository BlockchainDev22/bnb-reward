import AddressInfo from "./AddressInfo";
import Logo from "./Logo";
import Logout from "./Logout";
import NavList from "./NavList";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 flex flex-col justify-between gap-4">
      <Logo/>
      <AddressInfo/>
      <NavList/>
      <Logout/>
    </div>
  );
};

export default Sidebar;
