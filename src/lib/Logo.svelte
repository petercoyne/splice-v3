<script>
	import { headerExpanded } from '$lib/stores.js'
	import { fade, slide, fly } from 'svelte/transition';
	export let size
</script>

{#if (size == 0)}
<a href="/" class="grid items-center justify-center transition-all -mt-3 sm:-mt-1">
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] sm:text-4xl mx-4 colorcycle mt-[5px] transition-all blur-sm">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] sm:text-4xl mx-4 text-neutral-100">splice</h1>
	<h2 class="text-xs text-center -mt-3 sm:text-[11px] sm:mt-0">design &amp; web dev</h2>
</a>
{:else if (size == 1)}
<a href="/" class="grid items-center justify-center transition-all">
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] text-7xl mx-6 colorcycle mt-[5px] transition-all blur-sm">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] text-7xl mx-6 text-neutral-100">splice</h1>
	<h2 class="text-center text-xl">design &amp; web dev</h2>
</a>
{/if}

<style>
a {
	text-decoration: none;
	color: #ccc;
}
</style>