import fs from 'fs/promises';
import { error } from '@sveltejs/kit';
import fm, { type FrontMatterResult } from 'front-matter';
import type { PageServerLoad } from './$types';
import type { Post } from '../+page.server';
import { marked, Renderer } from 'marked';

export const prerender = true;

export async function entries() {
    try {
        const dirs = await fs.readdir('blog/posts');
        return dirs.map((id) => ({ id }));
    } catch {
        return [];
    }
}

export const load = (async ({ params }) => {
    try {
        const file = await fs.readFile(`blog/posts/${params.id}/post.md`, 'utf-8');
        const frontmatter: FrontMatterResult<Post> = fm(file);
        const renderer = new Renderer();

        renderer.image = (href: string, title: string | null, text: string): string => {
            return `</p><div class="image-wrapper">
                        <img src="/blog/${params.id}/${href}" alt="${title || text || 'Image'}" title="${
                            title || text || 'Image'
                        }" />
                        <span class="image-caption">${text}</span>
            </div><p>`;
        };

        renderer.link = (
            href: string,
            title: string | null | undefined,
            text: string
        ): string => {
            return `<a href="${href}" title="${title || text}" target="_blank">${text}</a>`;
        };

        const md = marked.parse(frontmatter.body, { renderer }) as string;

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
