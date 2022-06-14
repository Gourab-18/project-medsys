import React from "react";
import ME from "../assets/dp.png";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


const profile = () => {
  return (

    <div className="bg-zinc-200">
    <h2 className="text-5xl font-semibold text-gray-800 text-center p-3">
        Profile
      </h2>
      <div className="w-full sm:w-2/3 mx-auto my-auto  bg-zinc-300 rounded-md grid grid-cols-1 sm:grid-cols-2">

<div className="flex flex-col justify-center mx-auto rounded-md w-3/4 sm:w-3/5">
  <div className="flex items-center mx-auto justify-center w-5/6">
    <img className="rounded-md " src={ME} alt="Profile Image" />
  </div>
</div>
<div className="bg-zinc-700 flex flex-col justify-center rounded-md">
  <div className="flex flex-row mt-3 ml-4">
    <FaUserCircle className="text-3xl font-semibold text-white text-center ml-1 mb-3" />
    <small className=" text-gray-100 text-lg ml-3">Name</small>
  </div>

  <div className="flex flex-row  ml-4">
    <FaPhone className="text-3xl font-semibold text-white text-center ml-1 mb-3" />
    <small className="text-gray-100 text-lg sm:text-sm ml-3">+91 999999999</small>
  </div>

  <div className="flex flex-row  ml-4">
    <FaMailBulk className="text-3xl font-semibold text-white text-center ml-1 mb-3" />
    <small className="text-gray-100 text-lg ml-3">Email</small>
  </div>
  <div>
    <button className='w-3/4 my-5 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md ml-5'>Edit profile</button>
  </div>
</div>
</div>
    </div>
  );
};

export default profile;
