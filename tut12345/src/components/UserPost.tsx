type Props = {
    promise: Promise<Post[]>
}

export default async function UserPost({promise}:Props){
    const posts = await promise

    const content = posts.map(post => {
        return(
            <article key={post.id}>
                <h1>{post.title}</h1>
                <br />
                <p>{post.body}</p>
                <br />
            </article>
        )
    })
    return content
}