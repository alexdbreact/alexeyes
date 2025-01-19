
import React from "react";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import e3lam from "./../public/e3lam.jpeg";
import Link from "next/link";






export const metadata = {
  title: "عين الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية", 
  openGraph: {
    title: 'Home Page - الإسكندرية',
    description: 'دليل المواطن الايجابي',
    url: 'https://yourwebsite.com',
    siteName: 'عين الإسكندرية',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Page - الإسكندرية',
    description: 'دليل المواطن الايجابي',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center overflow-hidden">
        <div className="max-w-screen-xl m-0  bg-white shadow-xl sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-0 flex flex-col items-center">
              <div className="max-w-lg mx-auto mt-0 bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="text-l py-4 px-6 bg-blue-500 text-white text-center  uppercase">
                قم بتصوير المخالفة و ارسل لنا تفاصيلها خلال ثواني

                </div>
                {children}
                </div>
            </div>
          </div>




          <div className="flex-1 border-blue-200 text-center hidden lg:flex">
            <div className="m-1 xl:m-4 w-full bg-contain bg-center bg-no-repeat rounded-lg shadow-sm">
           <Image src={e3lam} alt="bg" /> 
           <Link 
           className="bg-blue-100 px-8 py-2 border rounded-lg text-gray-600 "
           href="./login"

           >Login</Link>
         </div>
          </div>
        </div>
      </div>

        <Footer/>

      </body>
    </html>
  );
}
