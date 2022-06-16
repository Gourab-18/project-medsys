import React from "react";
import {useState} from "react";

import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs"

function EditProfile() {
    const [incorporation, setincorporation] = useState();
  return (
    <div className="flex flex-col space-y-4  ">
      <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 text-center p-3">
        Edit Profile{" "}
      </h2>
      <form className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-gray-100 pl-5 py-7 rounded-md">
        
        <div className="flex flex-col text-gray-600 py-1">
          <label>Mobile Number</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:bg-white focus:outline-none w-4/5 sm:w-1/2"
            name="mobile"  id="mobile" type="number" required />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label className="text-md">Company/Trust/NGO Name</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3 text-sm"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">

          <label>Types of Incorporation</label>
          <select id="incorporation" className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3" value={incorporation} 
              onChange={(e) => setincorporation(e.target.value)}>
            <option value="Types of Incorporation">Types of Incorporation</option>
            <option value="Company">Company</option>
            <option value="Startup">Startup</option>
            <option value="Sole Proprietor">Sole Proprietor</option>
            <option value="Partnership Firm">Partnership Firm</option>
            <option value="LLP">LLP</option>
            <option value="OPC Company">OPC Company</option>
            <option value="Public Ltd. Company">Public Ltd. Company</option>
            <option value="Society">Society</option>
            <option value="Trust">Trust</option>
            <option value="HUF">HUF</option>
            <option value="Others">Others</option>
          </select>
        
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>Industry Type</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>Website URL</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3"
            type="url" name="url" id="url"
            placeholder="https://example.com"
            pattern="https://.*" 
          />
        </div>


        <div className="flex flex-col text-gray-600 py-1">
          <label>Business full Address</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-1">
          <label>Pincode</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-1/2 sm:w-1/3"
            type="number"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-1">
          <label>Contact Person Name</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-4/5 sm:w-2/3"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 py-3">
        <div className="flex flex-col text-gray-600 py-1">
          <label>Bank Account Details</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-1">
          <label>Name of Bank</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>Account No</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="number"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>IFSC Code</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>Branch</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>MICR Code</label>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="text"
          />
        </div>
        </div>
        <div className="grid grid-cols-2">
        <div className="flex flex-col text-gray-600 py-2">
          <div className="flex">
          <BsFacebook className="text-2xl "/>
          <label className="px-1" for="url">Facebook URL</label>
          </div>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="url" name="url" id="url"
            placeholder="https://facebook/name.com"
            pattern="https://.*" 
            required
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
        <div className="flex">
          <BsTwitter className="text-2xl "/>
          <label className="px-1" for="url">Twitter URL</label>
          </div>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="url" name="url" id="url"
            placeholder="https://twitter/name.com"
            pattern="https://.*" 
          />
        </div>
        <div className="flex flex-col text-gray-600 py-1">
        <div className="flex">
          <BsInstagram className="text-2xl "/>
          <label className="px-1" for="url">Instagram URL</label>
          </div>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="url" name="url" id="url"
            placeholder="https://instagram/name.com"
            pattern="https://.*" 
          />
        </div>
        <div className="flex flex-col text-gray-600 py-1">
        <div className="flex">
          <BsLinkedin className="text-2xl "/>
          <label className="px-1" for="url">Linkedin URL</label>
          </div>
          <input
            className="rounded-sm bg-gray-200 mt-1 p-1 focus:border-yellow-300 focus:bg-white focus:outline-none w-11/12 sm:w-5/6"
            type="url" name="url" id="url"
            placeholder="https://linkedin/name.com"
            pattern="https://.*" 
          />
        </div>
        </div>
      <div className="mt-7">
      <button className='w-3/4 sm:w-1/2 py-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900'>Submit</button>
      </div>
      </form>
    </div>
  );
}

export default EditProfile;
