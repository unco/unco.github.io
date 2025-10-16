<script>
    import { onMount } from 'svelte';


    let questions = [

  { "question": "Where does this design spark a small moment of joy?", "category": "Crafted" },
  { "question": "Does this feel generic, or does it have a voice?", "category": "Crafted" },
  { "question": "Have I added humanity without clutter or gimmicks?", "category": "Crafted" },
  { "question": "Would I be proud to show this in a design museum exhibit?", "category": "Crafted" },
  { "question": "Have I checked alignment, spacing, and hierarchy with fresh eyes?", "category": "Crafted" },
  { "question": "Would this make someone smile even on a bad day?", "category": "Crafted" },

  { "question": "Am I being fully transparent about what’s happening here?", "category": "Principled" },
  { "question": "Does this design respect the user’s time and attention?", "category": "Principled" },
  { "question": "If this pattern were used against me, would I feel tricked?", "category": "Principled" },
  { "question": "Have I made opting out as easy as opting in?", "category": "Principled" },
  { "question": "Does this design treat people with dignity, even when they fail?", "category": "Principled" },
  { "question": "Is this equally usable for someone with different abilities?", "category": "Principled" },

  { "question": "What’s the real human problem here, beyond the business requirement?", "category": "Responsive" },
  { "question": "If this feature disappeared tomorrow, who would miss it and why?", "category": "Responsive" },
  { "question": "Am I solving a symptom or the underlying need?", "category": "Responsive" },
  { "question": "Have I reduced this design to its simplest useful form?", "category": "Responsive" },
  { "question": "Could someone understand this at a glance?", "category": "Responsive" },
  { "question": "What’s the riskiest point of confusion and how am I handling it?", "category": "Responsive" },

  { "question": "What’s the one behavior this design most encourages?", "category": "Impactful" },
  { "question": "Does this meaningfully improve someone’s workflow or life?", "category": "Impactful" },
  { "question": "Have I measured what success looks like for both user and business?", "category": "Impactful" },
  { "question": "Is this feature carrying its weight, or is it cruft?", "category": "Impactful" },
  { "question": "What happens if I don’t design this at all?", "category": "Impactful" },
  { "question": "Have I balanced short-term usability with long-term strategic value?", "category": "Impactful" },

  { "question": "Does the design reflect how the underlying system really works?", "category": "Systemic" },
  { "question": "Have I verified assumptions with engineering or domain experts?", "category": "Systemic" },
  { "question": "Am I aligning with platform conventions (CLI, SDK, APIs) where it builds trust?", "category": "Systemic" },
  { "question": "Does this solution integrate cleanly into existing workflows or tools?", "category": "Systemic" },
  { "question": "Have I considered performance, reliability, and security in the design?", "category": "Systemic" },
  { "question": "Does this design help make complex systems feel coherent, not chaotic?", "category": "Systemic" }
];

let question = {question:'', category:''};
let sidepanel = false;
let questionator = true;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    question = questions[randomIndex];
}   

onMount(() => {
    getRandomQuestion();
});


</script>



<h1>CRISP UX design excellence Questionator™ </h1>

{#if questionator}
    <p>This tool is designed to help UX designers at Canonical quickly access random questions from the CRISP framework. By clicking the "New question" button, designers can receive a random question that encourages thoughtful consideration of their design choices. This can be particularly useful during brainstorming sessions, design reviews, or when seeking inspiration to enhance user experience. The questions are categorized into five key areas: Crafted, Responsive, Impactful, Systemic, and Principled, each focusing on different aspects of design excellence.</p>

    <blockquote>
        <em>{question.question}</em> <br> <button class='p-chip' on:click={()=>{ sidepanel = !sidepanel}}>{question.category}</button>
    </blockquote>

    <button class="btn" on:click={getRandomQuestion}>New question</button> &nbsp;&nbsp; <a href="#" on:click={()=>{ questionator = !questionator}}>View all</a>
{:else}
    <p>This is the full list of CRISP questions.</p>
    <ul>
        {#each questions as q}
                <li>{q.question}<button class='p-chip' on:click={()=>{ sidepanel = !sidepanel}}>{q.category}</button>
        {/each}
    </ul>
    <a href="#" on:click={()=>{ questionator = !questionator}}>Back to questionator</a><br><br><br><br>
{/if}


{#if sidepanel}
    <div class='sidepanel'>
        <button class="p-modal__close" on:click={()=>{ sidepanel = false}}>Close</button>
        
        <h1>About PRISM</h1>
        <p>PRISM is a <a href="https://www.figma.com/proto/8Rmni55f2mvo9c5Efhv5sA/Untitled?node-id=1-2971&t=jL9P701hgZDddNe3-0&scaling=contain&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1%3A2971" target="_blank">UX design excellence framework</a> for Canonical. It consists of 30 questions divided into 5 categories: Principled, Responsive, Impactful, Systemic, and Masterful. The framework is designed to help UX designers evaluate their designs and ensure they design with intent.</p>
        <h3>Categories:</h3>
        <ul>
            <li><strong>Crafted:</strong> Does it go beyond average, strive for excellence, create delight?</li>
            <li><strong>Responsive:</strong> Is it responding to real user needs at the root?</li>
            <li><strong>Impactful:</strong> Is it moving the needle for both user and business?</li>
            <li><strong>Systemic:</strong> Does it deeply understand the technology and technicality of the problem and solve in a Canonical Design way?</li>
            <li><strong>Principled:</strong> Is it acting with integrity, ethics and inclusiveness?</li>
        </ul>

        <p>Using the CRISP framework can help designers create more thoughtful, user-centered designs that not only meet business goals but also provide a positive experience for users of our deeply technical products.</p>  
    </div> 
{/if}



<style>
    p {max-width: 800px;}
    blockquote {
        border-left: 3px solid #e95420;
        margin: 1.5rem 0;
        padding-left: 1rem;
        font-style: normal;
    }
    blockquote em {
        font-style: normal;
        font-size: 2em;
    }
    .btn {
        font-family: 'Ubuntu Sans', sans-serif;
        border: 1px solid #111;
        padding: 8px 12px;
        border-radius: 0;
        outline: none;
        background-color: #fff;
        text-decoration: none;
        color:#000;
        cursor:pointer;
        white-space: nowrap;
    }
    .btn:hover {
        background-color: #fff;
    }
    .sidepanel .p-modal__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #fff;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nIzAwMCcgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNMTMuMDQxIDEuODk4bDEuMDYgMS4wNkw5LjA2MiA4bDUuMDQgNS4wNDItMS4wNiAxLjA2TDggOS4wNjIgMi45NiAxNC4xbC0xLjA2LTEuMDZMNi45MzggOCAxLjkgMi45NmwxLjA2LTEuMDYgNS4wNCA1LjA0eicvPjwvc3ZnPg==");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 1rem;
        border: 0;
        box-sizing: content-box;
        height: 1rem;
        margin: 0;
        margin-top: 1rem;
        padding: .5rem;
        text-indent: -999em;
        width: 1rem;
        cursor:pointer;
    }
    .sidepanel .p-modal__close:hover {
        
        background-color: #f2f2f2;
    }

    a {
        color: #06c;
        text-decoration: none;
    }
    .p-chip {
        background-color: #f2f2f2;
        border: 1.5px solid #707070;
        transition-duration: .1s;
        transition-property: background-color, border-color;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        align-items: baseline;
        border-radius: 1rem;
        display: inline-flex;
        margin: 0 .5rem 0 0;
        max-width: 100%;
        padding: calc(.25rem - 1.5px) .5rem;
        position: relative;
        cursor: pointer;
        /*-webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        */
        vertical-align: calc(1.5px - .375rem);
        white-space: nowrap;
        font-size: 12px;
    }
    li .p-chip {
        vertical-align: 1.5px;
        transform: scale(80%);
    }
    .sidepanel {
        position: fixed;
        top: 0;
        right: 0;
        width: 400px;
        height: 100%;
        background-color: #fff;
        box-shadow: -2px 0 5px rgba(0,0,0,0.1);
        padding: 20px;
        overflow-y: auto;
        z-index: 1000;
    }
</style>