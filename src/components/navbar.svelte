<script lang="ts">
    import { page } from '$app/stores';
    let current = $page.url.pathname.replace('/', '');
</script>

<nav>
    <div class="left">
        <a href="/">Mihir</a><span class="color">
            {#if current != ''}
                .{current}()
            {/if}
        </span>
    </div>
    <div class="right">
        <a href="/about">.about()</a>
        <a href="/projects">.projects()</a>
        <a href="/blog">.blog()</a>
    </div>
</nav>

<style lang="scss">
    nav {
        font-family: 'IBM Plex Mono', monospace;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px 64px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 1.2rem;
        background-color: black;

        a {
            text-decoration: none;
            color: white;
            transition: color 0.2s ease-in-out;
        }

        .right a:hover {
            color:  #f3a712;
        }

        .color {
            background: linear-gradient(to left, #ff8008, #f3a712);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }



        .left {
            margin-right: 0;
            display: inline-block;
            font-weight: 600;
            font-size: 1.5rem;
        }
    }
</style>
