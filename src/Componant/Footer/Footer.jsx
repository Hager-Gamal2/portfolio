import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2C3E50]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-6 lg:py-8">
            <div className="text-white text-center sm:text-left">
              <h3 className="mb-6 uppercase font-semibold">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div>
              <h3 className="font-semibold uppercase text-center text-white">
                Around the Web
              </h3>
              <ul className="font-medium flex space-x-3 items-center justify-center">
                <li className="flex mb-4 rounded-full p-4 w-10 h-10 items-center justify-center border border-white">
                  <i className="fab fa-facebook text-white"></i>
                </li>
                <li className="flex mb-4 rounded-full p-4 w-10 h-10 items-center justify-center border border-white">
                  <i className="fab fa-twitter text-white"></i>
                </li>
                <li className="flex mb-4 rounded-full p-4 w-10 h-10 items-center justify-center border border-white">
                  <i className="fab fa-linkedin-in text-white"></i>
                </li>
                <li className="flex mb-4 rounded-full p-4 w-10 h-10 items-center justify-center border border-white">
                  <i className="fas fa-globe text-white"></i>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="mb-6 text-center font-semibold uppercase text-white">
                About Freelancer
              </h2>
              <p className="text-white text-center">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 bg-[#1A252F] text-center">
          <span className="text-sm text-white">
            Copyright © Your Website 2021
          </span>
        </div>
      </footer>
    </>
  );
}
