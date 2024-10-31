
export default async function getWikiResults(searchTerm:string){

    const searchParams = new URLSearchParams({
        action:'query',
        generator:'search',
        gsrsearch: searchTerm,
        gsrlimit:'20',
        prop:'pageimages|extracts',
        exchars:'100',
        exintro:'true',
        explaintext:'true',
        exlimit:'max',
        format:'json',
        origin:'*'
    })

    const res  = await fetch(`https://en.wikipedia.org/w/api.php?${searchParams.toString()}`)

    if(!res.ok){
        throw new Error('An error occured')
    }
    const data = await res.json()
    console.log(data)
    
    return data
}