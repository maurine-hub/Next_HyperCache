
import { FaReadme } from "react-icons/fa"
import Images from "../public/images"
import Image from 'next/image'
import {images} from '../lib/images'

const Features = ()=>{
    return(
        <div id="features">
            <div className="relative bg-[#cc1616] flex flex-col items-center p-16 text-white">
                <div className="flex flex-col text-center w-1/2">
                    <h1 className="font-bold pb-6 text-3xl text-white">APP FEATURES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus maiores iusto, nisi aliquam quia error eligendi quasi, repellat reiciendis modi? Quo, odit ducimus amet illo sint ratione incidunt maiores.</p>
                </div>

                <div className="flex flex-col items-center py-10 w-80 h-80 ">
                    <FaReadme className="text-4xl w-96"/>
                    <h3 className="uppercase text-lg py-3">full free chat</h3>
                    <p className="text-base text-center text-[#f2f2f2]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="relative w-full ">
                <Image
                    src={images[1].src} // Chemin relatif à partir de /public
                    alt="Description de l'image"
                    width={800}
                    height={500}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[25%] p-6 " // Optionnel : arrondir les bords de l'image
                />
                </div>

                <div className="container mx-auto px-10 pb-28 w-[85%] flex  justify-between ">
                    <div className="flex flex-col w-72 items-end ">
                        <Images/>
                        <h1 className="py-3 text-xl">ISO & ANDROID VERSION</h1>
                        <p className="text-base text-end text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-start ">
                        <Images/>
                        <h1 className="py-3 text-xl">ISO & ANDROID VERSION</h1>
                        <p className=" text-base text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                   
                </div>

                <div className="container px-10 pb-28 w-[85%] flex  justify-between ">
                    <div className="flex flex-col w-72 items-end ">
                        <Images/>
                        <h1 className="py-3 text-xl">ISO & ANDROID VERSION</h1>
                        <p className="text-base text-end text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-start ">
                        <Images/>
                        <h1 className="py-3 text-xl">ISO & ANDROID VERSION</h1>
                        <p className=" text-base text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center w-80 ">
                    <FaReadme className="text-4xl w-96"/>
                    <h1 className="uppercase text-xl py-3">full free chat</h1>
                    <p className="text-base text-center text-[#f2f2f2]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default Features;