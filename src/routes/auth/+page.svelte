<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;
  let isSignUp: boolean = false;

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({ email, password });
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<div class="main-container">
	<h1>Taskies!</h1>
	<p>Please Sign in to continue.</p>

	<!-- Log in form -->
	<div class="form-container">
		<form class="login">
      {#if isSignUp}
        <div class="form-item">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
      {/if}
			<div class="form-item">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div class="form-item">
				<label for="password">Password</label>
				<input type="password" id="password" name="password" required />
			</div>
			<button type="submit">
        {#if isSignUp}
          Sign up
        {:else}
        Sign in
        {/if}
      </button>
		</form>
	</div>
	<!-- Sign up form -->
	<span>Don't have an account? <a href="/auth" on:click={() => isSignUp=true}>Sign up</a></span>
</div>

<style lang="scss">
	h1,
	p {
		margin: 0;
	}
	input,
	button {
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid #ccc;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		max-width: 428px; // iPhone 14 Pro Max width
		margin: 0 auto;
		margin-top: 4rem;
		gap: 1rem;
	}

	// each item in form-container should be on its own line
	.form-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.login {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
	}
</style>
