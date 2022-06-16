import React from "react";
import ME from "../assets/dp.png";

const profile = () => {
  return (

    <div className=" h-full mt-9">
      <h2 className="text-5xl font-semibold text-mainColor text-center p-3 my-7">
        Profile
      </h2>
      <div className=" my-auto p-1 sm:pt-11 w-full sm:w-3/4 mx-auto rounded-md grid grid-cols-1 md:grid-cols-2">

        <div className="bg-zinc-100 py-7 flex flex-col justify-center mx-auto rounded-md w-full">
          <div className="flex items-center mx-auto justify-center w-3/5">
            <img className="rounded-md " src={ME} alt="Profile Image" />
          </div>
        </div>
        <div className="bg-mainColor flex flex-col justify-center rounded-md py-7 px-5">
          <div className="flex flex-row ">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            person
          </span>
          <small className=" text-white text-xl ml-4">
             firstName lastName
          </small>
          </div>

          <div className="flex flex-row mt-4">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            phone
          </span>
            <small className="text-white text-lg ml-4">+91 999999999</small>
          </div>

          <div className="flex flex-row mt-4 ">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            email
          </span>
            <small className="text-white text-lg ml-4">userName@gmail.com</small>
          </div>
          <div className="flex flex-row mt-4 ">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            work
          </span>
            <small className="text-gray-100 text-lg sm:text-xl ml-4">Company Name</small>
          </div>
          <div className="flex flex-row mt-4 ">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            home
          </span>
            <small className="text-gray-100 text-lg sm:text-xl ml-4">Celeste Slater
              606-3727 Ullamcorper. Street
              Roseville NH 11523</small>
          </div>
          <div className="flex flex-row mt-4 ">
          <span class="material-symbols-rounded text-rose-100 font-semibold my-auto">
            web
          </span>
            <small className="text-gray-100 text-lg sm:text-xl ml-3">www.xyzcompany.com</small>
          </div>
          <div className="mt-7">
            <button className='w-3/4 sm:w-1/2 py-2 bg-rose-800 text-rose-100 font-semibold rounded-md hover:bg-rose-900'>Edit profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
