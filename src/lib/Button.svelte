<script>
	import { page } from '$app/stores'
	import { icons } from '$lib/icons'
	export let url, text, icon, external

	let iconLink, darkIconLink, target = ""

	if (external) { target = "_blank" }
</script>

<a href="{url}" {target} class:is-active={$page.url.pathname === url}
class="grow flex no-underline z-10 grid-cols-[0.75rem_auto_0.75rem] h-12 
bg-white bg-opacity-5 shadow-lg hover:shadow-xl active:shadow-inner hover:bg-opacity-20
 justify-center items-center rounded-tr-xl rounded-bl-xl backdrop-blur-xl text-white">
	<div class="block z-50 justify-self-start self-start w-3 h-3 border-t border-l border-white opacity-20"></div>
	<div class="transition-all uppercase no-underline grow text-center text-base flex items-center justify-center">
		{#if icon}
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
			class="feather feather-tool mr-1">
			{@html icons[icon]}
		</svg>
		{/if}
		{text}
	</div>
	<div class="block z-50 justify-self-end self-end w-3 h-3 border-r border-b border-white opacity-20" />
</a>

<style type="text/postcss">
	.is-active {
		@apply bg-neutral-100 text-neutral-900 cursor-default stroke-neutral-900;
	}
	.is-active:hover {
		@apply bg-neutral-100 text-neutral-900 cursor-default stroke-neutral-900 shadow-none;
	}
</style>