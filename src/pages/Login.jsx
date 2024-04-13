import { Link } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      <div className="bg-base-200 md:p-24 mt-10">
        <h1 className="text-2xl font-bold text-center">Login your account</h1>
        <form class="card-body md:w-3/5 mx-auto">
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
      </div>
    </div>
  );
};

export default Login;
