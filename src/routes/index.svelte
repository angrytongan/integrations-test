<script lang="ts">
    let count: number = 0;

    const increment = () => {
        count++;
    };
</script>

<div>
    <button type="button" on:click={increment}>{count}</button>
</div>

<style>
    div {
        width: 700px;
        margin: 0 auto;
        text-align: center;
    }
    button {
        font-size: 50px;
    }
</style>
