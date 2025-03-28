import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="admin__body flex gap-[1rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
