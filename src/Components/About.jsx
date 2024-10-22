import React from 'react';
import { useMemo } from 'react';

const About = React.memo(() => {
  const link = useMemo(() => {
    return [
      {
        id: 1,
        href: 'https://www.credly.com/badges/98d3e018-b9cc-4c37-8e49-088608fd2c6b/linked_in?t=sh6ml4',
        text: "Blue Prism Certified Developer",
      },
    ];
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About myself
          </p>
        </div>

        <p className="text-xl mt-2 sm:mt-20">
          Hi, I'm Eduard Haponov, a dedicated Software Developer currently based in Wexford, Ireland. 
          Over the past two years, I have focused on building my expertise in software development, specifically in React.js and Robotic Process Automation (RPA). 
          My passion for creating impactful software solutions drives me to constantly learn and apply new technologies.
        </p>
        <p className="text-xl">
          During my time in Ireland, I have successfully completed a series of projects, including automation solutions for businesses and web applications that leverage modern front-end frameworks. 
          My work in RPA has led to the development of bots that optimize business processes, significantly improving operational efficiency.
          I am committed to advancing my career in software development, with a focus on combining web development and automation to contribute to the success and growth of the companies I work with.
        </p>

        <br />

        <p className="text-xl">
          In the past two years, I have developed a range of projects, from web applications to advanced automation solutions. 
          My expertise lies in React.js, Node.js, and RPA tools like UiPath and Blue Prism. 
          I am also a <a href={link[0].href} key={link[0].id} target="_blanc" rel="noreferer" className="text-blue-500 underline hover:text-blue-300">{link[0].text}</a>, which further enhances my ability to deliver robust automation solutions. You can explore these projects in more detail below.
        </p>
      </div>
    </div>
  );
});

export default About;
