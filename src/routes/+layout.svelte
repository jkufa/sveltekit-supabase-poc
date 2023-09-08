<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	/** In order to catch supabase events being triggered, we need to create
	 * an event listener in the root layout.
	 */

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data); // Reactive declaration to detect changes in data

	// onMount runs when the component is mounted to the DOM
	onMount(() => {
		// We need to subscribe to the auth state change event
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			// If there's a change in the expiration time, invalidate the session
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		// cleanup function
		return () => subscription.unsubscribe();
	});

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<nav>
	<a href="/">home</a>
	{#if !session}
		<a href="/signin">sign in</a>
		<a href="/register">register</a>
	{:else}
		<a href="/logout" on:click={handleSignOut}>log out</a>
	{/if}
</nav>

<main class="main-container">
	<slot />
</main>

<style global lang="scss">
	.main-container {
		display: flex;
		flex-direction: column;
		max-width: 428px; // iPhone 14 Pro Max width
		margin: 0 auto;
		margin-top: 4rem;
		gap: 1rem;
	}
</style>
