"use client"
import React, { useEffect, useState } from 'react';

function Input({ label = "", style = "", type = "text", placeholder = "", value = "",onChange = ()=>{} ,...props }) {
 
  return (
    <div className="">
      
    {label && <div >{label}</div>}
    <div className="flex justify-between items-center bg-white rounded-md h-8 ">
      <input
        type={type}
        className={`  pl-4 bg-transparent outline-none text-black ${style}`}
        placeholder={placeholder}
        value={value}
		    onChange={onChange}
        {...props}
      />
      <span className="bg-slate-400  rounded-md text-black font-semibold px-2 ">CtrlK</span>
      </div>
    </div>
  );
}

export default Input;