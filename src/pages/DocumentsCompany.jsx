import React from "react";

function DocumentsCompany() {
  return (
    <div className=" flex flex-col ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-zinc-800 text-center py-5">
            Documents for Company
        </h2>

        <form
        className="w-full mx-auto bg-gray-100 p-4 px-5 rounded-lg"
        type="submit">


        <div className="flex flex-col text-gray-600 py-1">
          <div className="flex p-3">
            <div className="py-2">
              <label className="text-lg">Certificate</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">PAN</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">TAN&emsp;&emsp;&emsp;</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-2">
          <div className="flex ">
            <div className="py-2">
              <label className="text-lg px-3">MOA</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg px-3">AOA</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-1">
          <label className="text-lg">GST</label>
          <div className="flex p-1">
            <div className="py-2">
              <label className="text-lg">Quarter-1</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">Quarter-2</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">Quarter-3</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">Quarter-4&emsp;&emsp;&emsp;</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>
          </div>
        </div>




        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Audit Report</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Annual Report</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Income Tax return</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>


        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Bank Statements</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-1">
          <div className="flex p-3">
            <div className="py-2">
              <label className="text-lg">Event Base Forms</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">Acknowledgement</label>
              <input type="file" className="uploadFile" id="file1" />
            </div>

            <div className="py-2">
              <label className="text-lg">
                Director KYC&emsp;&emsp;&emsp;
              </label>
              <input type="file" className="uploadFile" id="file1" />
            </div>
          </div>
        </div>


        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">NGO Darpan Registration</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>



        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Other Certificates</label>
            <div className="flex px-3">
                <input type="file" className="uploadFile" id="file1" />
                <input type="file" className="uploadFile" id="file1" />
                <input type="file" className="uploadFile" id="file1" />


            </div>  
          </div>
        </div>


        <div className="flex flex-col text-gray-600 py-2">
          <div className="py-2">
            <label className="text-lg px-3">Remarks (Word or Excel file Only)</label>
            <input type="file" className="uploadFile" id="file1" />
          </div>
        </div>


        <div className="mt-7">
          <button className="w-3/4 sm:w-1/2 py-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
            Submit
          </button>
        </div>

        
      </form>
    </div>
  )
    
}

export default DocumentsCompany;
