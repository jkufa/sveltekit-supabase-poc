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
		font-size: 18px;
		font-weight: bold;
	}

	.description {
		margin: 0;
		opacity: 0.65;
	}
</style>
