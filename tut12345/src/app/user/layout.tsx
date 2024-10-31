import type { Metadata } from "next"

export const metadata:Metadata = {
    title:'Users'
}

interface PropType {
    children:React.ReactNode
}

export default function layout({children}:PropType){
    return(
        <div>
        {children}
        </div>
    )
}