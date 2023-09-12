<script lang="ts">
	import Delete from './Delete.svelte';
	import type { Task } from './Task';

	export let data;

	let { session, supabase, tasks } = data;

	export let task: Task;
</script>

<div class="container">
	<span class="name">{task.name}</span>
	{#if task.description}
		<p class="description">{task.description}</p>
	{/if}
	<Delete {task} {supabase} />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem 1.5rem;
		border-radius: 0.4375rem; // 7px
		border: 1px solid #ccc;
	}

	.name {
    font-size: 18px;
		font-weight: bold;
	}

	.description {
		margin: 0.3rem 0;
		opacity: 0.65;
	}
</style>
