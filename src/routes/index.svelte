<script>
	import CrossAnimation from '$lib/CrossAnimation.svelte'
	import { fly } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';
	import Button from '$lib/Button.svelte';
	let shrinkLogo = false
	import { headerExpanded, headerShown, rot1 } from '$lib/stores.js';
	$headerShown = false

	let y
	$: if (y > 20) {
		headerExpanded.set(false)
	} else {
		headerExpanded.set(true)
	}
</script>

<svelte:window bind:scrollY={y}/>

{#if $headerShown == false}
<div class="fixed flex flex-col h-full w-full justify-around items-center top-0 bottom-0 left-0 right-0 ">

	<div class="grid items-stretch justify-center mb-8 mt-16">
		<Logo size="1"/>
	</div>

	<div class="h-32 w-full max-w-full max-h-full grow mb-16 p-4">
		<CrossAnimation size="3"/>
	</div>

	<nav class="w-full p-4 grow-0">
		<div in:fly="{{ y: 200, duration: 2000 }}"
		class="w-full max-w-screen-md mx-auto max-h-full flex gap-4 md:pb-8 lg:pb-16">
			<Button text="Work" url="/work"/>
			<Button text="About" url="/about"/>
			<Button text="Contact" url="/contact"/>
		</div>
	</nav>

</div>
{/if}
