import Header from '../components/header'
// import Images from '../public/images'
// import {poppins} from '@next/font/google'


 function Hero (){
    return (
        <>
         <div className="bg-[#cc1616] h-auto w-full pt-56">
            {/* <Images color={red}/> */}
            <Header/>
            <div className="w-72  border-2 shadow-md">
                <h3>a great makes app you life bette</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium saepe, veniam voluptates veritatis quia illo aperiam qui alias blanditiis numquam dignissimos odio commodi atque explicabo iste voluptatum totam. Unde, tempore?</p>
                <div>
                    <p>dowload app now</p>
                    <div>
                        <button>app store</button>
                        <button>google play</button>                    
                    </div>
                </div>
            </div>

            <div>
               
            </div>
         </div>
        </>
    )
}

export default Hero