import { getSortedPostData } from "@/lib/post";
import List from "./List";

export default  function Post(){
    const post =  getSortedPostData()
    
    return(
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl text-center">
                Blog
            </h2>
            <ul className="w-full">
                {post.map(post => (
                <List key={post.id} post={post}/>
                ))}
            </ul>
        </section>
    )
}