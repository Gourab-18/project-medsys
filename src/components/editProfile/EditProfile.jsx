import React from "react";
import {useState} from "react";

function EditProfile() {
    const [incorporation, setincorporation] = useState();
  return (
    <div className="bg-gray-200 flex flex-col space-y-4  ">
      <h2 className="text-5xl font-semibold text-gray-800 text-center p-3">
        Edit Profile{" "}
      </h2>
      <form className="max-w-[700px] w-3/4 mx-auto bg-gray-100 p-5 px-8 rounded-lg">
        
        <div className="flex flex-col text-gray-600 py-1">
          <label>Mobile Number</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-1 focus:bg-white focus:outline-none w-1/2"
            // type="text" name="country_code" title="Error Message" pattern="[1-9]{1}[0-9]{9}"
            name="mobile"  id="mobile" type="number" required />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          <label>Company/Trust/NGO Name</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none w-3/4"
            type="name"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-1">
          {/* <label>Types of Incorporation</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="number"
          /> */}

          <label>Types of Incorporation</label>
          <select id="incorporation" className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none w-1/2" value={incorporation} 
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
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="number"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label>Website URL</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="url" name="url" id="url"
            placeholder="https://example.com"
            pattern="https://.*" 
            required
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label for="url">Facebook URL</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="url" name="url" id="url"
            pattern="https://.*" 
            required
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Twitter ID</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Instagram ID</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>LinkedIn URL</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="url"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Business full Address</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Pincode</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="number"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Contact Person Name</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Bank Account Details</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-600 py-2">
          <label>Name of Bank</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label>Account No</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="number"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label>IFSC Code</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label>Branch</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col text-gray-600 py-2">
          <label>MICR Code</label>
          <input
            className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none"
            type="text"
          />
        </div>

      </form>
    </div>
  );
}

export default EditProfile;
