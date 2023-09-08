<script lang="ts">
	import { enhance } from '$app/forms';

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
		<button type="submit"> Sign in </button>
	</form>
</div>
<!-- Sign up form -->
<span>Don't have an account? <a href="/register">Create one</a></span>

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
</style>
