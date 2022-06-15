import React from "react";
import ME from "../assets/dp.png";
import { CgProfile } from "react-icons/cg"
import { FiMail, FiPhone } from "react-icons/fi"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaRegAddressBook } from "react-icons/fa"
import { MdHttp } from "react-icons/md"


const profile = () => {
  return (

    <div className="bg-zinc-200 h-full mt-9">
      <h2 className="text-5xl font-semibold text-gray-800 text-center p-3 my-7">
        Profile
      </h2>
      <div className=" my-auto p-1 sm:pt-11 w-full sm:w-3/4 mx-auto rounded-md grid grid-cols-1 sm:grid-cols-2">

        <div className="bg-zinc-100 py-7 flex flex-col justify-center mx-auto rounded-md w-full">
          <div className="flex items-center mx-auto justify-center w-3/5">
            <img className="rounded-md " src={ME} alt="Profile Image" />
          </div>
        </div>
        <div className="bg-zinc-700 flex flex-col justify-center rounded-md py-7 px-5">
          <div className="flex flex-row">
            <CgProfile className="text-3xl font-semibold text-white text-center my-auto" />
            <small className=" text-white text-lg sm:text-xl ml-4">FirstName LastName</small>
          </div>

          <div className="flex flex-row mt-4">
            <FiPhone className="text-3xl font-semibold text-white text-center my-auto" />
            <small className="text-gray-100 text-lg sm:text-xl ml-4">+91 999999999</small>
          </div>

          <div className="flex flex-row mt-4">
            <FiMail className="text-3xl font-semibold text-white text-center my-auto" />
            <small className="text-gray-100 text-lg sm:text-xl ml-4">userName@gmail.com</small>
          </div>
          <div className="flex flex-row mt-4">
            <HiOutlineOfficeBuilding className="text-3xl font-semibold text-white text-center my-auto" />
            <small className="text-gray-100 text-lg sm:text-xl ml-4">Company Name</small>
          </div>
          <div className="flex flex-row mt-4">
            <FaRegAddressBook className="text-3xl font-semibold text-white text-center my-auto" />
            <small className="text-gray-100 text-lg sm:text-xl ml-4">Celeste Slater
              606-3727 Ullamcorper. Street
              Roseville NH 11523</small>
          </div>
          <div className="flex flex-row mt-4">
            <MdHttp className="text-3xl font-semibold text-white text-center my-auto" />
            <small className="text-gray-100 text-lg sm:text-xl ml-4">www.xyzcompany.com</small>
          </div>
          <div className="mt-7">
            <button className='w-3/4 sm:w-1/2 py-2 bg-violet-400 text-violet-900 font-semibold rounded-md hover:bg-violet-300'>Edit profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
