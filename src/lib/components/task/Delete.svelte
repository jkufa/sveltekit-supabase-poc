<!-- TODO: implement -->
<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';
	import type { Task } from './Task';

	export let supabase: SupabaseClient;
	export let task: Task;

	// set body to be task id
	const deleteTask = async () => {
		const { data, error } = await supabase.from('tasks').delete().eq('id', task.id);
		if (error) throw error;
		else {
			console.log(data);
		}
	};
</script>

<button on:click={deleteTask}> Delete task </button>
