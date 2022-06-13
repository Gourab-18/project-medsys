import React from 'react'

function CompletedWork() {
  return (
    <div className="bg-gray-200 flex flex-col space-y-4  ">
      <h2 className="text-5xl font-semibold text-gray-800 text-center p-3">
        Completed Work{" "}
      </h2>
      <form className="max-w-[900px] w-3/4 mx-auto bg-gray-100 p-5 px-8 rounded-lg">

        <div className="flex flex-col text-gray-600 py-5">
          <label className="py-3">Details regarding Completed Work</label>
            {/* <input type="text" placeholder="Placeholder" class="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
                    <i class="fas fa-user"></i>
                </span> */}

            <textarea rows="15" className="border p-2 rounded w-full" placeholder="Enter details..."></textarea>
        </div>

        <div className="flex flex-col text-gray-600 py-5">
          <label className="py-3">Remarks</label>

            <textarea rows="7" className="border p-2 rounded w-full" ></textarea>
        </div>

      </form>
    </div>
  )
}

export default CompletedWork