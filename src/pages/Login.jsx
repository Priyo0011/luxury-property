import { Link } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "./shared/footer/Footer";
const Login = () => {
  const { signIn } = useContext(AuthContext);
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
          <div class="form-control">
            <label class="label">
              <span class="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              class="input input-bordered"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover font-medium">
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
        <div className="flex mt-8 gap-16 ml-96">
          <button className="border-2 text-3xl p-4 rounded-lg ">
            <FaFacebook />
          </button>
          <button className="border-2 text-3xl p-4 rounded-lg ">
            <FaGithub />
          </button>
          <button className="border-2 text-3xl p-4 rounded-lg">
            <FaTwitter />
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
