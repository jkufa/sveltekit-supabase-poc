<!-- TODO: implement -->
<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';
	import type { Task } from './Task';
	import { enhance } from '$app/forms';

	export let supabase: SupabaseClient;
	export let task: Task;

	// set body to be task id
	const deleteTask = async () => {
		const { data, error } = await supabase.from('tasks').delete().eq('id', task.id);
		if (error) throw error;
	};
</script>

<form action="?/delete" method="POST" use:enhance>
	<input type="hidden" name="id" value={task.id} />
	<button on:click={deleteTask}> Delete task </button>
</form>
