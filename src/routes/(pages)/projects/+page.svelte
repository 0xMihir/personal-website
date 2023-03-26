<h1>Projects</h1>
<h2>MedSpeak</h2>
<p>
    During the TreeHacks 2023 Hackathon held at Stanford, I developed <a
        href="https://github.com/0xMihir/MedSpeak">MedSpeak</a
    >, a real-time web application designed to help doctors sift through complex electronic health
    record (EHR) documents to locate the most relevant information needed during patient visits.
    With MedSpeak, doctors can quickly access important data without wasting time searching through
    EHR records, enabling them to focus more on their patients. For this project, I utilized
    SvelteKit for both frontend and backend development, and the OpenAI embeddings API to evaluate
    essential data points. Additionally, I incorporated D3.js to create visual representations of
    numerical data.
</p>
<h2>Cryptum</h2>
<p>
    Another recent project that I worked on during the BoilerMake 2023 Hackathon is <a
        href="https://github.com/0xMihir/Cryptum">Cryptum</a
    >, a file storage app that utilizes a custom hardware security module called the Tillitis TKey
    for secure data storage. We built the firmware for the TKey in C, and created a communication
    protocol for web apps using the WebUSB standard. Additionally, we used SvelteKit for the backend
    and frontend. Our project won the prize for Best National Security Project!
</p>
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
