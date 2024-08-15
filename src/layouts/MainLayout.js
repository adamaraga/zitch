import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
