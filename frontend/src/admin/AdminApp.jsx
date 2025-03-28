import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import "./styles/adminApp.css";

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
