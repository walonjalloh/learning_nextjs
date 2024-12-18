import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post:BlogPost
}

export default function List({ post }:Props){
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return(
        <li className="mt-4 text-2xl ">
            <Link className="underline" href={`/post/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}