<script>
	import { fly, fade } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';
	import Button from '$lib/Button.svelte';
	import { headerExpanded, headerShown } from '$lib/stores.js';
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
<video transition:fade id="flamebg" src="/2-pass-500-vslow-grey-grain.mp4" autoplay playsinline muted loop 
class="opacity-95 fixed mix-blend-soft-light -z-50 w-screen h-screen object-cover object-center blur-md overflow-hidden"/>
<!-- <video transition:fade id="flamebg2" src="/2-pass-500.mp4" autoplay playsinline muted loop 
class="opacity-95 fixed mix-blend-luminosity -z-50 w-screen h-screen object-cover object-center blur-md overflow-hidden"/> -->

<div transition:fade class="fixed flex flex-col h-full w-full justify-between items-center top-0 bottom-0 left-0 right-0 ">

	<div class="grow grid items-stretch justify-center mt-24">
		<Logo size="1"/>
	</div>


	<nav class="w-full p-6 grow-0">
		<div in:fly="{{ y: 200, duration: 2000 }}"
		class="w-full max-w-screen-md mx-auto max-h-full flex gap-4 md:pb-8 lg:pb-16">
			<Button icon="tool" text="Work" url="/work"/>
			<Button icon="info" text="About" url="/about"/>
			<Button icon="send" text="Contact" url="/contact"/>
		</div>
	</nav>

</div>
{/if}
