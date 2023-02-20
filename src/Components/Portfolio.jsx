import React from 'react';
import webstudio from '../assets/portfolio/webstudio.jpg';
import fetch from '../assets/portfolio/pokes-api.jpg';
import fvtvlShop from '../assets/portfolio/fvtvl-shop.jpg';
import reactBattle from '../assets/portfolio/ReactBattle.jpg';
import reactWeather from '../assets/portfolio/weather-app.jpg';
import ecomm from '../assets/portfolio/ecomm.jpg';
import movie from '../assets/portfolio/movie-db.jpg';

import { useMemo } from 'react';
import { useCallback } from 'react';

const Portfolio = React.memo(() => {
  const openInNewTab = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const portfolios = useMemo(() => {
    return [
      {
        id: 1,
        src: webstudio,
        link: 'https://fvtvl.github.io/webstudio/',
        code: 'https://github.com/Fvtvl/webstudio',
      },
      {
        id: 3,
        src: fetch,
        link: 'https://fvtvl.github.io/pokes-api/',
        code: 'https://github.com/Fvtvl/pokes-api',
      },
      {
        id: 4,
        src: reactBattle,
        code: 'https://github.com/Fvtvl/react-pokes',
        link: 'https://beamish-stroopwafel-97a890.netlify.app/battle',
      },
      {
        id: 5,
        src: reactWeather,
        code: 'https://github.com/Fvtvl/react-weather-app',
        link: 'https://fvtvl-weather-app.netlify.app/',
      },
      {
        id: 6,
        src: ecomm,
        code: 'https://github.com/Fvtvl/react-ecomm-mui',
        link: 'https://fvtvl-sports-wear.netlify.app/',
      },
      {
        id: 7,
        src: movie,
        code: 'https://github.com/Fvtvl/react-movie-db',
        link: 'https://fvtvl-movie-db.netlify.app',
      },
      {
        id: 8,
        src: fvtvlShop,
        code: 'https://github.com/Fvtvl/fullstack-react-mui-ecomm',
        link: 'https://fvtvl-shop.netlify.app/',
      },
    ];
  }, []);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pb-32"
    >
      <div className="max-w-screen-lg p-4 pt-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600  rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openInNewTab(link)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => openInNewTab(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
