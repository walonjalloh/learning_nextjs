import Link from "next/link"

export default function Home(){
  return(
    <div>
      <Link href='/about'>about</Link>
      <Link href='/user'>user</Link>
      Home
    </div>
  )
}