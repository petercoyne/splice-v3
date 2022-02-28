<script>
	import { clickOutside } from "$lib/click_outside.js";
	import { fade, slide, fly } from 'svelte/transition';
	import Button from '$lib/Button.svelte'
	import { menuShow } from '$lib/stores.js'

	function toggleMenu() {
		$menuShow = !$menuShow;
	}
</script>



{#if $menuShow}
	<div on:click="{toggleMenu}" use:clickOutside on:outclick={toggleMenu} transition:fade
	class="fixed z-40 left-0 right-0 top-0 bottom-0
	transition-all duration-1000 text-center p-8 flex flex-col justify-center items-center">
	<Button url="/" title="Home" delay="0"/><br/>
	<Button url="/work/" title="Work Examples" delay="100"/><br/>
	<Button url="/about/" title="About Me" delay="200"/><br/>
	<Button url="/tech/" title="Technologies" delay="300"/>
	</div>
{/if}