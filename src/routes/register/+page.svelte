<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;
	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};
</script>

<h1>Taskies!</h1>
<p>Please register an account to continue.</p>

<!-- Log in form -->
<div class="form-container">
	<form on:submit={handleSignUp} class="register">
		<div class="form-item">
			<label for="email">Email</label>
			<input type="email" name="email" bind:value={email} />
		</div>
		<div class="form-item">
			<label for="password">Password</label>
			<input type="password" name="password" bind:value={password} />
		</div>
		<button>Register</button>
	</form>
</div>
<!-- Sign up form -->
<span>Already have an account? <a href="/signin">Sign in</a></span>

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
	.register {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
	}
</style>
