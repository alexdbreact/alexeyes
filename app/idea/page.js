"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const idea = () => {
  const [name, setName] = useState("");
   const [idy, setIdy] = useState("");
   const [mob, setMob] = useState("");
   const [job, setJob] = useState("");
   const [details, setDetails] = useState("");
 
   
   const router = useRouter();
 
   
   
 
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     if (!mob || !details) {
       alert("Name and image are required.");
       return;
   }
 
   try {
       const res = await fetch("http://localhost:3000/api/items", {
           method: "POST",
           headers: {
               "Content-type": "application/json",
           },
           body: JSON.stringify({ place, sort, image, flag, mob }),
       });
 
       if (res.ok) {
           router.push("/idea");
       } else {
           throw new Error("Failed to create a item");
       }
   } catch (error) {
       console.log(error);
   }
     
   };
 
   // Convert file to Base64
   
 
   return (
     <form
       name="new"
       className="mx-auto mt-2 max-w-xl sm:mt-10"
       onSubmit={handleSubmit}
     >
       <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 m-4">

 
         {/* Description Text Area */}
         <div className="sm:col-span-2">
           <textarea
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="الاسم بالكامل"
             rows={2}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
         <div className="sm:col-span-2">
           <label htmlFor="idy" className="block text-sm font-semibold">
             الرقم القومي
           </label>
           <input
             type="idy"
             id="idy"
             name="idy"
             value={idy}
             onChange={(e) => setIdy(e.target.value)}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
         <div className="sm:col-span-2">
           <textarea
             value={job}
             onChange={(e) => setJob(e.target.value)}
             placeholder="الوظيفة"
             rows={1}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
           {/* Mobile Number */}
           <div className="sm:col-span-2">
           <label htmlFor="mob" className="block text-sm font-semibold">
             رقم التليفون للتواصل والمتابعة 
           </label>
           <input
             type="tel"
             id="mob"
             name="mob"
             value={mob}
             onChange={(e) => setMob(e.target.value)}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
         <div className="sm:col-span-2">
           <textarea
             value={details}
             onChange={(e) => setDetails(e.target.value)}
             placeholder="تفاصيل المقترح"
             rows={4}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
 
       
 
         {/* Submit Button */}
         <div className="sm:col-span-2">
           <button
             type="submit"
             className="inline-block m-4 mb-8 rounded bg-blue-500 px-8 py-2 text-white"
           >
             ارسل المقترح
           </button>
         </div>
       </div>
     </form>
     
   );
 };

export default idea