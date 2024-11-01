import Image from "next/image"
import walon from '../images/walon.jpg'

export default function Profile(){
    return(
        <section className="w-full flex flex-row items-center justify-center mx-auto">
            <Image 
            src={walon}
            alt="Walon"
            width={200}
            height={200}
            priority={true}
            className="rounded-full items-center h-50 w-50 flex flex-row justify-center border-4 border-black mx-auto mt-8 drop-shadow-xl"
            />
        </section>
    )
}