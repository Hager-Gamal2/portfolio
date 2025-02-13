import React, { useState } from 'react';

export default function Contact() {
 const [isWriten,setIsWriten]= useState(false);
  return (
    <div className="flex-grow flex flex-col items-center justify-center py-10 bg-white">
<div className="header flex flex-col items-center justify-center">
        
<h1 className="text-4xl font-bold text-[#2C3E50] uppercase mb-4">Contact Section</h1>
   


   <div className="flex items-center justify-center space-x-3 mb-6">
     <div className="w-20 h-1 bg-[#2C3E50]"></div>
     <i className="fas fa-star text-[#2C3E50] text-xl"></i>
     <div className="w-20 h-1 bg-[#2C3E50]"></div>
   </div>

</div>
        <form className="max-w-md mx-auto space-y-5 ">
         <input
            type="text"
            name="userName"
            placeholder="Username"
            className=" w-full p-2 border-b-2  border-gray-300  focus:outline-none  text-white"
            required
          />

         

          <input
            type="text"
            name="userAge"
            placeholder="userAge"
            className="w-full p-2 border-b-2 border-gray-300  focus:outline-none  text-white"
            required
          />
 <input
            type="email"
            name="email"
            placeholder="userEmail"
            className="w-full p-2 border-b-2 border-gray-300  focus:outline-none  text-white"
            required
          />

          <input
            type="password"
            name="paaword"
            placeholder="userPassword"
            className="w-full p-2 border-b-2 border-gray-300  focus:outline-none  text-white"
            required
          />

  <button type="submit" className="text-white bg-[#1ABC9C]    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Send Message</button>

        </form>
      </div>
    
  );
}
