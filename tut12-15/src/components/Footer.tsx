export default function Footer(){
    const year = new Date().getFullYear()
    return(
        <footer>
            <p className="text-center font-bold">Walon &copy;{year}</p>
        </footer>
    )
}