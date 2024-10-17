


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
//     <div className="w-full max-w-3xl mx-auto">
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
//               alt={`Slide ${index + 1}`}
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


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules'; // Importation des modules de Swiper
// import 'swiper/css'; // Importation des styles Swiper
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Image from 'next/image';

// export default function Checkout() {
//   const images = [
//     { src: '/images/image3.png', alt: 'Image 3' },
//     { src: '/images/second.png', alt: 'Second Image' },
//     { src: '/images/thirst.png', alt: 'Thirst Image' },
//     { src: '/images/fourth.png', alt: 'Fourth Image' }
//   ];

//   return (
//     <div className="w-full max-w-3xl mx-auto">
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


export default function Checkout(){
    return(
        <div>
            <div className="flex flex-col items-center p-16">
                <h1 className="uppercase font-semibold pb-6 text-3xl">Checkout our app interface look</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem soluta dicta culpa hic illum sint accusamus doloremque! Tenetur voluptates dolorem illo perspiciatis perferendis, quos corporis in ab consequuntur ducimus?</p>
            </div>
        </div>
    )
}