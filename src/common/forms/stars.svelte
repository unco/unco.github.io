<script>

    export let levels = {};
    export let level = {};
    export let align_left = false;
    let stars = 0;
    if(levels[level.level]) {
        stars = levels[level.level].stars;
    } else {
        console.error('levels', levels);
        console.error('level', level);
    }
    
</script>
{#if levels[level.level] }
    <div class="stars stars-{stars}" class:align_left title="{levels[level.level].short} : {levels[level.level].long}">
        {#if !stars }
            &mdash;
        {:else}
            {#each {length: stars} as _, i}
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9" />
                   <!-- <path d="M14.2702 13.9378C15.8394 13.9378 17.1116 15.21 17.1116 16.7793C17.1116 18.3485 15.8394 19.6207 14.2702 19.6207C12.7009 19.6207 11.4287 18.3485 11.4287 16.7793C11.4287 15.21 12.7009 13.9378 14.2702 13.9378ZM4.76617 13.1645C5.71879 15.0121 7.45148 16.3336 9.48522 16.7636C9.71444 16.8126 9.94818 16.8506 10.1822 16.8766C10.2012 17.7366 10.4925 18.5683 11.0142 19.2523C10.3361 19.2563 9.65954 19.1867 8.99648 19.0446C5.98647 18.4075 3.49027 16.3154 2.33672 13.4631C3.15803 13.6139 4.00582 13.5097 4.76617 13.1645ZM18.69 4.82823C20.9108 8.18192 20.7228 12.5835 18.2242 15.7356C18.0056 14.9042 17.5297 14.1632 16.8645 13.6187C18.1621 11.5159 18.2488 8.88307 17.0922 6.69955C17.804 6.25431 18.3618 5.60104 18.69 4.82823ZM3.07679 6.60943C4.64607 6.60943 5.91823 7.88158 5.91823 9.45087C5.91823 11.0201 4.64607 12.2923 3.07679 12.2923C1.50751 12.2923 0.235352 11.0201 0.235352 9.45087C0.235352 7.88158 1.50751 6.60943 3.07679 6.60943ZM14.9103 0.378906C16.4796 0.378906 17.7518 1.65106 17.7518 3.22035C17.7518 4.78963 16.4796 6.06179 14.9103 6.06179C13.341 6.06179 12.0689 4.78963 12.0689 3.22035C12.0689 1.65106 13.341 0.378906 14.9103 0.378906ZM11.6709 0.695022C11.1556 1.35743 10.8548 2.16141 10.8089 2.99941C8.57678 3.03733 6.49961 4.14824 5.22886 5.98373C4.58147 5.58312 3.83533 5.37064 3.07401 5.37009C3.00182 5.37005 2.92967 5.37201 2.85756 5.37597C4.62579 2.2559 8.09778 0.412051 11.6709 0.695022Z" />-->
                </svg>
            {/each}
            
        {/if}
    </div>
{/if}

<style>
    .stars { color:#ccc; text-align: center; }
    .stars svg {
        margin: 0 2px;
    }
    .stars.align_left {
        text-align: left;
    }
    .stars-1  path { fill: #D3481D }
    .stars-2  path { fill: #AF3B29; }
    .stars-3  path { fill: #8D2F35; }
    .stars-4  path { fill: #6A2240; }
    .stars-5  path { fill: #4B1233; }
    .stars-6  path { fill: #2C011E; }

    .stars-1  circle { fill: #D3481D }
    .stars-2  circle { fill: #AF3B29; }
    .stars-3  circle { fill: #8D2F35; }
    .stars-4  circle { fill: #6A2240; }
    .stars-5  circle { fill: #4B1233; }
    .stars-6  circle { fill: #2C011E; }
</style>