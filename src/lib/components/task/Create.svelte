<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';
	import type { Task } from './Task';
	export let supabase: SupabaseClient;
	export let tasks: Task[] | null;

	let name: string;
	let description: string;

	const create = async () => {
		const user = await supabase.auth.getUser();
		if (!user || !user.data.user) return console.error('No user');

		const uid = user.data.user.id;
		const { data, error } = await supabase
			.from('tasks')
			.insert({
				user_id: uid,
				name,
				description
			})
			.select();
		if (error) throw error;
		else {
			name = '';
			description = '';
			tasks = data;
		}
	};
</script>

<form action="?/create" method="POST" on:submit|preventDefault={create}>
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
