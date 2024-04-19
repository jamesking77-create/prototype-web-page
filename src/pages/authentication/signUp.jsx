import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogo from "../../assets/images/google-logo-9822.png";
import userImage from "../../assets/svgs/saly.svg";
import logo from "../../assets/images/6537232-fotor-bg-remover-2024041882634.png";
import "../../styles/signUP.css";
import { AGENT_CODE } from "../../utils/constant/const";
import md5 from "md5";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    mobileNumber: Yup.string().required("Required"),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const agentCode = AGENT_CODE;
      const static_token = "eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9";
      const requestType = "REGT";
      const securityKey = md5(agentCode) + "|" + static_token;

      const requestBody = {
        requestType,
        userMail: formData.email,
        userPassword: formData.password,
        userFullname: `${formData.firstName} ${formData.lastName}`,
        userPhone: formData.mobileNumber,
        agentCode,
        userAgent: navigator.userAgent,
      };

      const response = await axios.post(
        "https://datacliq.co.uk/apis",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            "Security-Key": securityKey,
          },
        }
      );

      console.log(response.data);
      toast.success("Sign up successful!", {
        autoClose: 1000,
        onClose: () => {
          toast.info("an OTP has been sent to your number",{  autoClose: 2000,});
        },
      });
      localStorage.setItem('username', requestBody.userFullname);
      setTimeout(() => {
        navigate('/dashboard');
      }, 4000);
     
    } catch (error) {
      if (error.response) {
        console.error("API Error:", error.response.data);
        toast.error("An error occurred. Please try again later.");
      } else if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error:", error.message);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen overflow-hidden"
      id="reg-main-container"
    >
      <div className="bgbox" id="reg-left-side-container ">
        <div className=" w-full h-full overflow-hidden">
          <div className="flex" id="logo">
            <img
              className="ml-3 mt-3"
              src={logo}
              style={{ height: "30px", width: "19px" }}
              alt=""
            />
            <h2 className="mt-4 ml-1 get-started-big-font-style text-white">
              Spar
            </h2>
          </div>
          <div className="mt-5 ml-12" id="user-image">
            <img
              className=""
              src={userImage}
              style={{ height: "319px", width: "330px", marginLeft: '5rem' }}
              alt=""
            />
          </div>
          <div className="h-40 w-full mt-2 ml-5 mr-12 " id="text-box">
            <p className="mb-3 authentication-big-font-style" id="heading-text">
              We simplify your financial handlings
            </p>
            <p className="authentication-small-font-style mt-0" id="subtext">
              Register your business or file your tax returns seamlessly with
              Spar
            </p>
          </div>
          <p className="text-xs ml-5 mt-19" style={{ color: "#fff" }}>
            Copyright @ 2024 Spar <span className="trademark "></span> inc.
            Proudly made in Nigeria{" "}
          </p>
        </div>
      </div>

      <div className="" id="form">
        <h2 className="mb-4 get-started-big-font-style font-bold">Sign Up</h2>

        <div className="flex justify-center  w-full items-center mb-8">
          <button className="flex items-center  w-full bg-[#0329ff17] justify-center rounded-md p-2 mr-2">
            <img src={GoogleLogo} alt="Google Logo" className="h-6 w-6 mr-2" />
            Sign Up with Google
          </button>
        </div>
        <div className="line-with-text">
          <div className="line"></div>
          <div className="text">or</div>
        </div>

        <form className="" id="input-fields" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <input
                  type="text"
                  className="w-full h-10 px-4 text-xs"
                  style={{
                    border: " solid 2pt #aaa7a791",
                    borderRadius: "7px",
                  }}
                  placeholder="First Name"
                  onChange={handleInputChange}
                  value={formData.firstName}
                  name="firstName"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="">
                <input
                  type="text"
                  className="w-full h-10 px-4 text-xs"
                  style={{
                    border: " solid 2pt #aaa7a791",
                    borderRadius: "7px",
                  }}
                  placeholder="Last Name"
                  onChange={handleInputChange}
                  value={formData.lastName}
                  name="lastName"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 ml-30">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <p className="text-xs">
              Please make sure that the name matches your legal identity.
            </p>

            <input
              type="email"
              className="w-full h-10 px-4 text-xs"
              style={{ border: "solid 2pt #aaa7a791", borderRadius: "7px" }}
              placeholder="Email Address"
              onChange={handleInputChange}
              value={formData.email}
              name="email"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
            <p className="text-xs">Enter your email ID</p>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-10 px-4 text-xs"
              style={{ border: "solid 2pt #aaa7a791", borderRadius: "7px" }}
              placeholder="Password"
              onChange={handleInputChange}
              value={formData.password}
              name="password"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
            <p className="text-xs">
              Make sure it contains atleast 8 characters, a number or symbol
            </p>
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{ border: "solid 2pt #aaa7a791", borderRadius: "7px" }}
              placeholder="Mobile Number"
              onChange={handleInputChange}
              value={formData.mobileNumber}
              name="mobileNumber"
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-500">{errors.mobileNumber}</p>
            )}

            <p className="text-xs">You will recieve an OTP on your number</p>
          </div>

          <p className="text-xs text-gray-500 mb-5">
            By selecting "Agree and continue" below, I agree to Spar{" "}
            <span className="text-blue-500">
              <a href="/login">Terms of Service</a>
            </span>{" "}
            &{" "}
            <span className="text-blue-500">
              <a href="/login">Privacy Policy</a>
            </span>
          </p>

          <div
            className="w-full h-10 px-4 rounded-md mb-2 bg-[#0BDA51] cursor-pointer border-2 border-[#0BDA51] text-white flex items-center justify-center font-bold"
            onClick={handleSubmit}
          >
            <button type="submit" className=" cursor-pointer">
              Agree and Continue
            </button>
            <ToastContainer />
          </div>
        </form>

        <div className="flex items-center justify-center mb-2">
          <p className="account-exists-font-style">Already have an account? </p>
          <a className="account-exists-login-style" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
