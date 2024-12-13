import React from "react";
import Wrappers from "../special/Wrappers";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" bg-teal-500 duration-200 my-8 mt-80 scroll-m-40" id="section4">
      <Wrappers>
        <div className="py-8">
          <h1 className="font-semibold text-5xl font-play justify-self-center">
            Contact Me
          </h1>
          <h2 className="justify-self-center mt-4 font-medium text-4xl text-center">You can contact me for any queries on these links below</h2>
          <ul className="flex justify-evenly mt-24">
            <li className="flex flex-col items-center gap-3 hover:scale-125 duration-200 ">
              <Link
                href={"https://www.facebook.com/profile.php?id=61568145191140"}
                target="_blank"
              >
                <FaFacebook className="text-5xl" />
              </Link>
              <p className="text-2xl hover:cursor-pointer font-poppins">Facebook</p>
            </li>
            <li className="flex flex-col items-center gap-3 hover:scale-125 duration-200 ">
              <Link
                href={"https://www.linkedin.com/in/rabeet-ahmer-b4204a332/"}
                target="_blank"
              >
                <FaLinkedinIn className="text-5xl" />
              </Link>
              <p className="text-2xl hover:cursor-pointer font-poppins">Linkedin</p>
            </li>
            <li className="flex flex-col items-center gap-3 hover:scale-125 duration-200 ">
              <Link href={"https://github.com/Rabeet-Ahmer"} target="_blank">
                <FaGithub className="text-5xl" />
              </Link>
              <p className="text-2xl hover:cursor-pointer font-poppins">Git Hub</p>
            </li>
          </ul>
        </div>
      </Wrappers>
    </section>
  );
};

export default Contact;
