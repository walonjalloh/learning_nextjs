import UserPost from "@/components/UserPost"
import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUser"
import { notFound } from "next/navigation"

type Params = {
  params:{
    userId:string
  }
}


export  async function generateMetadata({params:{userId}}:Params):Promise<Metadata>{
    const userData:Promise<UserType> = getUser(userId)
    const user:UserType = await userData

    if(!user.name){
        return{
            title:"User not found"
        }
    }

    return{
        title:user.name,
        description:`This is page of ${user.name}`
    }
}



export default async function UserPage({params:{userId}}:Params){
    const userData:Promise<UserType> =  getUser(userId)
    const userPostData:Promise<Post[]> =  getUserPost(userId)

    const user  = await userData

    if(!user?.name) notFound()

    return(
        <>
        <Link href='/'>Home</Link>
        <h2>{user.name}</h2>
        <Suspense fallback={<h2>Loading.....</h2>}>
             <UserPost promise={userPostData}/>
        </Suspense>
       
        </>
    )
}

export async function generateStaticParams(){
    const userData:Promise<UserType[]> = getAllUsers()
    const user = await userData

    return user.map(user => (
        {userId:user.id.toString()}
    ))
}