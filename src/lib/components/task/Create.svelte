<script lang="ts">
	let name: string;
	let description: string;


</script>

<form action="?/create" method="POST">
	<div class="inputs-container">
		<input type="text" placeholder="Task name" name="name" autocomplete="off" bind:value={name} />
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
			padding: 1rem;
		}
	}
</style>
