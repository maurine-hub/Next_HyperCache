
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import {images} from '../lib/images'

function About (){
    return( 
        <>
            <div className="flex flex-col items-center mx-32 py-16" id="about">
                <div className="flex flex-col text-center w-1/2">
                    <h1 className="font-bold pb-6 text-3xl text-neutral-800">ABOUT OUR APP</h1>
                    <p className="font-meduim text-neutral-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, modi eveniet esse iure placeat amet asperiores ducimus harum soluta praesentium alias atque velit laudantium quis nemo earum voluptas possimus enim.</p>

                </div>

                <div className="flex py-14 justify-between">
                    <div className="w-1/2">
                          <Image
                                src= {images[0].src} // Chemin relatif à partir de /public
                                alt=""
                                width={500}
                                height={300}
                            />
                            {/* <img src="https://e7.pngegg.com/pngimages/188/225/png-clipart-gold-iphone-8-and-8-plus-iphone-8-iphone-x-iphone-4-smartphone-t-mobile-iphone-x-mobile-phone-gadget-electronics-thumbnail.png" alt="" /> */}
                    </div>

                    <div className="flex flex-col w-1/2 ">
                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">creative design</h3>
                            </div>
                            <p className="text-base  text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                        </div>

                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">creative design</h3>
                            </div>
                            <p className="text-base  text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                        </div>

                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">creative design</h3>
                            </div>
                            <p className="text-base  text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About