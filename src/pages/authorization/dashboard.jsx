import { useState } from "react";
import SideBar from "../../utils/reusableComponents/SideBar";
import TopNav from "../../utils/reusableComponents/TopNav";
import DashboardBody from "../body/dashboardBody";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className="flex flex-row bg-white-100 h-screen overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>

      <div className="w-full h-full">
      <TopNav toggleSidebar={toggleSidebar} />
      <DashboardBody />
      </div>
    </div>
  );
};

export default Dashboard;