import React from 'react';
import { FaSearch, FaHeart, FaBell, FaCog } from 'react-icons/fa';
import Image from 'next/image';
import profilePic from "@/app/public/1f2f51c544ebc104a25d9857321696cf.jpg";


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">MORENT</div>
      
      {/* Search Bar */}
      <div className="flex flex-1 mx-4 relative max-w-[492px] h-[44px] ml-4">
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search something here" 
          className="w-full pl-10 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <FaHeart className="text-gray-600 text-lg cursor-pointer hover:text-blue-500" />
        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer hover:text-blue-500" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <FaCog className="text-gray-600 text-lg cursor-pointer hover:text-blue-500" />
        
          {/* Profile Image */}
        <Image 
          src={profilePic}
          alt="Profile" 
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
