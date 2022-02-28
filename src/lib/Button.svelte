<script>
	import { page } from '$app/stores'
	export let url, text, icon, external

	let iconLink, darkIconLink, target = ""

	if (typeof(icon) != "undefined") {
		iconLink = `<img src="/${icon}.svg" alt="${icon} icon" class="mr-2"/>`
	} else {
		iconLink = ""
	}

	if (external) { target = "_blank"}
</script>

<a href="{url}" {target} class:is-active={$page.url.pathname === url}
class="transition-all grow flex no-underline z-10 grid-cols-[0.75rem_auto_0.75rem] h-12 bg-neutral-700
bg-opacity-30 backdrop-blur-sm text-white hover:bg-white hover:bg-opacity-10 hover:shadow-md active:shadow-inner active:bg-neutral-900 justify-center items-center rounded-tr-xl rounded-bl-xl">
	<div class="block z-50 justify-self-start self-start w-3 h-3 border-t border-l border-white opacity-20"></div>
	<div class="transition-all uppercase no-underline grow text-center text-sm flex items-center justify-center">
		{@html iconLink}{text}
	</div>
	<div class="block z-50 justify-self-end self-end w-3 h-3 border-r border-b border-white opacity-20" />
</a>

<style type="text/postcss">
	.is-active {
		@apply bg-neutral-400 text-neutral-900 cursor-default stroke-neutral-900;
	}
	.is-active:hover {
		@apply bg-neutral-400 text-neutral-900 cursor-default stroke-neutral-900;
	}
</style>