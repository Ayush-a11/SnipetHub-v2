"use client"
import React, { useEffect, useState } from 'react';

function Input({ label = "", style = "", type = "text", placeholder = "", value = "",onChange = ()=>{} ,...props }) {
 
  return (
    <div className="">
      
    {label && <div >{label}</div>}
      <input
        type={type}
        className={` rounded-sm pl-4  ${style}`}
        placeholder={placeholder}
        value={value}
		    onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;