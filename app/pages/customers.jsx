
"use client"

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import Image from 'next/image';
// import { images } from '../lib/images';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const Customers = () =>{
//   return (
//     <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
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
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="w-full h-full cinematic-swiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="swiper-slide" style={{width: '300px'}}>
//             <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
//               <Image 
//                 src={image.src}
//                 alt={image.alt || `Movie ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-all duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
//                 <h3 className="text-white text-xl font-bold">{image.title || `Movie ${index + 1}`}</h3>
//                 <p className="text-gray-300 text-sm">{image.description || 'Movie description'}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// export default Customers;

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { images } from '../lib/images';
import Image from 'next/image'; // Si vous utilisez next/image


export default function CustomSlider() {
  return (
    <div className='flex flex-col justify-center items-center mt-52 mb-20'>

        <div className='flex flex-col w-1/2 items-center pb-10' >
            <h1 className='uppercase font-semibold pb-6 text-3xl'>our happy customers</h1>
            <p className="font-meduim text-neutral-500 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore dolorum quia fugiat, debitis aliquam assumenda pariatur voluptatem facilis maxime laudantium perferendis exercitationem id cum laboriosam, in facere. Quae, voluptates?</p>
        </div>

        <div className="w-1/2 h-full">
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 0,
            stretch: -10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
        >
            {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
                <div className='flex flex-col items-center w-[90%] bg-[#f4f4f4] rounded-md shadow-md p-10'>
                    <Image
                        src={image.src}
                        alt={image.title}
                        width={80}
                        height={100}
                        className="rounded-full border-2 border-gray-200"
                    />
                    <h3 className='uppercase font-semibold pt-4 text-xl'>ann lubin</h3>
                    <h5 className='uppercase text-sm p-2'>co-founder</h5>
                    <p className='text-center text-sm text-neutral-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, architecto? Quod aliquid perferendis natus consequatur sit modi commodi et quae laboriosam, mollitia soluta magnam repudiandae reprehenderit consequuntur totam illo voluptas.</p>
                </div>
             
            
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
}
