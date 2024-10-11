import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



const Todo = () => {
  return (
    <div className="place-self-center bg-white w-[400px] h-[600px] p-10 flex-col gap-3">
      {/* başlık kısmı */}
      <h1 className="text-3xl font-semibold tracking-wider flex items-center gap-3 p-1"><FaClipboardList />Todo App
      </h1>
      {/* Arama kısmı */}
      <div className="flex items-center bg-[#E4E0E1]  rounded-full">
        <input type="text" 
        className="border-none outline-none p-2  flex-1 bg-transparent placeholder:text-slate-600"  
        placeholder='Yeni bir görev gir'/>
        <div className="bg-[#AB886D] h-full  w-10 flex items-center justify-center rounded-r-full cursor-pointer">
        <FaPlus  className="size-10 p-2 text-[#493628]"/>
        </div>
      </div>
    </div>
  );
};

export default Todo