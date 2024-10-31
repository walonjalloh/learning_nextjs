'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search(){
    const [search, setSearch] = useState<string>('')
    const router = useRouter()

    const handleSumbit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
    return(
        <form onSubmit={handleSumbit}
        className="flex w-full flex-row items-center gap-2 justify-start "
        >
            <input type="text" required value={search} onChange={(e)=> setSearch(e.target.value)}
            placeholder="search"
            className="border-2 border-black/50 w-full px-2 py-2 rounded-md"
            />
            <button className="border-2 px-6 py-2 border-blue-400 font-bold bg-blue-400 rounded-xl text-white text-lg">
                search
            </button>
        </form>
    )
}