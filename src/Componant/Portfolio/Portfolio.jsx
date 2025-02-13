import React from 'react';
import myImg1 from '../../assets/images/img1.png';
import myImg2 from '../../assets/images/img2.png';
import myImg3 from '../../assets/images/img3.png';


export default function Portfolio() {
  return (
    <>
      <div className="flex-grow flex flex-col justify-center text-center items-center w-full mt-24">
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] uppercase m-4">
            PORTFOLIO COMPONENT
          </h1>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-20 h-1 bg-[#2C3E50]"></div>
            <i className="fas fa-star text-[#2C3E50] text-2xl"></i>
            <div className="w-20 h-1 bg-[#2C3E50]"></div>
          </div>
        </div>
      </div>

      {/* الصور بتنسيق Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg1} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>

        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg2} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>

        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg3} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>

        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg1} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>

        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg2} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>

        <figure className="relative cursor-pointer">
          <img className="rounded-lg w-full" src={myImg3} alt="Portfolio Item" />
          <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <i className="fas fa-plus text-white text-6xl"></i>
          </div>
        </figure>
      </div>
    </>
  );
}
