<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Blog</h1>

<div class="posts-wrapper">
    {#if data.posts && data.posts.length > 0}
        {#each data.posts as post}
            <div class="post">
                <a href={`/blog/${post.id}`}><h2>{post.title}</h2></a>
                <img src={`/blog/${post.id}/thumbnail.png`} alt={`Thumbnail for ${post.title}`} />
                <p>{post.subtitle}</p>
            </div>
        {/each}
    {:else}
        <p>No posts yet.</p>
    {/if}
</div>

<style lang="scss">
    .posts-wrapper {
        display: flex;
        flex-direction: row;
        padding: 0 2.5%;
        flex-wrap: wrap;
        gap: 1rem;
        .post {
            a {
                text-decoration: none;
            }
            img {
                width: 100%;
                object-fit: cover;
            }
            margin-bottom: 1rem;
            max-width: 45%;
            font-size: 1rem;
        }
    }
</style>
