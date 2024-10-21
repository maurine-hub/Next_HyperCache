import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = ()=>{
    return(
        <>
            <div className="relative w-full bg-[#6c1010] mt-64">

                <div className="shadow flex absolute w-[90%] bottom-[85%] bg-white rounded-3xl mx-16 p-14 justify-between  ">
                    <div className="flex items-center">
                        <div className="mr-10 rounded-full bg-[#cc1616] p-8 text-white">
                            <FaEnvelope className=" text-white text-3xl"/>
                        </div>
                        <p className="text-3xl font-semibold">exemple@gmail.com</p>
                    </div>
                    <div className="flex items-center border-l-4 border-gray-600">
                        <div className="mx-10 rounded-full bg-[#cc1616] p-8 text-white">
                            <FaPhone className=" text-white text-3xl"/>
                        </div>
                        <p className="text-3xl font-semibold">exemple@gmail.com</p>
                    </div>
                    
                </div>
                
                <div className="flex w-full px-32 pt-44 pb-10 text-white ">
                    <div className="flex justify-between">
                        <div className="w-[28%]">
                            <h1 className="uppercase text-3xl pb-3">logo</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit perspiciatis nam quae explicabo ?</p>
                            <div className="flex justify-between w-3/5 mt-6">
                                <FaEnvelope className="border-r-2 border-white text-2xl  "/>
                                <FaEnvelope className="border-r-2 border-white text-2xl pr-2"/>
                                <FaEnvelope className="border-r-2 border-white text-2xl pr-2"/>
                                <FaEnvelope className="text-2xl "/>
                            </div>

                        </div>
                        <div className="w-[32%]">
                            <h1 className="uppercase text-3xl pb-3">quick link</h1>
                            <p className="capitalize text-lg pb-3">about</p>
                            <p className="capitalize text-lg pb-3">Features</p>
                            <p className="capitalize text-lg pb-3">Screenshot</p>
                        </div>
                        <div className="w-[32%]">
                            <h1 className="uppercase text-3xl pb-3">news letter</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <form action="" className="bg-white mt-8 rounded-md ">
                                <input type="text"
                                 placeholder="Your email address" 
                                 className="placeholder-neutral-500 p-3"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-white p-6 mx-32">
                    <p className="text-center text-white text-lg">@ copyright 2024. Ipercash. All Right Reserved</p>
                </div>
              
            </div>
        </>
    )

}

export default Footer;