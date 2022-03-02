<script>
	import { fade, slide, fly } from 'svelte/transition';
	import { menuShow } from '$lib/stores.js'
	function toggleMenu() {
		$menuShow = !$menuShow;
	}
</script>

<div class="shrink-0 grid grid-cols-1 grid-rows-1 items-center justify-center z-50">
	{#if !$menuShow}
	<a on:click="{toggleMenu}" transition:slide id="mobilemenubutton"
	class=" row-start-1 col-start-1 transition-all grow flex no-underline z-10 grid-cols-[0.75rem_auto_0.75rem] h-12 bg-white bg-opacity-20 shadow-xl hover:shadow-lg active:shadow-inner 
	 justify-center items-center rounded-tr-xl rounded-bl-xl bg-blend-overlay text-white">
		<div class="block z-50 justify-self-start self-start w-3 h-3 border-t border-l border-white opacity-30"></div>
		<div class="transition-all uppercase no-underline grow text-center text-sm flex items-center justify-center">
			<img transition:slide src="/menu.svg" alt="" srcset="" width="20" height="20">
		</div>
		<div class="block z-50 justify-self-end self-end w-3 h-3 border-r border-b border-white opacity-30" />
	</a>
	{:else}
		<a id="mobileclosebutton" transition:slide  class="row-start-1 col-start-1 z-50 border backdrop-blur border-red-700 top-8 left-8 bg-red-800 bg-opacity-30 rounded-full p-3 cursor-pointer">
			<img transition:slide src="/x.svg" alt="" srcset="" width="20" height="20">
		</a>
	{/if}
</div>
<!-- <div class="shrink-0 grid grid-cols-1 grid-rows-1 items-center justify-center z-50">
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
</div> -->