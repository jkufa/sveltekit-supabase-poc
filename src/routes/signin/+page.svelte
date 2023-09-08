<script lang="ts">
	import { enhance } from '$app/forms';
	import OauthProvider from '$lib/components/OauthProvider.svelte';
	import { PROVIDERS } from '$lib/constants/providers';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({ email, password });
	};
</script>

<h1>Taskies!</h1>
<p>Please Sign in to continue.</p>

<!-- Log in form -->
<div class="form-container">
	<form action="?/signin" method="POST" class="sign-in" use:enhance={handleSignIn}>
		<div class="form-item">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" required bind:value={email} />
		</div>
		<div class="form-item">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required bind:value={password} />
		</div>
		<div class="submit-container">
			<button type="submit"> Sign in </button>
			<div>Don't have an account? <a href="/register">Create one</a></div>
		</div>
	</form>
</div>
<span class="or-line">Or</span>
{#each PROVIDERS as provider}
	<OauthProvider {provider} />
{/each}

<style lang="scss">
	h1,
	p {
		margin: 0;
	}
	input,
	button {
		padding: 1rem;
		border-radius: 0.4375rem; // 7px
		border: 1px solid #ccc;
	}

	.form-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.sign-in {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
	}
	.submit-container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.or-line {
		width: 100%;
		text-align: center;
		margin: 0.5rem 0;
	}
</style>
