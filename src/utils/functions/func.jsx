import * as Yup from "yup";
import {  toast } from "react-toastify";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
});

export function validateLastName(value) {
  return value.length >= 2;
}

export function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}


export const notifySuccess = (arg) => {
  toast.success(arg, {
    position: "top-center",
    autoClose: 2000,
    // hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      backgroundColor: "#B18CE7",
      width: "400px",
    },
  });
};


export const notifyError = (arg) => {
  toast.error(arg, {
    position: "top-center",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      width: "500px",
    },
  });
};
