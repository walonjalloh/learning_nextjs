import mongoose from "mongoose";

export async function connectDB(){
    console.log('MongoDB connetion with retry')
    try{
        mongoose.connect(process.env.DATABASE_URI!,{
        })
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('connected to MongoDB')
        })
        connection.on('error',(err)=>{
            console.log(err)
            process.exit()
        })
    }catch(error){
        console.log(error)
        setTimeout(()=>{
            connectDB()
        },5000)
    }
}