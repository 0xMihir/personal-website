<script lang="ts">
    import Navbar from '../../components/navbar.svelte';
</script>

<Navbar/>

<div class="content">
    <h1>About Me</h1>
    <p>
        I'm a freshman studying CS at Purdue University.
    </p>
</div>

<a href="resume.pdf" class="fab" target="_blank">
    Resume
    <img src="download.svg" height="24px" alt="download" />
</a>

<style lang="scss">
    .content {
        display: flex;
        padding: 72px 100px;
        flex-direction: column;
        p {
            font-size: 1.2rem;

        }
    }
    
    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 0;
    }

    .fab {
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        img {
            margin-left: 8px;
        }
        bottom: 64px;
        background: linear-gradient(to left, #ff8008, #f3a712);
        font-size: 1.1rem;
        padding: 8px 32px;
        border-radius: 100px;
        right: 72px;
    }
</style>
