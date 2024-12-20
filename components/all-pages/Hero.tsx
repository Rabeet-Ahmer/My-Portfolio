import React from 'react'
import Wrappers from '../special/Wrappers';
import Image from "next/image";
import Poster from "../special/assets/images/hero-poster.png"

const Hero = () => {
  return (
    <section className="bg-emerald-500 my-8 mt-24 scroll-m-40" id='section1'>
       <Wrappers>
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-center xl:justify-between ">

          <div className="flex flex-col text-black my-10 items-center  ">
            <h1 className="font-semibold text-5xl font-play">Hi, I am Rabeet Ahmer</h1>
            <h2 className="font-medium text-4xl  text-center mt-4">Upcoming Web Developer and AI Developer.</h2>
          </div>
          <div className="py-8">
            <Image src={Poster} alt="poster" height={300} className="rounded-2xl"/>
          </div>
        </div>
      </Wrappers> 
    

    </section>
  )
}

export default Hero