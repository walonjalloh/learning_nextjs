import axios from "axios"

export default async function getAllUsers(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    if(!res.data){
        throw new Error('failed to fetch data')
    }
    return res.data
}