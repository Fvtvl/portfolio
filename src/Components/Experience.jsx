import React from 'react';
import uipath from '../assets/uipath.png';
import blueprism from '../assets/blueprism.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import mui from '../assets/mui.png';
import styled from '../assets/styled.png';
import node from '../assets/node.png';
import { useMemo } from 'react';

const Experience = React.memo(() => {
  const techs = useMemo(() => {
    return [
      {
        id: 1,
        src: uipath,
        title: 'UiPath',
        style: 'shadow-orange-500',
      },
      {
        id: 2,
        src: blueprism,
        title: 'BluePrism',
        style: 'shadow-blue-500',
      },
      {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
      },
      {
        id: 4,
        src: reactImage,
        title: 'React.js',
        style: 'shadow-blue-600',
      },
      {
        id: 10,
        src: node,
        title: 'Node.js',
        style: 'shadow-green-600',
      },
      {
        id: 5,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400',
      },
      {
        id: 6,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400',
      },
      {
        id: 7,
        src: styled,
        title: 'Styled components',
        style: 'shadow-purple-500',
      },
      {
        id: 8,
        src: mui,
        title: 'Mui',
        style: 'shadow-blue-500',
      },
      // {
      //   id: 9,
      //   src: graphql,
      //   title: 'GraphQL',
      //   style: 'shadow-pink-500',
      // },
    ];
  }, []);

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen pt-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt={title}
                width="100%"
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Experience;
