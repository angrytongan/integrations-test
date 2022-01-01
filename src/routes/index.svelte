<script lang="ts">
    import { onMount } from 'svelte';

    let now: string = new Date();
    let count: number = 0;
    let text: string = '';

    const increment = () => {
        count++;
    };

    onMount(() => {
        const intervalId = setInterval(() => {
            now = new Date();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

</script>

<div>
    <button type="button" on:click={increment} data-cy="click-me">Click me</button>
    <input type="text" bind:value={text} placeholder="Some text" data-cy="text" />

    <p>{now}</p>
    <p data-cy="paragraph-count">{count}</p>
    <p data-cy="paragraph-text">{text}</p>
</div>

<style>
    div {
        width: 700px;
        margin: 0 auto;
        text-align: center;
    }
</style>
