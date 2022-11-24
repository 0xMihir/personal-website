<script lang="ts">
    import Navbar from '../../components/navbar.svelte';
</script>

<Navbar />

<div class="content">
    <h1>About Me</h1>
    <p>I'm a freshman studying CS at Purdue University.</p>
</div>

<a href="resume.pdf" class="fab" target="_blank">
    Resume
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 40 40">
        <path
            stroke="white"
            fill="white"
            d="M8.708 35.625q-1.75 0-3.083-1.313Q4.292 33 4.292 31.167v-7.75h4.416v7.75h22.5v-7.75h4.417v7.75q0 1.833-1.333 3.145-1.334 1.313-3.084 1.313ZM20 25.917l-9.875-9.875 3.125-3.125 4.542 4.583V3.292h4.416V17.5l4.5-4.583 3.209 3.125Z"
        />
    </svg>
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
        svg {
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
