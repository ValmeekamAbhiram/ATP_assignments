import React from "react";

function Header() {
  return (
   <div className="flex flex-col sm:flex-row items-center px-6 sm:px-10 py-2 border-b bg-gray-100 gap-3 sm:gap-0">
  
  <div className="flex items-center gap-4">
        <img className="w-6 h-6" src="https://img.icons8.com/color/48/react-native.png" alt="logo"/>
      </div>

  <div className="flex gap-6 md:gap-10 text-sm font-medium p-3 text-gray-600">
        <a href="#" className="text-blue-500">Home</a>
        <a href="#" className="hover:text-black">About Author</a>
        <a href="#" className="hover:text-black">About this Project</a>
  </div>

  <div className="flex gap-4 sm:flex-1 sm:justify-end">
    <img src="https://img.icons8.com/ios-glyphs/30/search--v1.png" className="w-5 h-5 opacity-70"/>
    <img src="https://img.icons8.com/ios-glyphs/30/github.png" className="w-5 h-5 opacity-70"/>
    <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" className="w-5 h-5 opacity-70"/>
  </div>

  </div>
  );
}

export default Header;