import { LuSearch } from "react-icons/lu";
import ArrowOptions from "../../assets/svgs/Arrow-Options.svg";
import NotificationIcon from "../../assets/svgs/NotificationIcon.svg";
import Logo from "../../assets/images/google-logo-9822.png";
import "../../styles/tailwind.css";
import '../../styles/topnav.css';

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between py-3 px-6 h-12 border-b bg-white lg:px-12" id="topnav-container">
      <button className="block lg:hidden" onClick={toggleSidebar}>
        <div className="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
      </button>
      <p className="text-bold hidden lg:block" id="home-text">Home</p>
      <div className="flex flex-grow justify-center lg:justify-end">
        <form className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <LuSearch className="w-5 h-5 absolute right-0 mr-3 pointer-events-none"/>
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            aria-label="Search"
            className="search-bar pr-3 pl-10 py-2 font-semibold h-8 w-full max-w-md placeholder-gray-100 text-blue rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
            style={{backgroundColor: "#F3F3F3"}}
          />
        </form>
      </div>
      <div className="flex h-8">
        <img src={NotificationIcon} alt="Notification Icon" className="w-5 h-5 m-2 mt-1 border-r -mr-1"/>
      </div>
    </div>
  );
};

export default TopNav;
