<script lang="ts">
    import type { Activity } from '../types'

    export let data: Activity;
</script>

<h1>Bored?</h1>
<h2>Do a random activity</h2>

{#if data}
    <h3>{data.activity}</h3>
    <p>{data.type}</p>
    <p>{data.participants}</p>
{/if}
