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

export async function getPostData(id: string): Promise<BlogPost & { contentHtml: string }> {
    const fullpath = path.join(postsDirectory, `${id}.md`);

    // Check if the file exists before reading it
    if (!fs.existsSync(fullpath)) {
        throw new Error(`Post with id "${id}" not found.`);
    }

    const fileContext = fs.readFileSync(fullpath, 'utf8');
    const matterResult = matter(fileContext);

    // Ensure the content is present
    if (!matterResult.content) {
        throw new Error(`No content found for post "${id}".`);
    }

    const processContext = await remark().use(html).process(matterResult.content);
    const contentHtml: string = processContext.toString();

    const blogPostWithHtml: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    };

    // Ensure title and date are defined
    if (!blogPostWithHtml.title || !blogPostWithHtml.date) {
        throw new Error(`Missing title or date for post "${id}".`);
    }

    return blogPostWithHtml;
}