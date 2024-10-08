"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect, useRef } from "react";

interface InputProps {
  label?: string;
  style?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  maxLength?: number;
  isSearch?:boolean;
}

function Input({
  label = "",
  style = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  maxLength,
  isSearch =false,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleFocus = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleFocus);
    return () => {
      window.removeEventListener("keydown", handleFocus);
    };
  }, []);

  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-sm font-medium text-text-700">{label}</label>}
      
      <div className={`flex items-center bg-white rounded-md h-10 border border-gray-300 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
        <input
          ref={inputRef}
          type={type}
          className={`w-full px-4 bg-transparent outline-none text-black placeholder-gray-500 ${style}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          {...props}
        />
        {isSearch?
        <>
        <span className="text-xs text-gray-400 px-2">Ctrl + K</span>

        <button
          className={`bg-primary-300 h-full flex items-center justify-center px-4 border-2 border-primary-300 rounded-r-md hover:bg-primary-400 hover:scale-105 transition-transform duration-200 ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        </>
        :null}
      </div>
    </div>
  );
}

export default Input;
