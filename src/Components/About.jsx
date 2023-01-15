import React from 'react';

const About = React.memo(() => {
  return (
    <div
      name="about"
      className="w-full h-auto sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About myself
          </p>
        </div>

        <p className="text-xl mt-2 sm:mt-20">
          My name is Eduard and I’m Ukrainian. In the last 3 years, I had my own
          business in the Kyiv region. Over the years I have achieved
          significant success, for example, I created and operated a grocery
          store with an annual turnover of about $240,000, set up a supply chain
          with over 30 suppliers, managed a team of six, hired and trained new
          employees, and kept accounting and tax records. Because of the russian
          invasion and occupation of Irpin, it was significantly destroyed, I
          lost my business and started to move in a new direction. So, being
          highly motivated I started my self-study and dived into coding this
          year. I’m ready to work hard and apply my knowledge and skills.{' '}
        </p>

        <br />

        <p className="text-xl">
          I also created some projects myself which you can familiarize yourself
          with in detail below. I aim to reach new heights in coding and build a
          successful career in this field.{' '}
        </p>
      </div>
    </div>
  );
});

export default About;
