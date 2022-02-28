<script>
	import Button from '$lib/Button.svelte';
	import ButtonSmall from '$lib/ButtonSmall.svelte';
	import Container from '$lib/Container.svelte';
	import { slide } from 'svelte/transition'

	let y
	let activeImage = 1
	import { headerExpanded, headerShown } from '$lib/stores.js';
	$headerShown = true
	$: if (y > 20) { headerExpanded.set(false) } else { headerExpanded.set(true) }
</script>

<svelte:window bind:scrollY={y}/>


<Container>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16">

		<div>
			<h4 class="uppercase flex gap-3">
				<a href="/work" class="text-sky-500 group hidden">
					<ButtonSmall>
						<svg class="feather feather-refresh-ccw w-4 stroke-neutral-300 group-hover:stroke-sky-500 transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
					</ButtonSmall>
				</a>
				Latest Project
			</h4>
			<hr class="my-4"/>
			<div class="flex opacity-40 gap-4 flex-row text-sm">
				<div class="flex gap-2 shrink-0">
					<img src="/calendar.svg" alt="Project completed"/>
					<div class="whitespace-nowrap">02/2022</div>
				</div>
				<div class="flex gap-2 shrink-0">
					<img src="/clock.svg" alt="Time taken"/>
					<div class="whitespace-nowrap">2 Days</div>
				</div>
				<div class="flex gap-2 shrink-0">
					<img src="/activity.svg" alt="Activities"/>
					<div class="whitespace-nowrap">Website, Logo</div>
				</div>
			</div>
			<h3 class="mt-8 text-4xl text-white">Gravity Sensation / Tricky Machines</h3>
			<p class="mt-2 mb-10 text-sm text-neutral-400">Tricky Machines is a physics game developed by dev_archee with a built-in vehicle editor and map maker. Create your own scenarios or choose from hundreds of community made challenges.</p>
			<div class="flex gap-4">
				<Button icon="link" text="Gravity Sensation" url="https://gravitysensation.vercel.app"/>
				<Button icon="link" text="Tricky Machines" url="https://gravitysensation.vercel.app/trickymachines"/>
			</div>
		</div>

		<div>
			<div class="flex justify-between">
				<h4 class="uppercase text-neutral-500">Gallery</h4>
				<h5 class="sm:hidden uppercase text-xs bg-black rounded-md py-[3px] px-2 text-red-500 animate-pulse">Desktop/tablet recommended</h5>
			</div>
			<hr class="my-4"/>
			<div class="flex flex-col sm:flex-row flex-auto gap-4 w-full">
				<div on:click={() => {activeImage = 1}} class="sm:hover:bg-neutral-700 border border-neutral-800 sm:hover:border-neutral-400 sm:cursor-pointer"><img src="/work/gs1-thumb.webp" alt="Gravity Sensation 1" class="flex-1"/></div>
				<div on:click={() => {activeImage = 2}} class="sm:hover:bg-neutral-700 border border-neutral-800 sm:hover:border-neutral-400 sm:cursor-pointer"><img src="/work/gs2-thumb.webp" alt="Gravity Sensation 2" class="flex-1"/></div>
				<div on:click={() => {activeImage = 3}} class="sm:hover:bg-neutral-700 border border-neutral-800 sm:hover:border-neutral-400 sm:cursor-pointer"><img src="/work/gs3-thumb.webp" alt="Gravity Sensation 3" class="flex-1"/></div>
			</div>
			<hr class="mt-4 mb-8 opacity-20"/>
			<a href="/work/gs{activeImage}.webp" target="_blank"
			class="object-cover hidden sm:block min-h-0 max-h-full overflow-hidden">
				<img src="/work/gs{activeImage}.webp" alt="Tricky Machines website screenshot" class="object-cover w-full"/>
			</a>
		</div>
	</div>

	<h4 class="uppercase mt-12">Older Work</h4>
	<hr class="my-4"/>
	<a href="/older-work.webp" target="_blank"><img src="/older-work.webp" alt="older work" srcset=""/></a>

</Container>