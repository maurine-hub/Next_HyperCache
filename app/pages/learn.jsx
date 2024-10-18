
const Learn = () =>{
    return (
        <div>
            <div className="  bg-[#cc1616] flex flex-col items-center p-16 text-white h-auto">
                <div className="flex flex-col text-center w-1/2 pb-28">
                    <h1 className="uppercase font-semibold pb-6 text-3xl">how use the app perfectly</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus maiores iusto, nisi aliquam quia error eligendi quasi, repellat reiciendis modi? Quo, odit ducimus amet illo sint ratione incidunt maiores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti ab ipsa veritatis libero.
                    </p>
                </div>
               <div className="relative w-full">
                    <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-[25%] rounded-md w-1/2">
                        <iframe
                            className="w-full h-64 rounded-md shadow-md" // Ajuste les dimensions selon tes besoins
                            src="https://youtu.be/KL_yIf5uiJo" // Remplace VIDEO_ID par l'ID de la vidéo
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

               </div>
            </div>
        </div>
    )
}

export default Learn;