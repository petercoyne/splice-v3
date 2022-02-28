<script>
	import { fade, slide, fly } from 'svelte/transition';
	import { menuShow } from '$lib/stores.js'
	function toggleMenu() {
		$menuShow = !$menuShow;
	}
</script>

<div class="shrink-0 grid grid-cols-1 grid-rows-1 items-center justify-center z-50">
	{#if !$menuShow}
		<a on:click="{toggleMenu}" id="mobilemenubutton"
		class="row-start-1 col-start-1 z-50 border backdrop-blur border-neutral-400 shadow-lg
				top-8 left-8 bg-black bg-opacity-90 rounded-full p-2 m-2 cursor-pointer">
			<img transition:slide src="/menu.svg" alt="" srcset="" width="20" height="20">
		</a>
	{:else}
		<a id="mobileclosebutton" class="row-start-1 col-start-1 z-50 border backdrop-blur border-red-700 top-8 left-8 bg-red-800 bg-opacity-30 rounded-full p-2 m-2 cursor-pointer">
			<img transition:slide src="/x.svg" alt="" srcset="" width="20" height="20">
		</a>
	{/if}
</div>