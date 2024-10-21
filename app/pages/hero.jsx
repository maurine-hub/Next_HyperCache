// import Header from '../components/header'
import {images} from '../lib/images'
// import {poppins} from '@next/font/google'
import Image from "next/image"

 function Hero (){
    return (
        <>
         <div className="bg-[#cc1616] h-auto w-full pt-56 pb-14 ">
           
            <div className="flex justify-around px-32 w-full">
                <div className='relative border-8 border-red-500 w-[40%] h-96 mt-20'>
                    <div className="bg-white w-full p-6 absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="uppercase font-bold text-[#cc1616] text-4xl leading-10">a great app makes your life better</h1>
                        <p className='py-8 text-neutral-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci doloremque perferendis molestias similique dolores, tempora dolor laborum ducimus qui aliquam a maiores quod nobis vitae eveniet, ea reiciendis voluptatem neque.</p>
                        <h1 className="uppercase font-semibold ">download app now</h1>
                        {/* <div className="flex">
                            <img src="https://e7.pngegg.com/pngimages/733/638/png-clipart-google-play-text-google-play-android-app-store-google-play-text-logo-thumbnail.png" alt="" />
                            <img src="https://e7.pngegg.com/pngimages/634/320/png-clipart-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo-thumbnail.png" alt="" />
                        </div> */}
                    </div>
                </div>

                <div className='w-1/2'>
                   <Image
                        src={images[3].src}
                        alt=''
                        width={990}
                        height={300}
                   />
                </div>
            </div>

            <div>
               
            </div>
         </div>
        </>
    )
}

export default Hero