import Image from "next/image"
import Link from "next/link"

type Props = {
    result:Result
}

export default function Item({ result }: Props):JSX.Element {
  const itemCol =  (
    <div className="flex flex-col justify-center">
        <h2>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
            className="text-xl "
            >
                {result.title}
            </Link>
        </h2>
        <p>{result.extract}</p>
    </div>
  )

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
        <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-center">
                <Image src={result.thumbnail.source} alt={result.title}  
                height={result.thumbnail.height}
                width={result.thumbnail.width}
                loading="lazy"
                />
            </div>
            {itemCol}
        </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">
        {itemCol}
    </article>
  )

  return content
}
