export default function Footer(){
    const year:string = new Date().getFullYear().toString()
    return(
        <footer className="flex items-center justify-center">
            <div className="text-center font-thin text-lg">
                <p>All right reserved <span className="font-bold">Walon❤️</span> &copy;{year}</p>
            </div>
        </footer>
    )
}