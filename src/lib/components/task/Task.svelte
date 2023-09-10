<script lang="ts">
	import type { Task } from './Task';
	export let task: Task;
</script>

<div class="container">
	<span class="name">{task.name}</span>
	<p class="description">{task.description}</p>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 0.4375rem; // 7px
		border: 1px solid #ccc;
	}

	.name {
		font-weight: bold;
	}

	.description {
		margin: 0.3rem 0;
		opacity: 0.65;
		font-size: 14px;
	}
</style>
