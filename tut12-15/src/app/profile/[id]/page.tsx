type params = {
    params : {
        id:string
    }
}

export default async function UserProfile({params}:params){
    const { id } = await params
    return(
        <div className="flex flex-col min-h-screen items-center justify-center ">
            <h1 className="text-3xl">Profile</h1>
            <hr />
            <p>Profile page: {id}</p>
        </div>
    )
}