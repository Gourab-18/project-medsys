import React from 'react'
import image from '../../assets/dp.png'

export default function LoginRegister() {
  return (
    <div className='bg-zinc-400 grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='lg:w-2/3 flex flex-col space-y-4 justify-center lg:ml-auto' >
        <h2 className='text-4xl font-semibold text-gray-800 text-center text ml-auto mr-auto'>Sign in here </h2>
          <form className='max-w-[350px] w-3/4 mx-auto bg-gray-100 p-6 px-6 rounded-md'>
            <h2 className='text-4xl dark:text-gray-900 font-bold text-center ml-auto'>SIGN IN</h2>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Phone Number/E-Mail</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none' type="number"/>
            </div>
            <button className='w-full my-5 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-md'>Get OTP</button>
            <div className='flex flex-col text-gray-600 py-2'>
              <label>Enter OTP</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-yellow-300 focus:bg-white focus:outline-none' type="number"/>
            </div>
            <button className='w-full my-5 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-md'>Sign in</button>
          </form>
        </div>
        <div className='lg:w-2/3 flex flex-col justify-center space-y-4 lg:mr-auto' >
        <h2 className='text-4xl font-semibold text-white text-center ml-auto mr-auto'>Create an account here </h2>
          <form className='max-w-[350px] w-3/4 mx-auto bg-zinc-900 p-6 px-6 rounded-md'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
            <div className='flex flex-col text-gray-300 py-2'>
              <label>Phone Number/E-Mail</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' type="number"/>
            </div>
            <button className='w-full my-5 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-md'>Get OTP</button>
            <div className='flex flex-col text-gray-300 py-2'>
              <label>Enter OTP</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' type="number"/>
            </div>
            <button className='w-full my-5 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-md'>Sign in</button>
          </form>
        </div>
        
    </div>
  )
}
