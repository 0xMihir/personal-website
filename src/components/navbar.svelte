<script lang="ts">
    import { page } from '$app/stores';
    import { fly, type FlyParams, fade } from 'svelte/transition';

    let current = $page.url.pathname.replace('/', '');
    let showSidebar = false;
    let horizSlide = (node: Element, options: FlyParams) => {
        const flyTrans = fly(node, options);
        return {
            duration: options.duration,
            css: (t: number) => `
				${flyTrans.css(t)}
				opacity: 1;
			`
        };
    };
    let toggleSidebar = () => (showSidebar = !showSidebar);
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
        <button on:click={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48">
                <path
                    stroke="white"
                    fill="white"
                    d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
                />
            </svg>
        </button>
        <div class="links">
            <a href="/about">.about()</a>
            <a href="/projects">.projects()</a>
            <a href="/blog">.blog()</a>
        </div>
    </div>
</nav>

{#if showSidebar}
    <div class="sidebar" transition:horizSlide={{ x: -400 }}>
        <div class="links">
            <a href="/about">.about()</a>
            <a href="/projects">.projects()</a>
            <a href="/blog">.blog()</a>
        </div>
    </div>
    <div class="scrim" transition:fade on:click={toggleSidebar} on:keypress={toggleSidebar} />
{/if}

<style lang="scss">
    * {
        font-family: 'IBM Plex Mono', monospace;
    }
    a {
        text-decoration: none;
        color: white;
        transition: color 0.2s ease-in-out;
        &:hover {
            color: #ff8008;
        }
    }
    nav {
        z-index: 2;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px 64px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 0.5em;
        background-color: black;
        box-shadow: -1px 5px 5px 0px rgba(0, 0, 0, 0.75);

        .right {
            display: flex;
            flex-direction: row;
            * {
                margin-left: 16px;
            }
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 0;
                display: none;
                width: fit-content;
                svg path {
                    transition: all 0.2s ease-in-out;
                }
                &:hover {
                    svg path {
                        fill: #f3a712;
                        stroke: #f3a712;
                    }
                }
            }
        }

        .left,
        left a {
            margin-right: 0;
            display: inline-block;
            font-weight: 600;
            font-size: 1.5em;
        }
    }

    .sidebar {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: fit-content;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .links {
            display: flex;
            flex-direction: column;
            align-items: center;
            a {
                margin: 16px 0;
                padding: 16px 32px;
            }
        }
    }
    .scrim {
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 600px) {
        nav {
            .right {
                button {
                    display: block;
                }
                .links {
                    display: none;
                }
            }
        }
    }
</style>
