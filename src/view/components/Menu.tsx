import { MenuIcon } from "../../assets/icons";

const Menu = () => {
  return (
    <div
      className="bg-white w-fit p-2 rounded-lg border border-[#e0e1e4] hover:bg-[#e7e7e7]
       transition-all"
    >
      <MenuIcon className="w-4 h-3" />
    </div>
  );
};

export default Menu;
