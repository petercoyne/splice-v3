<script>
	export let delay, typing;
	import { fade, slide, fly } from 'svelte/transition';
	import Typing from '$lib/Typing.svelte'

	let visible = false
	setTimeout(() => {visible = true}, delay)
	let isTyping = true
	setTimeout(() => {isTyping = false}, typing)
</script>

{#if visible}
	<div transition:slide class="p-4 mt-2 leading-6 text-sm inline-block
				bg-gradient-to-b from-[rgba(34,34,34,0.8)] to-[rgba(22,22,22,0.9)]
				rounded-2xl backdrop-blur-lg sm:backdrop-blur-none
				border border-neutral-900">
		{#if isTyping}
		<div transition:slide>
			<Typing/>
		</div>
		{:else}
		<div transition:slide>
			<slot/>
		</div>
		{/if}
	</div>
{/if}