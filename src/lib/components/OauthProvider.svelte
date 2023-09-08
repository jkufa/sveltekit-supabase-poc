<script lang="ts">
	import { titleCase } from '$lib/functions/titleCase';
	export let provider: string;
</script>

<form method="POST">
	<button formaction="?/signin&provider={provider.toLowerCase()}"
		>Continue with {titleCase(provider)}</button
	>
</form>
