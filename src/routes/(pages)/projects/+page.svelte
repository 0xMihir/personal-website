<h1>Projects</h1>
<h2>
    Wordle Together
    <img src="/images/wordletogether.svg" alt="" height="75px" />
</h2>
<p>
    I built <a href="https://wordletogether.com">wordletogether.com</a>, a multiplayer version of
    the popular game Wordle that has been played over 200,000 times. It was built using Svelte and
    µWebsockets.js, and hosted on AWS. Although I had used these frameworks separately before, this
    project allowed me to bring them together, and I learned how to quickly go from an idea to a
    fully functional product.
</p>
<h2>Self Driving Car</h2>
<p>
    I built a self-driving car using a Raspberry Pi 4, the Luxonis OAK-D camera, and a custom-built
    chassis. To collect training data, I wrote an Android application that acted as a remote control
    for the car over Bluetooth. I used Tensorflow to train a lane detection and following model, and
    ran it on the OAK-D's Myriad X VPU. I then combined these readings, allowing the car to control
    its throttle and steering angle. This was one of my first projects using machine learning, and I
    learned a lot about the process training, deploying, and optimizing models.
</p>

<style lang="scss">
    h2 {
        display: flex;
        align-items: center;
        img {
            margin-left: 16px;
        }
    }
    p {
        font-size: 1.2rem;
    }
</style>
