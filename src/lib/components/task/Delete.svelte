<!-- TODO: implement -->
<script lang="ts">
	import type { Task } from './Task';
	import { enhance } from '$app/forms';

	export let task: Task;
</script>

<form action="?/delete" method="POST" use:enhance>
	<input type="hidden" name="id" value={task.id} />
	<button type="submit" aria-label="delete">Delete</button>
</form>

<style lang="scss">
	form {
		display: flex;
	}
</style>
