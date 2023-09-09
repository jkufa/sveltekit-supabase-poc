<script lang="ts">
	import { titleCase } from '$lib/functions/titleCase';
	export let provider: string;
</script>

<form method="POST">
	<button formaction="?/signin&provider={provider.toLowerCase()}"
		>Continue with {titleCase(provider)}</button
	>
</form>

<style lang="scss">
	button {
		width: 100%;
		padding: 1rem;
		border-radius: 0.4375rem; // 7px
		border: 1px solid #ccc;
	}
</style>
