import fs from 'fs/promises';
import { error } from '@sveltejs/kit';
import fm, { type FrontMatterResult } from 'front-matter';
import type { PageServerLoad } from './$types';
import type { Post } from '../+page.server';
import { marked } from 'marked';

export const load = (async ({ params }) => {
    try {
        const file = await fs.readFile(`blog/posts/${params.id}/post.md`, 'utf-8');
        const frontmatter: FrontMatterResult<Post> = fm(file);
        const md = marked(frontmatter.body);
        const attr = frontmatter.attributes;
        if (attr.published == false) throw error(404, 'Post not found');
        return {
            title: attr.title,
            subtitle: attr.subtitle,
            date: attr.date,
            content: md,
            author: attr.author || 'Mihir Patil',
            id: params.id
        };
    } catch (err) {
        throw error(404, 'Post not found');
    }
}) satisfies PageServerLoad;
