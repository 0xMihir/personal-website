<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Page Not Found</title>
    <meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="content">
    <h1>{$page.error?.message || 'Unknown Error'}</h1>
    <p>
        <a href="/">Go back</a>
    </p>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
</style>