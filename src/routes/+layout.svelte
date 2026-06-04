<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import { page } from '$app/state';

    let { children } = $props();

    let current = $derived(page.url.pathname.replace('/', ''));
</script>

<svelte:head>
    {#key current}
        {#if current != ''}
            <title>
                {'Mihir Patil — ' + current.charAt(0).toUpperCase() + current.slice(1)}
            </title>
        {:else}
            <title>Mihir Patil</title>
        {/if}
    {/key}
</svelte:head>

<Navbar />
{@render children()}
