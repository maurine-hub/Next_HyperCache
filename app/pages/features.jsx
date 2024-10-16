
import { FaReadme } from "react-icons/fa"
import Images from "../public/images"

const Features = ()=>{
    return(
        <div>
            <div className="bg-[#cc1616] flex flex-col items-center p-16 text-white">
                <div className="flex flex-col text-center w-1/2">
                    <h1 className="font-semibold pb-6 text-3xl">APP FEATURES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus maiores iusto, nisi aliquam quia error eligendi quasi, repellat reiciendis modi? Quo, odit ducimus amet illo sint ratione incidunt maiores.</p>
                </div>

                <div className="text-center py-10">
                    <FaReadme className="text-3xl w-96"/>
                    <h3 className="uppercase text-lg py-2">full free chat</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div>

                </div>

                <div className="container mx-auto px-10 py-2 flex  justify-between ">
                    <div className="flex flex-col w-72 items-end ">
                        <Images/>
                        <h1 className="py-3 text-lg">ISO & ANDROID VERSION</h1>
                        <p className="text-end text-[#ddd]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-start ">
                        <Images/>
                        <h1 className="py-3 text-lg">ISO & ANDROID VERSION</h1>
                        <p className=" text-[#ddd]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                   
                </div>

                <div className="container mx-auto px-10 pt-20 pb-2 flex  justify-between ">
                    <div className="flex flex-col w-72 items-end ">
                        <Images/>
                        <h1 className="py-3 text-lg">ISO & ANDROID VERSION</h1>
                        <p className="text-end text-[#ddd]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-start ">
                        <Images/>
                        <h1 className="py-3 text-lg">ISO & ANDROID VERSION</h1>
                        <p className=" text-[#ddd]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="text-center py-10">
                    <FaReadme className="text-3xl w-96"/>
                    <h3 className="uppercase text-lg py-2">full free chat</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default Features;