import Logo from "../../assets/images/grreen-fotor-bg-remover-2024041815740.png";
import { DASHBOARD_SIDE_BAR_LINKS } from "../constant/navigation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/sidebar.css";
import { DASHBOARD_LOGOUT_LINKS } from "../constant/navigation";

const linkClasses =
  "flex items-center gap-2  w-full text-gray-500 font-light px-3 py-2 hover:bg-green-100 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
  const logoutClasses = 'flex items-center gap-2  w-full text-red-500 font-light px-3 py-2 hover:bg-red-100 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-48 pt-0 mt-0 h-full items-center flex flex-col border  overflow-hidden${
        isOpen ? " block" : " hidden"
      }`}
      id="sidebar"
      style={{background: '#fff'}}
    >
      <div className="sidebar">
        <button onClick={toggleSidebar} className="sidebar-button">
          close
        </button>
        <div className="sidebar-logos flex mb-5 mt-5">
          <img src={Logo} style={{ height: "50px", width: "50px" }} alt="" />
          <h2 className="mt-5" id="company-name">
            Sisyphus
          </h2>
        </div>
        <div className="sidebar-links">
          {DASHBOARD_SIDE_BAR_LINKS.map((item) => (
            <SideBarLink key={item.key} item={item} />
          ))}
        </div>
        <div className="logout-link">
          {DASHBOARD_LOGOUT_LINKS.map((item) => (
            <Link
              key={item.key} // Make sure to add a unique key
              to={item.path}
              className={`${logoutClasses} sidebar-link`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

function SideBarLink({ item }) {
  return (
    <Link to={item.path} className={`${linkClasses} sidebar-link`}>
      {item.icon}
      {item.label}
    </Link>
  );
}

SideBarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
};

export default SideBar;
