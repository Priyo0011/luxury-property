import { Link } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "./shared/footer/Footer";

const Register = () => {
    const {createUser}= useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="bg-base-200 md:p-24 mt-10">
        <h1 className="text-2xl font-bold text-center">Please Register</h1>
        <form onSubmit={handleRegister} className="card-body md:w-3/4  mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover font-medium"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-800 text-white uppercase">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-red-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
