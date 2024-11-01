import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory:string = path.join(process.cwd(), 'src', 'blogpost')

export function getSortedPostData():BlogPost[]{
    const fileNames = fs.readdirSync(postsDirectory)

    const allpostData:BlogPost[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')

        const fullpath = path.join(postsDirectory, fileName)
        const fileContext = fs.readFileSync(fullpath, 'utf-8')

        const matterResult = matter(fileContext)

        const blogPost:BlogPost = {
            id,
            title:matterResult.data.title,
            date:matterResult.data.date
        }

        return blogPost
    })
    return allpostData.sort((a,b) => a.date < b.date ? 1 : -1)
}

export async function getPostData(id:string){
    const fullpath = path.join(postsDirectory, `${id}.md`)
    const fileContext = fs.readFileSync(fullpath, 'utf8')

    const matterResult = matter(fileContext)

    const processContext = await remark().use(html).process(matterResult.content)

    const contentHtml:string = processContext.toString()

    const blogPostWithHtml:BlogPost & { contentHtml: string} = {
        id,
        title:matterResult.data.title,
        date:matterResult.data.date,
        contentHtml
    }

    return blogPostWithHtml
}