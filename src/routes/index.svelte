<script lang="ts" context="module">
    export const load = ({}) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({});
            }, 3000);
        });
    };
</script>

<script lang="ts">
    import { onMount } from 'svelte';

    let now: string = new Date().toString();
    let count: number = 0;
    let text: string = '';
    let loading: boolean = true;

    const increment = () => {
        count++;
    };

    onMount(() => {
        loading = false;

        const intervalId = setInterval(() => {
            now = new Date().toString();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

</script>

<div>
    <button type="button" on:click={increment} data-cy="click-me">Click me</button>
    <input type="text" bind:value={text} placeholder="Some text" data-cy="text" />

    {#if loading}
        <p data-cy="loading">loading</p>
    {/if}

    <p>{now}</p>
    <p data-cy="paragraph-count">{count}</p>
    <p data-cy="paragraph-text">{text}</p>
</div>

<style>
    div {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
    }
</style>
