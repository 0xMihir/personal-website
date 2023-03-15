<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.error?.message || 'Unknown Error'}</h1>

<p>
    <a href="/blog">Go back</a>
</p>