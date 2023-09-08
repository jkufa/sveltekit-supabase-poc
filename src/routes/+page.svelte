<script lang="ts">
	export let data;

	let { session, supabase, tasks } = data;
	$: ({ session, supabase, tasks } = data);
</script>

<h1>Your tasks</h1>
{#if tasks && tasks.length > 0}
	<ul>
		{#each tasks as task}
			<li>{task.name}</li>
		{/each}
	</ul>
{:else}
	<p>You have no tasks! The heck??</p>
{/if}
