
import React from 'react';

export default function About() {
  return <>
    <div className="flex-grow flex justify-center items-center bg-[#1ABC9C]">
      <div className="w-full text-center">
        <h1 className="mb-4 font-bold text-white uppercase text-2xl">About Component</h1>

        <div className="inline-flex items-center justify-center space-x-3">
          <div className="w-32 h-1 bg-white"></div>
          <i className="fas fa-star text-white text-2xl"></i>
          <div className="w-32 h-1 bg-white"></div>
        </div>

        <div className="flex justify-center pt-4 space-x-5 text-white">
          <p className="text-start max-w-xl">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p className="text-start max-w-xl">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
    </>;
}
