<script>
	import { headerExpanded } from '$lib/stores.js'
	import { fade, slide, fly } from 'svelte/transition';
	export let size
</script>

{#if (size == 0)}
<a href="/" class="grid transition-all no-underline -mt-3 sm:-mt-1">
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] sm:text-4xl colorcycle mt-[2px] transition-all blur-sm">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] sm:text-4xl text-black">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[2.5rem] sm:text-4xl mt-[2px] text-white">splice</h1>
	<h2 class="text-xs -mt-3 sm:text-[11px] text-center sm:mt-0">design &amp; web dev</h2>
</a>
{:else if (size == 1)}
<div href="/" class="grid items-center justify-center transition-all no-underline">
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[8rem] mx-6 colorcycle mt-[5px] transition-all blur-sm">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[8rem] mx-6 mt-[5px] text-white">splice</h1>
	<h1 transition:slide|local  class="row-start-1 col-start-1 text-[8rem] mx-6 text-black">splice</h1>
	<h2 class="text-center mt-[-4rem] ml-16 row-start-2 col-start-1 text-[22px] text-sky-200">design &amp; web dev</h2>
</div>
{/if}

<!-- <style>
a {
	text-decoration: none;
	color: #333;
}
</style> -->