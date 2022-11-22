<script lang="ts">
    import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<div class="centered">
    <div class="hidden" />
    <h1>Hey! 🤟🏽 <br /> I'm Mihir Patil</h1>
    <div class="mouse">
        <div class="wheel" />
    </div>
</div>
<!-- <div class="content">
    <h1>
        I love hardware
    </h1>
    <p>        
    </p>
</div> -->

<style lang="scss">
    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 0;
    }
    .centered {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 100vw;
        div.hidden {
            flex: 0 1 auto;
            visibility: hidden;
        }
        h1 {
            flex: 0 1 auto;
        }
        .mouse {
            border-radius: 25px;
            width: 30px;
            height: 50px;
            border: 1.5px solid white;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            .wheel {
                width: 3px;
                height: 10px;
                border-radius: 25%;
                background-color: #fff;
                animation-name: scroll;
                animation-duration: 2s;
                animation-timing-function: ease-out;
                animation-iteration-count: infinite;
                margin-bottom: 20px;
            }

            @keyframes scroll {
                0% {
                    opacity: 0;
                }
                10% {
                    transform: translateY(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(10px);
                    opacity: 0;
                }
            }
        }
    }
    .content {
        display: flex;
        padding: 72px 100px;
        flex-direction: column;
        h1 {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 5rem;
            text-transform: uppercase;
        }
        p {
            font-size: 1.2rem;
        }
    }
    
</style>
