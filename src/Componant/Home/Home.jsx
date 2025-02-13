import React from 'react'
import myImg from '../../assets/images/home.svg'
export default function Home() {
  return<>
  <div className="flex-grow flex flex-col justify-center items-center bg-[#1ABC9C] text-center">
  <div>
  <img src={myImg} className='w-100 ' alt="" />
  <h3 className="text-white uppercase   font-bold text-3xl">start Framework</h3>
  </div>
  <div className="inline-flex items-center justify-center space-x-3">
          <div className="w-24 h-1 bg-white"></div>
          <i className="fas fa-star text-white text-2xl"></i>
          <div className="w-24 h-1 bg-white"></div>
        </div>
        <div className='flex text-white p-3'>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  </>
}
