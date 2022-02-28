<script>
	import ChatBubble from '$lib/ChatBubble.svelte'
	import MessageBox from '$lib/MessageBox.svelte'
	import Button from '$lib/Button.svelte'
	import ButtonSmall from '$lib/ButtonSmall.svelte'
	import { fade } from 'svelte/transition'
	import { chatCompressed } from '$lib/stores.js'
</script>

<!-- class:hidden={$chatCompressed} -->

{#if !$chatCompressed}
<div transition:fade  class="fixed flex flex-col z-50 bottom-0 left-0 right-0 justify-end items-start
			w-full max-w-2xl sm:left-auto sm:right-4 overscroll-contain">
	<div class="grid items-end grid-cols-[48px_auto] w-full bg-transparent
				bg-neutral-900 bg-opacity-30 backdrop-blur-xl rounded-t-xl">
		<div class="self-end grid">
			<div on:click={() => {$chatCompressed = true}} class="m-4 w-8 h-8 grid justify-center items-center rounded-full border border-neutral-600 bg-neutral-800 self-end cursor-pointer">
				<img src="/x.svg" alt="Close chat" class="opacity-50"/>
			</div>
			<img src="/profile.webp" alt="Profile" class="w-8 m-4 self-end"/>
		</div>
		<div class="p-4">
			<ChatBubble delay="500" typing="6500">
				<b>Hello :)</b>, I'm Peter. I design and build <b>responsive</b> websites
				which are <b>affordable</b> and <b>easy to use</b>.
			</ChatBubble>
			<ChatBubble delay="8600" typing="11000">
				I build on next generation web technologies: <b>SvelteKit</b>, <b>StoryBlok</b>,
				<b>TailwindCSS</b>, <b>Vercel</b> and <b>GitHub</b>.
			</ChatBubble>
			<ChatBubble delay="12000" typing="16000">
				Compared to older technologies like Wordpress, these sites are <b>cheaper to run</b>,
				<b>easier to maintain</b>, <b>faster to develop</b> and <b>more customisable</b>.
			</ChatBubble>
			<ChatBubble delay="18000" typing="21000">
				<div class="-mb-2">
					<div class="-mt-2 mb-2">Want to learn more?</div>
					<ButtonSmall url="/work/" title="Work"/>
					<ButtonSmall url="/about/" title="About"/>
					<ButtonSmall url="/tech/" title="Tech"/>
				</div>
			</ChatBubble>
		</div>
	</div>
	<MessageBox/>
</div>

{:else}

<div transition:fade class="p-4 fixed flex bottom-0 right-4 bg-neutral-900 rounded-t-lg">
	<Button url="/work/" title="Work" large="false"/>
	<Button url="/about/" title="About" large="false"/>
	<Button url="/tech/" title="Tech" large="false"/>
	<div on:click={() => {$chatCompressed = false}} class="cursor-pointer">
		<img  src="/profile.webp" alt="Profile" class="w-10 rounded-full border border-neutral-900"/>
	</div>
</div>
{/if}