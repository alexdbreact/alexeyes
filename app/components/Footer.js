import idea from '../idea/page'
import Link from 'next/link'
import { FcHome } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";






const Footer = () => {
  return (
    <div className="btm-nav">
      
  <Link href={"../"} autoFocus="true" className="    border-r-2 focus:border-blue-900 focus:outline-none bg-gray-200 text-gray-900 focus:bg-blue-400 	 ">
  <FcHome />

    <span className="btm-nav-label text-center text-xs">أُرصد مخالفة/شكوي</span>
   
  </Link>
 
  <Link href={"../idea"} className=" border-r-2 focus:border-blue-900 focus:outline-none  bg-gray-200 text-gray-900 focus:bg-blue-400 ">
   

   
  <FcIdea />

    <span className="btm-nav-label text-center text-xs">قدم مقترح/فكرة</span>


  </Link>
 
  <Link href={"../servey"} className=" border-r-2 focus:border-blue-900 focus:outline-none  bg-gray-200 text-gray-900 focus:bg-blue-400">
  <FcComboChart />

    <span className="btm-nav-label text-center text-xs">استطلاعــات رأي </span>
   
  </Link>
  <Link href={"../reports"} className=" focus:border-teal-900 focus:outline-none  bg-gray-200 text-gray-900 focus:bg-blue-400">
  <FcCallback color="white" fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-xs">قرارات/أخبار هامة</span>
   
  </Link>
 
</div>
  )
}

export default Footer