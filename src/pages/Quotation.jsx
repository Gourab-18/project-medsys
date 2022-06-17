import React from "react";
import { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

function EditProfile() {
  const [incorporation, setincorporation] = useState();
  return (
    <>
      <SideBar />
      <div className="flex flex-col space-y-4  ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-mainColor text-center p-3">
          Quotation
        </h2>
        <form className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-gray-100 px-4 py-5 rounded-md">
          <div className=" flex flex-col text-gray-600 py-1 grid-row">
            <label className="text-lg">Coordinator Name</label>

            <div className="flex flex-auto p-2">
              <div className="w-1/2 p-1">
                <input
                  className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-5/6 text-sm"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div className="w-1/2 p-1">
                <input
                  className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-5/6 text-sm"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col text-gray-600 py-1 grid-row">
            <label className="text-lg">Email</label>

            <div className="w-full px-3">
              <input
                className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-3/4 text-sm"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className=" flex flex-col text-gray-600 py-1 grid-row">
            <label className="text-lg">Address</label>

            <div className="w-full px-3">
              <input
                className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-3/4 text-sm"
                type="text"
                placeholder="Street Address Line 1"
              />
            </div>
            <div className="w-full px-3">
              <input
                className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-3/4 text-sm"
                type="text"
                placeholder="Street Address Line 2"
              />
            </div>

            <div className="flex flex-auto p-2">
              <div className="w-1/2 p-1">
                <input
                  className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-5/6 text-sm"
                  type="text"
                  placeholder="City"
                />
              </div>

              <div className="w-1/2 p-1">
                <input
                  className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-5/6 text-sm"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col text-gray-600 py-1 grid-row">
            <label className="text-lg">Coordinator Phone No</label>

            <div className="w-full px-3">
              <input
                className="rounded-sm bg-gray-200 mt-2 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-3/4 text-sm"
                type="number"
                placeholder="Phone No"
              />
            </div>
          </div>

          <div className="mt-7">
            <button className="w-3/4 sm:w-1/2 py-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
              Generate Quotation
            </button>
          </div>

          <div className="mt-7">
            <button className="w-3/4 sm:w-1/2 py-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
              Download Quotation
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
