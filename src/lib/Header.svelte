<script>
	import CrossAnimation from '$lib/CrossAnimation.svelte'
	import { fade } from 'svelte/transition'
	import Logo from '$lib/Logo.svelte'
	import Button from '$lib/Button.svelte'
	import { headerExpanded, headerShown, menuShow } from '$lib/stores.js'
	import MobileButton from './MobileButton.svelte'
	import { clickOutside } from "$lib/click_outside.js";

	let styles1, styles2

	$: if (!$headerExpanded) {
		styles1 = "bg-black bg-opacity-10 backdrop-blur-md"
		styles2 = "!py-4"
	} else {
		styles1 = ""
		styles2 = ""
	}

	function toggleMenu() {
		$menuShow = !$menuShow;
	}

</script>
{#if $headerShown}
<div transition:fade|local class="z-20 fixed transition-all duration-100 top-0 left-0 right-0 {styles1}">
	<div class="hidden sm:grid transition-all duration-1000 z-10 grid-cols-2 items-center gap-8 xl:gap-16 max-w-screen-2xl mx-auto p-8 sm:p-10 md:p-12 xl:p-24 xl:pb-6 {styles2}">
		<div class="dummy flex">
	
			<!-- <a href="/" transition:fade|local class="-mt-1">
				<CrossAnimation size="2"/>
			</a> -->
			<div transition:fade|local class="z-20">
				<Logo size="0"/>
			</div>
	
		</div>
	
		<nav class="flex gap-4">
			<Button text="Work" url="/work"/>
			<Button text="About" url="/about"/>
			<Button text="Contact" url="/contact"/>
		</nav>

	</div>

	<div class="flex p-4 justify-between items-center sm:hidden">
		<!-- <CrossAnimation size="1"/> -->
		<Logo size="0"/>
		<MobileButton/>
	</div>
</div>
{/if}

{#if $menuShow}
	<div on:click="{toggleMenu}" use:clickOutside on:outclick={toggleMenu} transition:fade
	class="fixed z-30 left-0 right-0 top-20 pt-1 transition-all duration-1000 backdrop-blur-md bg-neutral-800 bg-opacity-90">
		<nav class="flex gap-4 p-6">
			<Button text="Work" url="/work"/>
			<Button text="About" url="/about"/>
			<Button text="Contact" url="/contact"/>
		</nav>

	</div>
{/if}