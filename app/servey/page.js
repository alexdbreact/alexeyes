import React from 'react'
import Bool from '../components/Bool'



const page = () => {
  return (
<div className="relative w-full bg-white px-6 pt-2 pb-2 mt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
  <div className="mx-auto px-5">
    <div className="flex flex-col items-center">
      <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
         رأيك يهمنا
      </h2>
      <p className="mt-3 text-lg text-neutral-500 md:text-xl">
جميع البيانات سرية و مؤمنة      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
    
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <span> اسواق اليوم الواحد</span>
          <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <Bool />
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span>  مياه الامطار و النوات </span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
        <Bool />
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> الطرق و الرصف</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <Bool/>
        </details>
      </div>

    
    </div>
  </div>

</div>

  )
}

export default page