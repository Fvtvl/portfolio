import React from 'react';
import webstudio from '../assets/portfolio/webstudio.jpg';
import fetch from '../assets/portfolio/pokes-api.jpg';
import reactPokes from '../assets/portfolio/ReactPokes.jpg';
import reactBattle from '../assets/portfolio/ReactBattle.jpg';

const Portfolio = () => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    const portfolios = [
        {
            id: 1,
            src: webstudio,
            link: 'https://fvtvl.github.io/webstudio/',
            code: 'https://github.com/Fvtvl/webstudio',
        },
        {
            id: 2,
            src: reactPokes,
            link: 'https://beamish-stroopwafel-97a890.netlify.app/',
            code: 'https://github.com/Fvtvl/react-pokes',
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
    ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 pt-16 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold  inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out of my work right here</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({ id, src, link, code })=> 
            <div key={id} className='shadow-md shadow-gray-600  rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button onClick={() => openInNewTab(link)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button onClick={() => openInNewTab(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            )}
            </div>
            <a href=''></a>
        </div>

    </div>
  )
};

export default Portfolio;