import Body from "./components/admin/Body.jsx";
import Header from "./components/admin/Header.jsx";

const AdminApp = () => {
  return (
    <div className="admin_app">
      <Header />
      <div className="body__section mt-[5rem] md:w-[78%] mx-auto">
        <Body />
      </div>
    </div>
  );
};

export default AdminApp;
