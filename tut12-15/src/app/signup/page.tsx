'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState } from "react"


export default function SignUp(){
    const [user, setUser] = useState({
        email: '',
        username:'',
        password:'',
    })

    const onSignup = async():Promise<void> => {

    }

    return(
        <section className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">Signup</h1>
            <hr />
            <div className="">
                <form action="" className="flex flex-col w-full items-start gap-1 justify-center">
                    <label htmlFor="username" 
                    className="font-bold"
                    >Username: </label>
                    <input type="text" id='username'
                    value={user.username}
                    onChange={(e)=>setUser({...user, username:e.target.value})}
                    required 
                    className="border-2 border-black max-w-[500px] rounded-md py-1 px-2 "
                     />
                    <label htmlFor="email" className="font-bold">Email</label>
                    <input type="email" value={user.email} 
                    onChange={(e)=>setUser({...user, email:e.target.value})}
                    id="name" required
                    className="border-2 border-black max-w-[500px] rounded-md py-1 px-2 "
                    />
                    <label htmlFor="password" className="font-bold">password</label>
                    <input type="password" 
                    value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    id="password" required
                    className="border-2 border-black max-w-[500px] rounded-md py-1 px-2 " 
                    />
                    <div className="flex justify-center items-center text-center">
                        <button onClick={onSignup}
                        className="border-2 border-blue-500 bg-blue-500 text-white px-6 py-1 rounded-md font-bold mt-2"
                        >sign up</button>
                    </div>
                    
                </form>
                <Link href='/login'><h2 className="text-blue-500 font-bold text-center">or login to an existing account</h2></Link>
            </div>
        </section>
    )
}