'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState } from "react"


export default function Login(){
    const [user, setUser] = useState({
        email: '',
        password:'',
    })

    const onLogin = async():Promise<void> => {

    }

    return(
        <section className="flex flex-col justify-center  items-center min-h-screen w-full py-2">
            <h1 className="text-4xl font-bold">Login</h1>
            <hr />
            <div className="flex flex-col w-full items-center justify-center">
                <form action="" className="flex flex-col w-full items-start gap-1 justify-center">
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input type="email" value={user.email} 
                    onChange={(e)=>setUser({...user, email:e.target.value})}
                    id="name" required
                    className="border-2 border-black w-full rounded-md py-1 px-2 "
                    />
                    <label htmlFor="password" className="font-bold">password</label>
                    <input type="password" 
                    value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    id="password" required
                    className="border-2 border-black w-full rounded-md py-1 px-2 " 
                    />
                    <div className="flex flex-row  justify-center items-center text-center">
                        <button onClick={onLogin}
                        className="border-2 border-blue-500 w-full bg-blue-500 text-white px-6 py-1 rounded-md font-bold mt-2"
                        >sign up</button>
                    </div>
                    
                </form>
                <Link href='/signup'><h2 className="text-blue-500 font-bold text-center">or create an account</h2></Link>
            </div>
        </section>
    )
}