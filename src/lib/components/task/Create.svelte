<script lang="ts">
	import { enhance } from '$app/forms';

	// Always need to know the length of the tasks array
	export let index: number;

	let name: string;
	let description: string;
</script>

<form action="?/create" method="POST" use:enhance>
	<div class="inputs-container">
		<input type="hidden" name="index" value={index} />
		<input
			type="text"
			placeholder="Task name"
			name="name"
			autocomplete="off"
			required
			bind:value={name}
		/>
		<input type="text" placeholder="Task description" name="description" bind:value={description} />
	</div>
	<button> Add task </button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.5rem;

		input,
		button {
			border-radius: 7px;
			padding: 1rem;
			border: 1px solid #ccc;
		}
	}

	.inputs-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-radius: 7px;
		border: 1px solid #ccc;
		input {
			border: none;
			padding: 1rem 1.5rem;
		}
	}
</style>
