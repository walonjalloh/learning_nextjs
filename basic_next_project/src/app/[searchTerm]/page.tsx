import getWikiResults from "@/libs/getWikiResult"
import Item from "./components/item"

type props =  {
    params: {
        searchTerm:string
    }
}

//dynamic meta data
export async function generateMetadata( { params }: props){
    const { searchTerm } =   params
    const wikiData:Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = decodeURIComponent(searchTerm.replaceAll('%20', ' '))

    if(!data.query?.pages){
        return{
            title: `${displayTerm} Not found`
        }
    }

    return {
        title: displayTerm,
        description: `Search result for ${displayTerm}`
    }
}

export default async function SearchResult({params}:props){
    const { searchTerm } =  params
    const wikiData:Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results:Result[] | undefined  = data?.query?.pages ? Object.values(data.query.pages) : undefined

    const content = (
        <main className="flex flex-col min-h-screen">
            { results ? (
                results.map((result) => (
                    <Item key={result.pageid} result={result}/>
                ))
            ) : (
                <p>
                    nothing found
                </p>
            )}
        </main>
    )
    return content
}
