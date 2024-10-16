
import { FaCheckCircle } from "react-icons/fa"

function About (){
    return( 
        <>
            <div className="flex flex-col items-center mx-32 py-16">
                <div className="flex flex-col text-center w-1/2">
                    <h1 className="font-semibold pb-10 text-3xl">ABOUT OUR APP</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, modi eveniet esse iure placeat amet asperiores ducimus harum soluta praesentium alias atque velit laudantium quis nemo earum voluptas possimus enim.</p>

                </div>

                <div className="flex mx-32 py-14 justify-between">
                    <div>
                        <img src="" alt="" />
                    </div>

                    <div className="flex flex-col w-1/2 ">
                        <div className="p-3 shadow-md rounded-md">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">creative design</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About