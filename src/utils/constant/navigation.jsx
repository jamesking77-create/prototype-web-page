import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineArchive, HiOutlineLogout } from "react-icons/hi";
import { BsCreditCard } from "react-icons/bs";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";

export const DASHBOARD_SIDE_BAR_LINKS = [
  {
    key: "Home",
    label: "Home",
    path: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    key: "customer",
    label: "Customer",
    path: "/customer",
    icon: <BsPerson />,
  },
  {
    key: "product",
    label: "Product",
    path: "/product",
    icon: <HiOutlineArchive />,
  },
  {
    key: "transaction",
    label: "Transaction",
    path: "/transaction",
    icon: <BsCreditCard />,
  },
  {
    key: "activity",
    label: "Activity",
    path: "/activity",
    icon: <HiOutlineChartSquareBar />,
  },

 
];


export const DASHBOARD_LOGOUT_LINKS = [
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <HiOutlineLogout />, 
  },
]