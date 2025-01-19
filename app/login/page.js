import React from 'react'
import { FcBarChart } from "react-icons/fc";


const page = () => {
  return (
<div className="w-screen min-h-screen mt-20 flex items-top justify-center bg-gray-50 dark:bg-gray-800 px-2 sm:px-2 lg:px-2">
  <div className="relative py-3 sm:max-w-xs sm:mx-auto">
    <div className="min-h-96 px-8 py-6 mt-0 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center h-full select-none">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <FcBarChart />

          <p className="m-0 text-[16px] font-semibold dark:text-white">
            دخول الي لوحة التحكم
          </p>
          <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
            جميع البيانات سرية و مؤمنة  
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-xs text-gray-400 ">
            Username
          </label>
          <input
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            placeholder="Username"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold text-xs text-gray-400 ">Password</label>
        <input
          type="password"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
          placeholder="••••••••"
        />
      </div>
      <div className="mt-5">
        <button className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
          Login
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default page