<script lang="ts">
    import Navbar from '../components/navbar.svelte';
    import { onMount } from 'svelte';
    import Image from 'svimg';

    onMount(() => {
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '100px',
            threshold: 1.0
        };

        let observer = new IntersectionObserver((elements) => {
            const element = elements[0];

            if (element.isIntersecting) {
                element.target.classList.add('start');
            }
        }, options);

        let target = document.querySelectorAll('.content h1');
        if (target && target.length > 0) {
            target.forEach((e) => observer.observe(e));
        }
    });
</script>

<Navbar />

<div class="centered">
    <div class="hidden" />
    <h1>Hey! 🤟🏽 <br /> I'm <span class="color slide-in start">Mihir Patil</span></h1>
    <div class="mouse">
        <div class="wheel" />
    </div>
</div>
<div class="content">
    <div class="tagline-profile">
        <p class="tagline">
            Currently, I'm a freshman at Purdue University majoring in Computer Science. I've always
            been a maker by heart and I'm fascinated by physical computing and AI.
        </p>
        <svg version="1.1" class="profile-holder" viewBox="0 0 436 436">
            <defs>
                <linearGradient
                    id="linearGradient"
                    x1="24.188"
                    x2="372.91"
                    y1="218"
                    y2="218"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ff0f7b" offset="0" />
                    <stop stop-color="#f89b29" stop-opacity=".94118" offset="1" />
                </linearGradient>
                <clipPath id="clipPath">
                    <path
                        d="m294.91 44.795a40 40 0 0 1 34.641 20l76.906 133.21a40 40 0 0 1 0 40l-76.906 133.21a40 40 0 0 1-34.641 20h-153.81a40 40 0 0 1-34.641-20l-76.906-133.21a40 40 0 0 1 0-40l76.906-133.21a40 40 0 0 1 34.641-20"
                    />
                </clipPath>
            </defs>
            <path
                d="m294.91 44.795a40 40 0 0 1 34.641 20l76.906 133.21a40 40 0 0 1 0 40l-76.906 133.21a40 40 0 0 1-34.641 20h-153.81a40 40 0 0 1-34.641-20l-76.906-133.21a40 40 0 0 1 0-40l76.906-133.21a40 40 0 0 1 34.641-20"
                fill="url(#linearGradient)"
            />
            <foreignObject clip-path="url(#clipPath)" width="100%" height="100%">
                <Image class="profile-img" src="/images/profile.png" alt="Mihir Patil" />
            </foreignObject>
        </svg>
    </div>

    <h1 class="color slide-in">My Experience</h1>
    <h2>Purdue Space Program</h2>
    <p>
        As a member of the avionics subteam of Purdue Space Program Liquids, I helped develop flight
        software for the team's latest rocket, the CraterMaker Special. This rocket is the largest
        embedded systems project I've worked on, and I have learned about the intricacies of
        communication protocols, the RP2040 microcontroller, and advanced PCB design.
    </p>
    <Image src="images/rocket.png" alt="CraterMaker Special render" />
    <h2>b01lers</h2>
    <p>
        In Purdue's b01lers CTF team, I have worked on various challenges, focusing on web and
        blockchain. We recently competed in the 2022 Raymond James CTF and placed 3rd out of 14
        teams.
    </p>
</div>

<style lang="scss">
    .centered {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 100%;
        div.hidden {
            flex: 0 1 auto;
            visibility: hidden;
        }
        h1 {
            flex: 0 1 auto;
            padding: 0 2rem;
            font-size: 2.5em;
            span {
                display: inline-block;
            }
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
                border-radius: 5px;
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
        flex-direction: column;
        padding: 72px 10vw;

        div.tagline-profile {
            @media screen and (max-width: 1200px) {
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                justify-content: center;
            }

            display: flex;
            flex-direction: row;
            align-items: center;

            svg.profile-holder {
                user-select: none;
                overflow: visible;
                width: 450px;
                @media screen and (max-width: 600px) {
                    width: 300px;
                }
                :global(.profile-img) {
                    position: fixed;
                    bottom: 40px;
                    left: 30px;
                    width: 80%;
                }
            }

            p.tagline {
                font-size: inherit;
                margin: 0 16px 0;

                @media screen and (max-width: 1200px) {
                    text-align: center;
                }
            }
        }

        h1 {
            // font-family: 'IBM Plex Mono', monospace;
            font-size: 2em;
            text-transform: uppercase;
        }

        p {
            font-size: 1.2rem;
            @media screen and (max-width: 600px) {
                text-align: center;
            }
        }
    }

    .slide-in {
        transform: translateY(50px);
        opacity: 0;
    }

    .slide-in.start {
        animation: slide-in 1s cubic-bezier(0.05, 0.26, 0.2, 1);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes slide-in {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
