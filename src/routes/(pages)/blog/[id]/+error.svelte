<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page not Found</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<h1>{$page.error?.message || 'Unknown Error'}</h1>

<p>
    <a href="/blog">Go back</a>
</p>