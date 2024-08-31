"use client"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';

interface InputProps {
  label?: string;
  style?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange? :(e: ChangeEvent<HTMLInputElement>)=>void;
}


function Input({ label = "", style = "", type = "text", placeholder = "", value = "",onChange,...props }:InputProps) {
 
  const inputRef =useRef(null);

  useEffect(()=>{
    const handleFocus = (e:KeyboardEvent)=>{
      console.log(e.ctrlKey, e.key)
      if(e.ctrlKey && e.key ==='k'){
        e.preventDefault();
        inputRef.current?.focus();
      }
  }
  window.addEventListener('keydown',handleFocus);
  return ()=>{
    window.removeEventListener('keydown',handleFocus);
  }
  },[])

  return (
    <div className="">
      
    {label && <div >{label}</div>}
    <div className="flex justify-between items-center bg-white rounded-md h-8 ">
      <input ref={inputRef}
        type={type}
        className={`  pl-4 bg-transparent outline-none text-black ${style}`}
        placeholder={placeholder}
        value={value}
		    onChange={onChange}
        {...props}
      />
      <span className="bg-primary-300 rounded-md border-2 border-primary-300 text-text-950 font-bold mx-0.5 px-4 hover:bg-primary-400 hover:scale-105 cursor-pointer "><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </span>
      <span id="focus-control" className="bg-transparent rounded-md border-2 border-primary-300 text-primary-300 font-semibold mx-0.5 px-1 hover:bg-primary-400 hover:text-text-950 cursor-pointer">Ctrl K</span>
      </div>
    </div>
  );
}

export default Input;