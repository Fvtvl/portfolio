import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useMemo } from 'react';

const ContactLinks = React.memo(() => {
  const links = useMemo(() => {
    return [
      {
        id: 1,
        child: <FaLinkedin size={25} />,
        href: 'https://www.linkedin.com/in/fvtvlnight/',
        style: 'rounded-tr-md',
      },
      {
        id: 2,
        child: <FaGithub size={25} />,
        href: 'https://github.com/Fvtvl',
      },
      {
        id: 3,
        child: <HiOutlineMail size={25} />,
        href: 'mailto:fvtvlnight@gmail.com',
      },
      {
        id: 4,
        child: <BsFillPersonLinesFill size={25} />,
        href: '/Eduard_Haponov_CV (React).pdf',
        style: 'rounded-br-md',
        download: true,
      },
    ];
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-2 mx-auto w-4/5 gap-6">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              'flex items-center justify-center rounded-full shadow-md shadow-white p-2 cursor-pointer lg:hidden'
            }
          >
            <a href={href} download={download} target="_blanc" rel="noreferer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ContactLinks;
