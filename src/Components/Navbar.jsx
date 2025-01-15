import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-white flex items-center">
          <span className="font-bold text-2xl">SCHOOLS</span>
          
         
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/find-school" className="text-white border-4 border-purple-500 round p-3 mx-2">FIND YOUR SCHOOL</Link>
      </div>
    </nav>
  );
};

export default Navbar;
