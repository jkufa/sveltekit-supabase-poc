<script lang="ts">
	import Delete from './Delete.svelte';
	import Checkbox from './Checkbox.svelte';
	import type { Task } from './Task';

	export let task: Task;
</script>

<div class="container">
	<Checkbox {task} />
	<div class="text-container">
		<span class="name">{task.name}</span>
		{#if task.description}
			<p class="description">{task.description}</p>
		{/if}
	</div>
	<div class="delete-container">
		<Delete {task} />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: 0.7rem;
		padding: 1rem 1.5rem;
		border-radius: 0.4375rem; // 7px
		border: 1px solid #ccc;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
	}

	.delete-container {
		margin-left: auto;
		display: flex;
	}

	.name {
		font-weight: 500;
	}

	.description {
		font-size: 14px;
		margin: 0;
		opacity: 0.65;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		// TODO: update this to use line-clamp & flexbox when browsers support it
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
