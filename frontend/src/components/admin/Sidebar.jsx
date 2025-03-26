import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="sidebar flex flex-col border border-gray-400 rounded-[.5rem] w-3/12 py-[.5rem] ">
      <NavLink className="capitalize text-[1.2rem] py-[.5rem] pl-[1.5rem] cursor-pointer hover:bg-gray-200">
        products
      </NavLink>
      <NavLink className="capitalize text-[1.2rem] py-[.5rem] pl-[1.5rem] cursor-pointer hover:bg-gray-200">
        users
      </NavLink>
      <NavLink className="capitalize text-[1.2rem] py-[.5rem] pl-[1.5rem] cursor-pointer hover:bg-gray-200">
        coupons
      </NavLink>
      <NavLink className="capitalize text-[1.2rem] py-[.5rem] pl-[1.5rem] cursor-pointer hover:bg-gray-200">
        banner
      </NavLink>
    </ul>
  );
};

export default Sidebar;
