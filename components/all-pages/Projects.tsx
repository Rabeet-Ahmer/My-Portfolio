import React from "react";
import Wrappers from "../special/Wrappers";
import Image from "next/image";
import Poster1 from "../././special/assets/images/birthday-app.png";
import Poster2 from "../././special/assets/images/weather-app.png";
import Poster3 from "../././special/assets/images/countdown-app.png";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="bg-yellow-500 my-8 mt-80 scroll-m-20" id="section3">
      <Wrappers>
        <div className=" flex flex-col">
          <div className="flex flex-col text-black my-10 items-center  ">
            <h1 className="font-semibold text-5xl font-play ">My Showcase</h1>
            <h2 className="font-medium text-4xl text-center mt-4">
              I created these projects with hard work and dedication.
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 gap-y-16 xl:flex-row xl:justify-between ">

            <Link
              href={"https://birthday-wish-app-beta.vercel.app/"}
              target="_blank"
            >
              <Image
                src={Poster1}
                alt="Birthday wish app"
                width={400}
                className="hover:scale-110 duration-200 rounded-2xl  h-[280px]"
              />
              <p className="flex justify-self-center font-medium font-poppins text-3xl mt-8 text-black hover:text-yellow-200 duration-500">Birthday Wish App</p>
            </Link>
            <Link
              href={
                "https://vercel.com/api/toolbar/link/weather-widget-app-4f5i.vercel.app/"
              }
              target="_blank"
            >
              <Image
                src={Poster2}
                alt="Weather widget app"
                width={400}
                className="hover:scale-110 duration-200 rounded-2xl h-[280px] "
              />
            <p className="flex justify-self-center font-medium font-poppins text-3xl mt-8 text-black hover:text-yellow-200 duration-500">Weather Widget App</p>
            </Link>
            <Link
              href={
                "https://vercel.com/api/toolbar/link/countdown-timer-tezz.vercel.app/"
              }
              target="_blank"
            >
              <Image
                src={Poster3}
                alt="Countdown timer app"
                width={400}
                className="hover:scale-110 duration-200 rounded-2xl h-[280px]"
              />
              <p className="flex justify-self-center font-medium font-poppins text-3xl mt-8 text-black hover:text-yellow-200 duration-500">Countdown Timer App</p>
            </Link>
          </div>
        </div>
      </Wrappers>
    </section>
  );
};

export default Projects;
