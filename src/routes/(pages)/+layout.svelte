<script lang="ts">
    let { children } = $props();
</script>

<div class="content">
    {@render children()}
</div>

<style lang="scss">
    .content {
        display: flex;
        padding: 72px 100px;
        flex-direction: column;
    }
</style>
