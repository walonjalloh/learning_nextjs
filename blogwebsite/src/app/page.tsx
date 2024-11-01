import Post from "@/components/Post";

export default function Home(){
  return(
    <main className="flex items-center flex-col justify-center mt-10 text-lg">
      <p>Hello and Welcome <span>
        I&#39;m</span> <span className="font-extrabold">Walon❤️</span></p>

        <Post/>
    </main>
  )
}