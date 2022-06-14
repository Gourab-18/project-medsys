import React from 'react'

function PendingWork() {
  return (
    <div className=" flex flex-col ">
      <h2 className="text-4xl sm:text-5xl font-semibold text-zinc-800 text-center py-5">
        Pending Work
      </h2>
      <form className="w-full sm:w-2/3 mx-auto bg-gray-100 p-4 px-5 rounded-lg">
        <div className="flex flex-col text-zinc-800 py-2">
          <label className="py-1 font-medium">Details regarding Completed Work</label>
            <textarea rows="11" className="border p-1 rounded-sm w-full" placeholder="Enter details..."></textarea>
        </div>
        <div className="flex flex-col text-gray-800 py-4">
          <label className="py-1 font-medium">Remarks</label>
            <textarea rows="7" className="border p-1 rounded-sm w-full" ></textarea>
        </div>
      </form>
    </div>
  )
}

export default PendingWork