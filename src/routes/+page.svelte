<script lang="ts">
	export let data;

	let { session, supabase, tasks } = data;
	$: ({ session, supabase, tasks } = data);

	if (tasks) tasks?.sort((a, b) => a.index - b.index);
</script>

<h1>Your tasks</h1>
{#if session && tasks && tasks.length > 0}
	<ul>
		{#each tasks as task}
			<li>
				<span class="task-name">{task.name}</span>
				<p>{task.description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>You have no tasks! The heck??</p>
{/if}

<style lang="scss">
	ul {
		margin: 0;
		padding: 0;
		li {
			margin: 1rem 0;
			&:first-child {
				margin-top: 0;
			}
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	p {
		margin: 0.3rem 0;
		opacity: 0.65;
	}
	.task-name {
		font-weight: bold;
	}
</style>
