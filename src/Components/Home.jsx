import React from 'react';
import HeroImage from '../assets/heroImage.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = React.memo(() => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black 
         via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-16  sm:mt-0">
          <h2 className="text-4xl sm:text-7xl sm:mt-20 font-bold text-white ">
          I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am passionate about creating efficient software solutions, 
          with a particular focus on React.js and Robotic Process Automation (RPA). 
          <p>My background combines software development and business management, allowing me to bring a problem-solving mindset to every project. 
            I am constantly exploring new technologies and best practices to deliver high-quality results.
          </p>
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            width={250}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;

