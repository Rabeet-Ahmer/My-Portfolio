import Link from "next/link";
import React from "react";
import Wrapper from "../special/Wrappers";


const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <Wrapper>
        <header className="text-black/60 flex px-6 gap-x-4 rounded-lg justify-between py-3 backdrop-blur-[5px] bg-white/80 items-center">
            
            <h1 className="text-4xl text-center font-black italic font-libre-bodoni text-slate-700 ">My Portfolio</h1>
    
          <ul className="flex gap-x-5 xl:gap-x-10 font-bold ">
            <li className="font-bold text-lg font-poppins hover:text-red-500 transition-colors duration-300 ">
              <Link href="#section1">Home</Link>
            </li>
            <li className="font-bold text-lg font-poppins hover:text-red-500 transition-colors duration-300 ">
              <Link href="#section2">About</Link>
            </li>
            <li className="font-bold text-lg font-poppins hover:text-red-500 transition-colors duration-300 ">
              <Link href="#section3">Projects</Link>
            </li>
            <li className="font-bold text-lg font-poppins hover:text-red-500 transition-colors duration-300 ">
              <Link href="#section4">Contact</Link>
            </li>
          </ul>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;
