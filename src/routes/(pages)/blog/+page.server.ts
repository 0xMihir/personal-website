import fs from 'fs/promises';
import fm, { type FrontMatterResult } from 'front-matter';
import type { PageServerLoad } from './$types';

export type Post = {
    title: string;
    subtitle: string;
    date: string;
    published: boolean;
    author?: string;
};

export const load = (async () => {
    let postFiles: string[] = [];
    try {
        postFiles = await fs.readdir('blog/posts');
    } catch (err) {
        fs.mkdir('blog/posts', { recursive: true });
    }
    const posts = [];

    for await (const post of postFiles) {
        try {
            const file = await fs.readFile(`blog/posts/${post}/post.md`, 'utf-8');
            const frontmatter: FrontMatterResult<Post> = fm(file);
            const attr = frontmatter.attributes;

            if (attr.published && attr.title != undefined && attr.subtitle != undefined) {
                posts.push({
                    title: attr.title,
                    subtitle: attr.subtitle,
                    date: attr.date,
                    id: post,
                    
                });
            }
        } catch (err) {
            return 
        }
    }

    return {
        posts: posts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
    };
}) satisfies PageServerLoad;
