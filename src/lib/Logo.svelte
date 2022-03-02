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
	<h2 class="text-xs -mt-3 sm:text-[11px] text-center sm:mt-0 text-white mix-blend-overlay opacity-80">design &amp; web dev</h2>
</a>
{:else if (size == 1)}
<div href="/" class="grid items-center justify-center transition-all no-underline mb-32">
	<h1 class="tracking-tighter row-start-1 col-start-1 text-[8rem] px-6 colorcycle mt-[5px] transition-all blur-md">splice</h1>
	<h1 class="tracking-tighter row-start-1 col-start-1 text-[8rem] px-6 mt-[2px] -z-10 text-white blur-[1px]">splice</h1>
	<h1 class="tracking-tighter row-start-1 col-start-1 text-[8rem] px-6 mt-[5px] -z-10 text-white">splice</h1>
	<h1 class="tracking-tighter row-start-1 col-start-1 text-[8rem] px-6 text-black">splice</h1>
	<h2 class="text-center mt-[8rem] ml-16 row-start-1 col-start-1 text-[22px] text-white mix-blend-overlay opacity-50">design &amp; web dev</h2>
</div>
{/if}

<!-- <style>
a {
	text-decoration: none;
	color: #333;
}
</style> -->