<script>
	import { draw } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	export let scale = 1;
	export let color = 'black';
	export let strokeWidth = 1.8;
	export let duration = 200;
	export let easing = cubicInOut;

	let width = 14 * scale;
	let height = 11 * scale;
</script>

<svg {width} {height} viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M1 5L5 9L13 1"
		stroke={color}
		stroke-width={strokeWidth}
		transition:draw={{ duration, easing }}
	/>
</svg>
