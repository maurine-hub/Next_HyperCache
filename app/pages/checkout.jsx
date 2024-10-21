
"use client"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Importation des modules de Swiper
// import 'swiper/css'; // Importation des styles Swiper
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Image from 'next/image';
// // import images from 'images'
// import {images} from '../lib/images'

// export default function Checkout() {

//   return (
//     <div>
      // <div className="flex flex-col items-center p-16 mx-32">
      //       <div className="flex flex-col text-center w-1/2">
      //           <h1 className="uppercase font-semibold pb-6 text-3xl">Checkout our app interface look</h1>
      //           <p className="font-meduim text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem soluta dicta culpa hic illum sint accusamus doloremque! Tenetur voluptates dolorem illo perspiciatis perferendis, quos corporis in ab consequuntur ducimus?</p>
      //       </div>

      // </div>
//       <div className="w-64 max-w-3xl mx-auto">
//         <Swiper
//           modules={[Navigation, Pagination]} // Active les modules nécessaires
//           navigation // Active les chevrons pour la navigation
//           pagination={{ clickable: true }} // Active la pagination (cercles en bas)
//           loop={true} // Permet de boucler les images
//           spaceBetween={50} // Espace entre les slides
//           slidesPerView={1} // Nombre de slides à afficher
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={image.src}
//                 alt={`Slide ${index + 1}`}
//                 width={500}
//                 height={300}
//                 className="w-full h-64 object-cover rounded-md"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Importation des modules de Swiper
// // import 'swiper/css'; // Importation des styles Swiper
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// import Image from 'next/image';

// export default function Checkout() {
//   const images = [
//     { src: '/images/image3.png', alt: 'Image 3' },
//     { src: '/images/second.png', alt: 'Second Image' },
//     { src: '/images/thirst.png', alt: 'Thirst Image' },
//     { src: '/images/fourth.png', alt: 'Fourth Image' }
//   ];
  
//   return (
//     <div className="w-full max-w-3xl mx-auto bg-slate-500">
//       <Swiper
//         modules={[Navigation, Pagination]} // Active les modules nécessaires
//         navigation // Active les chevrons pour la navigation
//         pagination={{ clickable: true }} // Active la pagination (cercles en bas)
//         loop={true} // Permet de boucler les images
//         spaceBetween={50} // Espace entre les slides
//         slidesPerView={1} // Nombre de slides à afficher
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={500}
//               height={300}
//               className="w-full h-64 object-cover rounded-md"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="w-1/2 mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import { images } from '../lib/images';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// export default function Checkout() {

//   return (
//     <div className="relative w-full h-[500px]">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination]}
//         className="w-full h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div className="relative w-full h-full">
//               <Image 
//                 src={image.src}
//                 alt={`Nature ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-all duration-300"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import { images } from '../lib/images';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// export default function App() {


//   return (
//     <div className="relative w-full h-[500px]">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination]}
//         className="w-[75%] h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="swiper-slide">
//             <div className="relative w-full h-full">
//               <Image 
//                 src={image.src}
//                 alt={`Nature ${index + 1}`}
//                 width={500}
//                 height={300}
//                 className="transition-all duration-300"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { images } from '../lib/images';

import { FaDownload, FaStar, FaGoodreads } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  return (
    <div className="flex flex-col items-center p-20 ">
      
      <div className="flex flex-col text-center w-1/2">
          <h1 className="uppercase font-bold pb-6 text-3xl text-neutral-700">Checkout our app interface look</h1>
          <p className="font-meduim text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem soluta dicta culpa hic illum sint accusamus doloremque! Tenetur voluptates dolorem illo perspiciatis perferendis, quos corporis in ab consequuntur ducimus?</p>
      </div>


      <div className="relative w-full h-[500px] mt-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-[90%] h-full mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="relative w-full h-full">
                <Image 
                  src={image.src}
                  alt={`Nature ${index + 1}`}
                  width={500}
                  height={300}
                  className="transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='flex pt-8 w-full '>
          <div className='flex flex-col w-1/2'>
            <h1 className='uppercase font-bold text-3xl text-neutral-700'>download app now</h1>
            <p className='text-lg font-meduim text-neutral-500 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde adipisci eligendi soluta tenetur quia fugit iste minus nihil laborum quas rem voluptates eaque alias, ducimus, suscipit autem blanditiis quasi.</p>
            <div className='flex'>
              <Image
                src={images[5].src}
                alt=''
                width={150}
                height={300}
              />
              <Image
                src={images[4].src}
                alt=''
                width={150}
                height={300}
              />
            </div>

            
          <div className='flex pt-8 justify-between w-[80%]'>
            <div className='flex flex-col bg-[#cc1616] text-white p-6 rounded-md shadow-md items-center'>
              <FaDownload className='text-3xl'/>
              <p className='text-xl py-2 '> 4598743</p>
              <p className='font-mediim uppercase text-xl'>download</p>
            </div>
            <div className='flex flex-col bg-[#cc1616] text-white p-6 rounded-md shadow-md items-center'>
              <FaDownload className='text-3xl'/>
              <p className='text-xl py-2 '> 4598743</p>
              <p className='font-mediim uppercase text-xl'>download</p>
            </div>
            <div className='flex flex-col bg-[#cc1616] text-white p-6 rounded-md shadow-md items-center'>
              <FaDownload className='text-3xl'/>
              <p className='text-xl py-2 '> 4598743</p>
              <p className='font-mediim uppercase text-xl'>download</p>
            </div>

          </div>
          </div>

          <div className='w-[40%] ml-28'>
            <Image
              src={images[3].src}
              alt=''
              width={400}
              height={300}
            />
          </div>

      </div>
    </div>
    
  );
}