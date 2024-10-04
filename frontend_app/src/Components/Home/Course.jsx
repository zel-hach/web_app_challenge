
import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaUserTie, FaStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import img from './../../assets/entreprise-informatique-scaled.jpeg';
import { Link } from 'react-router-dom';

function Course({ course }) {
  return (
    <div className="w-full m-2 bg-black rounded-lg p-4 flex flex-col justify-between mx-auto mb-6">
      <div className=''>
      <div className="relative">
        <div className="absolute flex items-center gap-1 ml-2 top-2">
          <FaStar size="20" className="text-yellow-400" />
          <p className="text-yellow-400">4.4</p>
        </div>
        <img src={img} alt="Course" className="w-full h-[200px] rounded-lg object-cover" />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-white font-bold text-xl">{course.title}</h1>

        <div className="flex items-center gap-2 text-gray-400">
          <div>
            <FaUserTie size="20" />
            </div>
          <span>{course.instructor}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <div>
            <MdAccessTimeFilled size="20" />
            </div>
          <span>{course.schedule}</span>
        </div>
        <div className="flex  gap-2 text-gray-400">
          <div>
            <AiOutlineFundView size="30" />
            </div>
          <span>{course.description}</span>
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center mb-0 mt-4">
        <p className="w-[140px] py-2 text-center border-2 border-[#EC4C63] rounded-lg text-white">
          WATCH MORE
        </p>
        <p className="w-[140px] py-2 text-center bg-[#EC4C63] rounded-lg text-black">
          SAVE FOR LATER
        </p>
      </div>
    </div>
  );
}

export default Course;
