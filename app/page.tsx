import React from "react";
import Hero from "../components/all-pages/Hero";
import About from "../components/all-pages/About";
import Projects from "../components/all-pages/Projects";
import Header from "../components/all-pages/Header";
import Footer from "../components/all-pages/Footer";
import Contact from "../components/all-pages/Contact";


const page = () => {
  return (
    <div className="min-w-min">
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default page;
