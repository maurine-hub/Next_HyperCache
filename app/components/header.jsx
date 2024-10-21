

// import React from 'react';
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
// import {images} from '../lib/images'
// import Image from 'next/image';

// const Header = () => {
//   return (
//     <header className="absolute top-5 left-0 right-0 z-50 mx-24 ">
//       <div className="flex bg-transparent p-4 items-center justify-between">

//         <div className='flex  justify-between w-[30%] text-xl '>
//           <div className='flex items-center text-white'>
//             <FaEnvelope/>
//             <p className='ml-3 text-lg'>exemple@gmail.com</p>
//           </div>
//           <div className='flex items-center text-white'>
//             <FaPhone/>
//             <p className='ml-3 text-lg'>xxx xxx xxx</p>
//           </div>
//         </div>

//         <div className="flex  justify-between w-[15%] text-white text-xl">
//           <FaFacebook/>
//           <FaTwitter/>
//           <FaTwitter/>
//           <FaYoutube/>
//         </div>
//       </div>
//       <div className="bg-white shadow-md rounded-md p-2">
//         <div className="container mx-auto px-4 py-2 flex items-center justify-between list-none">
//           <nav>
//             <ul className="flex space-x-4 uppercase text-black font-semibold ">
//               <li className="text-[#cc1616] underline hover:text-orange-500  decoration-[#cc1616] "><Link href="/" >home</Link></li>
//               <li><Link href="#about" className=" hover:decoration-[#cc1616] text-[#cc1616] ">about</Link></li>
//               <li><Link href="#features" className=" hover:underline">features</Link></li>
//             </ul>
//           </nav>
//           <nav className='flex items-center'>
//             <ul className="flex space-x-4 uppercase text-black font-semibold pr-6">
//               <li><Link href="/screenshot" className="hover:text-gray-900">Screenshot</Link></li>
//               <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>  
//             </ul>
//             <button className='bg-[#cc1616] py-2 px-6 rounded-md text-white uppercase font-semibold'>download</button>
//           </nav>
//         </div>
//       </div>

//       <Link href="/" >
//       <div className="w-44 absolute top-0 transform translate-y-1/2  left-[32rem] bg-white py-6 px-3 shadow-xl rounded-md ">
//       <Image
//        src={images[6].src}
//        alt=''
//        width={500}
//        height={300}
       
//       />
//       </div>
//       </Link>

//     </header>

    
//   );
// };

// export default Header


'use client'

'use client'; // Indiquer que ce composant est un composant client

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { images } from '../lib/images';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // Fonction pour mettre à jour l'ancre active
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Écouteur pour détecter les changements d'ancre
    window.addEventListener('hashchange', handleHashChange);

    // Vérifier l'ancre initiale si l'utilisateur arrive directement avec une ancre
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fonction pour appliquer les classes conditionnelles
  const linkClasses = (path, hash = '') =>
    pathname === path && activeHash === hash
      ? 'text-[#cc1616] underline decoration-[#cc1616]'
      : 'hover:text-orange-500';

  return (
    <header className="absolute top-5 left-0 right-0 z-50 mx-24">
      <div className="flex bg-transparent p-4 items-center justify-between">
        <div className="flex justify-between w-[30%] text-xl">
          <div className="flex items-center text-white">
            <FaEnvelope />
            <p className="ml-3 text-lg">exemple@gmail.com</p>
          </div>
          <div className="flex items-center text-white">
            <FaPhone />
            <p className="ml-3 text-lg">xxx xxx xxx</p>
          </div>
        </div>

        <div className="flex justify-between w-[15%] text-white text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-2">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between list-none">
          <nav>
            <ul className="flex space-x-4 uppercase text-black font-semibold">
              <li className={linkClasses('/')}>
                <Link href="/">home</Link>
              </li>
              <li className={linkClasses('/', '#about')}>
                <Link href="#about">about</Link>
              </li>
              <li className={linkClasses('/', '#features')}>
                <Link href="#features">features</Link>
              </li>
            </ul>
          </nav>
          <nav className="flex items-center">
            <ul className="flex space-x-4 uppercase text-black font-semibold pr-6">
              <li className={linkClasses('/screenshot')}>
                <Link href="/screenshot">Screenshot</Link>
              </li>
              <li className={linkClasses('/contact')}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <button className="bg-[#cc1616] py-2 px-6 rounded-md text-white uppercase font-semibold">
              download
            </button>
          </nav>
        </div>
      </div>

      <Link href="/">
        <div className="w-44 absolute top-0 transform translate-y-1/2 left-[32rem] bg-white py-6 px-3 shadow-xl rounded-md">
          <Image src={images[6].src} alt="" width={500} height={300} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
