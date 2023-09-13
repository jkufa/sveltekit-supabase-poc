<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Task } from './Task';

	export let task: Task;
</script>

<form class="checkbox-container" action="?/setComplete" method="POST" use:enhance>
	<label hidden for="completed">Completed</label>
	<input type="hidden" name="id" value={task.id} />
	<input type="hidden" name="completed" value={task.completed} />
	<button
		type="submit"
		id="completed"
		name="completed"
		class={task.completed ? 'completed' : 'not-completed'}
		on:click={() => {
			console.log(task.completed);
			task.completed = !task.completed;
			console.log(task.completed);
		}}
	/>
</form>

<style lang="scss">
	.checkbox-container {
		display: flex;
		gap: 0.5rem;

		.completed {
			background-color: #cecece;
		}
		.not-completed {
			background-color: transparent;
		}
		button {
			height: 2rem;
			width: 2rem;
			margin: 0;
			border-radius: 100rem;
			border: 1px solid #a2a2a2;
		}
	}
</style>
