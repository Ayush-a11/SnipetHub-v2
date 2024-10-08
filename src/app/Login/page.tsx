"use client";
import React, { useState } from "react";
import Input from "@/utils/Input"; // Assuming your custom Input component is in the same directory
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authObj from "@/Firebase/authConfig";
import AWN from "awesome-notifications"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warn } from "console";



const LoginModal: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    
    const result = await authObj.LoginWithEmailPassword(email, password);
    
    console.log(result);
    // if(result) {}
    // if(result?.error){
    if(result.error)
      toast.error(result.message);
    else
      toast.success("logged In Successfully")
      console.log('error')
       const awn = new AWN()
       console.log(awn)
       awn.tip('logged in Sucessfully')
       // }
    // Add form submission logic here (e.g., authentication)
  };

  const handleGoogleSignIn = async() => {
    console.log("Sign in with Google");
    const result = await authObj.signInWithGoogleAuth();
    console.log(result);

    if(result.error)
      toast.error(result.message);
    else
      toast.success("logged In Successfully")
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Background with Blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-accent-50 rounded-lg shadow-lg p-6 max-w-md w-full z-10">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-center mb-6 text-text-900">Login</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />

              {/* Password Input */}
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  />
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-primary-300 text-white font-semibold rounded-md hover:bg-primary-400 transition duration-200"
              >
                Sign In
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center justify-center my-4">
              <span className="border-b w-1/3"></span>
              <span className="text-gray-500 px-2 text-sm">OR</span>
              <span className="border-b w-1/3"></span>
            </div>

            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center py-2 bg-secondary-500 text-text-100 font-semibold rounded-md hover:bg-secondary-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
