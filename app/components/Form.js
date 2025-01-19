"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Form = () => {

  const [place, setPlace] = useState("");
  const [sort, setSort] = useState("");
  const [mob, setMob] = useState("");
  const [flag, setFlag] = useState("");
  const [image, setImage] = useState("");

  
  const router = useRouter();

  
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!place || !sort) {
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
  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  

  return (
    <form
      name="new"
      className="mx-auto mt-2 max-w-xl sm:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 m-4">
        {/* Select Place */}
        <div>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">اختار الحي الواقع به المخالفة *</option>
            <option value="شرق">شرق</option>
            <option value="وسط">وسط</option>
            <option value="غرب">غرب</option>
            <option value="المنتزه أول">المنتزه أول</option>
            <option value="المنتزه ثان">المنتزه ثان</option>
            <option value="الجمرك">الجمرك</option>
            <option value="العجمي">العجمي</option>
            <option value="العامرية أول">العامرية أول</option>
            <option value="العامرية ثان">العامرية ثان</option>
            <option value="برج العرب">برج العرب</option>
          </select>
        </div>

        {/* Select Violation Type */}
        <div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">اختار نوع المخالفة *</option>
            <option value="نظافة">نظافة / تراكم قمامة</option>
            <option value="هدم">هدم/ترميم/بناء (بدون ترخيص)</option>
            <option value="كلاب ضالة">كلاب ضالة / مفترسة</option>
            <option value="موقف عشوائي">موقف عشوائي / زيادة أجرة</option>
            <option value="انهيار عقار">انهيار عقار / جزء</option>
            <option value="إنارة">إنارة / كهرباء</option>
            <option value="باعة جائلين">باعة جائلين / إشغال طريق</option>
            <option value="صرف صحي">صرف صحي / تراكم مياه أمطار</option>
            <option value="إزعاج">إزعاج / مكروفونات</option>
            <option value="إزعاج"> اخــــري </option>
          </select>
        </div>

        {/* File Upload */}
        <div className="bg-blue-100 p-2 rounded-lg text-right ">
          اضغط لتحميل صورة المخالفة
          <input
            type="file"
            accept="image/*"
            className="bg-transparent "
            onChange={convertToBase64}
          />
          {image && <img src={image} alt="Preview" width={200} height={200} priority="true"  />}
        </div>

        {/* Description Text Area */}
        <div className="sm:col-span-2">
          <textarea
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            placeholder="المخالفةوعنوانها / وصف دقيق / علامة مميزة"
            rows={2}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Mobile Number */}
        <div className="sm:col-span-2">
          <label htmlFor="mob" className="block text-sm font-semibold">
            رقم التليفون للتواصل والمتابعة (اختياري)
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

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-block m-4 mb-8 rounded bg-blue-500 px-8 py-2 text-white"
          >
            ارسل البلاغ
          </button>
        </div>
      </div>
    </form>
    
  );
};

export default Form;
