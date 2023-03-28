import React from 'react';

const About = React.memo(() => {
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
          Hello, my name is Eduard and I am a Ukrainian entrepreneur turned
          self-taught coder. For the past three years, I successfully operated a
          grocery store with an annual turnover of $240,000 in the Kyiv region.
          However, due to the Russian invasion and occupation of Irpin, I lost
          my business and decided to pursue a new career path in coding. I am
          highly motivated and dedicated to applying my skills and knowledge to
          this field.
        </p>

        <br />

        <p className="text-xl">
          I have recently completed several coding projects, which you can find
          detailed information about below. I am committed to growing my coding
          abilities and building a successful career in this exciting field.
        </p>
      </div>
    </div>
  );
});

export default About;
