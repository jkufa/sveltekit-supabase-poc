<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import Create from '$lib/components/task/Create.svelte';
	import Task from '$lib/components/task/Task.svelte';

	// TODO: update tasks reactively with a subscribe
	export let data;

	let { session, supabase, tasks } = data;
	$: ({ session, supabase, tasks } = data);
</script>

<h1>Your tasks</h1>
{#if session && tasks && tasks.length > 0}
	<ul>
		{#each tasks as task}
			<li in:fly={{ y: 10 }} out:slide>
				<Task {task} />
			</li>
		{/each}
	</ul>
{:else}
	<p>You have no tasks! The heck??</p>
{/if}
<Create index={tasks?.length ?? 0} />

<style lang="scss">
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		li {
			margin: 0.5rem 0;
			&:first-child {
				margin-top: 0;
			}
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
