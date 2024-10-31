'use client'

import { useEffect } from "react";
import Link from "next/link";

export default function Error({error, reset}: {
    error:Error;
    reset:()=>void
}){
    useEffect(() => {
        console.error(error)
    },[error])

    return(
        <main>
            <h2>Something went wrong</h2>
            <button onClick={()=> reset()}>try again</button>
            <p><Link href='/'>or go back home</Link></p>
        </main>
    )
}