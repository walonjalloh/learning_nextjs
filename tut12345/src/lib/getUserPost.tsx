import axios from "axios";

export default async function getUserPost(userId:string){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res.data){
        throw new Error('failed to fetch user post')
    }
    return res.data
}