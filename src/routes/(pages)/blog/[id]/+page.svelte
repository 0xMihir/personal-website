<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="header">
    <h1>{data.title}</h1>
    <span>{data.subtitle}</span>
    <div class="author-date">
        <h2>
            {data.author}
        </h2>
        <span>/</span>
        <h2>{data.date}</h2>
    </div>
    <div class="thumbnail-wrapper">
        <img src={data.id + '/thumbnail.png'} alt="Thumbnail" />
    </div>
</div>

<div class="divider" />

<div class="post-content">
    {@html data.content}
</div>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: column;
        padding: 0 96px;

        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.2rem;
            font-family: 'IBM Plex Sans';
        }
        .author-date {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            margin: 0.5rem auto;

            * {
                margin: 0 1rem;
            }

            h2 {
                margin: 0;
            }
        }
        span {
            font-size: 1.2rem;
            font-style: italic;
            font-weight: 400;
            color: #aaa;
        }
        .thumbnail-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem auto;
            img {
                height: 500px;
                object-fit: cover;
            }
        }
        
    }
    .divider {
        margin: 1rem 0;
        border-bottom: 1px solid #eee;
    }
    .post-content {
        padding: 0 200px;
        :global(p) {
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 0;
            color: #ddd;
            
        }
        :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
            font-family: 'IBM Plex Sans';
            font-size: 1.5em;
            color: #ddd;
        }
        :global(.image-wrapper) {
            width: 100%;
            margin: 24px auto;
            display: flex;
            justify-content: center;
            flex-flow: column;
            align-items: center;
            :global(img) {
                width: 80%;
                object-fit: cover;
            }
            :global(span) {
                font-size: 0.8rem;
                margin-top: 0.5rem;
            }
        }
    }
</style>
