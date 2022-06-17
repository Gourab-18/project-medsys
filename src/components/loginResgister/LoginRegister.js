import React from "react";
import { Link } from "react-router-dom";
export default function LoginRegister() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="w-full flex flex-col space-y-4 justify-center lg:ml-auto">
        <h2 className="text-4xl font-semibold text-mainColor text-center text ml-auto mr-auto">
          Sign in here{" "}
        </h2>
        <form className="max-w-[350px] w-3/4 mx-auto bg-gray-100 p-6 px-6 rounded-md">
          <h2 className="text-4xl text-mainColor font-bold text-center ml-auto">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-600 py-2">
            <label>Phone Number/E-Mail</label>
            <input
              className="rounded-md bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
              type="number"
            />
          </div>
          <button className="w-3/4 py-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
            Get OTP
          </button>
          <div className="flex flex-col text-gray-600 py-2">
            <label>Enter OTP</label>
            <input
              className="rounded-md bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
              type="number"
            />
          </div>
          <Link to="/profile">
            <button className="w-3/4 py-2 mt-5 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
              Sign in
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full flex flex-col justify-center space-y-4 lg:mr-auto bg-mainColor">
        <h2 className="text-4xl font-semibold text-rose-100 text-center ml-auto mr-auto">
          Create an account here{" "}
        </h2>
        <form className="max-w-[350px] w-3/4 mx-auto bg-zinc-800 p-6 px-6 rounded-md">
          <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Full Name</label>
            <input
              className="rounded-md bg-zinc-700 mt-1 p-2 focus:bg-zinc-600 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-md bg-zinc-700 mt-1 p-2 focus:bg-zinc-600 focus:outline-none"
              type="number"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>E-Mail Address</label>
            <input
              className="rounded-md bg-zinc-700 mt-1 p-2 focus:bg-zinc-600 focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Set Password</label>
            <input
              className="rounded-md bg-zinc-700 mt-1 p-2 focus:bg-zinc-600 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-md bg-zinc-700 mt-1 p-2 focus:bg-zinc-600 focus:outline-none"
              type="password"
            />
          </div>
          <Link to="/">
            <button className="w-3/4 mt-5 py-2 bg-rose-900 text-rose-100 font-semibold rounded-md hover:bg-rose-800">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
