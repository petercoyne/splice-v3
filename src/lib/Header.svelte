<script>
	import CrossAnimation from '$lib/CrossAnimation.svelte'
	import { fade, slide } from 'svelte/transition'
	import Logo from '$lib/Logo.svelte'
	import Button from '$lib/Button.svelte'
	import { headerExpanded, headerShown, menuShow } from '$lib/stores.js'
	import MobileButton from './MobileButton.svelte'
	import { clickOutside } from "$lib/click_outside.js";

	let styles1, styles2

	$: if (!$headerExpanded || $menuShow) {
		styles1 = "bg-black bg-opacity-25 backdrop-blur-md"
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
	<nav class="hidden sm:grid transition-all duration-1000 z-10 grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-4 md:gap-8 max-w-screen-2xl mx-auto p-8 sm:p-10 md:p-12 xl:p-24 xl:pb-6 {styles2}">
		<div class="dummy flex col-span-1 md:col-span-2 lg:col-span-3">
	
			<!-- <a href="/" transition:fade|local class="-mt-1">
				<CrossAnimation size="2"/>
			</a> -->
			<div transition:fade|local class="z-20">
				<Logo size="0"/>
			</div>
	
		</div>
	
		<div class=""><Button icon="tool" text="Work" url="/work"/></div>
		<div class=""><Button icon="info" text="About" url="/about"/></div>
		<div class=""><Button icon="send" text="Contact" url="/contact"/></div>
	</nav>

	<div class="flex p-6 justify-between items-center sm:hidden">
		<!-- <CrossAnimation size="1"/> -->
		<Logo size="0"/>
		<MobileButton/>
	</div>
</div>
{/if}

{#if $menuShow}
	<div on:click="{toggleMenu}" use:clickOutside on:outclick={toggleMenu} transition:slide
	class="fixed sm:hidden z-30 left-0 right-0 top-24 transition-all duration-1000 backdrop-blur-md {styles1}">
		<nav class="flex gap-4 p-6">
			<Button icon="tool" text="Work" url="/work"/>
			<Button icon="info" text="About" url="/about"/>
			<Button icon="send" text="Contact" url="/contact"/>
		</nav>

	</div>
{/if}