import { Link } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import Footer from "./shared/footer/Footer";
import useAuth from "../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
const Login = () => {
  const { signIn } = useAuth;
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    })
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="bg-base-200 md:p-24 mt-10">
        <h1 className="text-2xl font-bold text-center">Login your account</h1>
        <form onSubmit={handleLogin} class="card-body md:w-3/5 mx-auto">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              class="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
              type={showPassword? "text":"password"}
              required
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"             
            />
            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword? <FaEye /> : <FaEyeSlash />
              }
            </span>
            </div>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover font-medium"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-gray-800 text-white uppercase">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;