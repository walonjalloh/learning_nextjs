import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostData } from "@/lib/post"
import { notFound } from "next/navigation"
import Link from "next/link"

export  function generateMetadata({ params}:{params : {postId:string}}){
    const posts =   getSortedPostData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post){
        return{
            title:`Post  Not found`
        }
    }

    return {
        title: post?.title
    }
}

export default async function Post({ params}:{params:{postId: string}}){
    
    const posts =  getSortedPostData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post){
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)
    const formattedDate = getFormattedDate(date)
    return(
        <main className="px-6">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{formattedDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html:contentHtml }}/>
                    <p>
                        <Link href='/'>Home</Link>
                    </p>
            </article>
        </main>
    )
}