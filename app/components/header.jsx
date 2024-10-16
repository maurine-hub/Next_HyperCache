// import {FaMail, FaPhone, FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'

// export function Header (){
//     return (
        
//         <div className="navbar">
//             <div>
//                 <div>
//                     <FaMail/>
//                     <p>exemple@gmail.com</p>
//                 </div>
//                 <div>
//                     <FaPhone/>
//                     <p>XXX XXX XXX</p>
//                 </div>
//             </div>
//             <div className='icons'>
//             <FaFacebook/>
//             <FaFacebook/>
//             <FaTwitter/>
//             <FaYoutube/>
//             </div>

//         </div>
//     );
// }


import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaMailBulk, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="absolute top-5 left-0 right-0 z-50 mx-24 ">
      <div className="flex bg-transparent p-4 items-center justify-between">

        <div className='flex  space-x-4 '>
          <div className='flex items-center text-white'>
            <FaMailBulk/>
            <p>exemple@gmail.com</p>
          </div>
          <div className='flex items-center text-white'>
            <FaPhone/>
            <p>xxx xxx xxx</p>
          </div>
        </div>

        <div className="flex space-x-4 text-white">
          <FaFacebook/>
          <FaTwitter/>
          <FaTwitter/>
          <FaYoutube/>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-2">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between list-none">
          <nav>
            <ul className="flex space-x-4 uppercase text-black font-semibold ">
              <li><Link href="/" className="text-orange-500 underline hover:text-orange-500  decoration-orange-500 ">home</Link></li>
              <li><Link href="/about" className=" hover:underline">about</Link></li>
              <li><Link href="/features" className=" hover:underline">features</Link></li>
            </ul>
          </nav>
          <nav className='flex items-center'>
            <ul className="flex space-x-4 uppercase text-black font-semibold pr-6">
              <li><Link href="/screenshot" className="hover:text-gray-900">Screenshot</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>  
            </ul>
            <button className='bg-orange-500 py-2 px-6 rounded-md text-white uppercase font-semibold'>download</button>
          </nav>
        </div>
      </div>

      <div className="w-36 absolute top-11 left-[35rem] bg-white py-7 px-12 shadow-md rounded-md text-2xl font-bold">LOGO</div>

    </header>

    
  );
};

export default Header