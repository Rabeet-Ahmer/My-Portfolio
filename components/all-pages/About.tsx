import React from "react";
import Poster2 from "../special/assets/images/web-application.webp";
import Wrappers from "../special/Wrappers";
import Image from "next/image";

const About = () => {
  return (
    <section className=" bg-orange-500 my-8 mt-80 " id="section2" >
      <Wrappers>
        <div className="flex flex-col-reverse justify-self-center items-center xl:flex-row-reverse xl:gap-x-32 xl:items-center">
            <div className="flex flex-col text-black my-10 items-center max-w-screen-sm ">
              <h1 className="font-semibold text-5xl font-play ">About Me</h1>
              <h2 className="font-medium text-4xl text-center xl:text-start mt-4 ">I am a code lover passionate student learning <b className="text-stone-900"><i>AI Development</i></b> and seeking opportunities to develop myself as a source of inspiration for others. I have gained expertise in <b className="text-stone-900"><i>Typescript</i></b> and now learning 
              <b className="text-stone-900"><i>Next JS</i></b>. </h2>
            </div>
          <div className="py-8  shrink-0">
            <Image
              src={Poster2}
              alt="poster"
              height={300}
              className="rounded-2xl "
            />
          </div>
        </div>
      </Wrappers>
    </section>
  );
};

export default About;
