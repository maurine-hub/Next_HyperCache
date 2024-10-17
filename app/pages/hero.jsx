import Header from '../components/header'
// import Images from '../public/images'
// import {poppins} from '@next/font/google'


 function Hero (){
    return (
        <>
         <div className="bg-[#cc1616] h-auto w-full pt-56 ">
            {/* <Images color={red}/> */}
            <Header/>
            <div className="flex justify-between p-32">
                <div className='border-4 border-gray-300 w-72 h-24'>
                  <p>loreù</p>
                </div>

                <div>
                    <p>lorem</p>
                </div>
            </div>

            <div>
               
            </div>
         </div>
        </>
    )
}

export default Hero