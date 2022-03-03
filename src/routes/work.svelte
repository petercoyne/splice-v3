<script>
	import Button from '$lib/Button.svelte';
	import ButtonSmall from '$lib/ButtonSmall.svelte';
	import Container from '$lib/Container.svelte';
	import { slide } from 'svelte/transition'

	let y
	let activeImage = 1
	import { headerExpanded, headerShown } from '$lib/stores.js';
	$headerShown = true
	$: if (y > 50) { headerExpanded.set(false) } else { headerExpanded.set(true) }
</script>

<svelte:window bind:scrollY={y}/>

<Container>

	<div class="grid grid-cols-1 md:grid-cols-6 gap-8 h-full">

		<div class="md:col-span-3 lg:col-span-4">
			<h4 class="uppercase flex gap-3">
				<a href="/work" class="text-white opacity-50 group hidden">
					<ButtonSmall>
						<svg class="feather feather-refresh-ccw w-4 stroke-neutral-300 group-hover:stroke-sky-500 transition-all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
					</ButtonSmall>
				</a>
				Latest Project
			</h4>
			<hr class="my-4 "/>
			<h3 class="mt-8 text-4xl text-white">The Fuze</h3>
			<div class="flex opacity-60 gap-x-4 gap-y-2 flex-row flex-wrap text-sm my-2">
				<div class="flex gap-2 shrink-0">
					<img src="/calendar.svg" width="20" height="20" alt="Project completed"/>
					<div class="whitespace-nowrap">02/2022</div>
				</div>
				<div class="flex gap-2 shrink-0">
					<img src="/clock.svg" width="20" height="20" alt="Time taken"/>
					<div class="whitespace-nowrap">? Days</div>
				</div>
				<div class="flex gap-2 shrink-0">
					<img src="/activity.svg" width="20" height="20" alt="Activities"/>
					<div class="whitespace-nowrap">Website</div>
				</div>
				<div class="flex gap-2 shrink-0">
					<img src="/tool.svg" width="20" height="20" alt="Activities"/>
					<div class="whitespace-nowrap">SvelteKit, Tailwind 2.0</div>
				</div>
			</div>
			<p class="mt-4 mb-4 text-sm sm:text-base">The Fuze were a Galway band with a unique sound. They released two
				singles in the early 80s on Mulligan Records - 'Stone age man' and 'Sunday morning' but despite having a
				lot of original material did not release any albums until a retrospective compliation, 'A blast from the
				past', released in 2007, 25 years after they split up.
				<a href="https://irishrockers.com/" class="block mt-1 text-xs">-- irishrockers</a>
			</p>
			<div class="mt-8 mb-10 text-sm flex items-center">
				<img src="/chat.svg" alt="comments" class="float-left mr-2 w-8 h-8"/>
				<p class="pl-2 border-l opacity-70">My uncle asked me if I'd be interested in developing a retrospective
					website for his old band. It was a great opportunity to practice my dev skills and I'm pleased
					with how it turned out, particularly the custom music player and navigation elements. I created
					the burning fuse image using an app called <a href="https://fractorium.com/">Fractorium</a>.</p>
			</div>
			<div class="flex gap-4">
				<Button icon="link" text="TheFuze.ie" url="https://thefuze.ie/" external/>
				<!-- <Button icon="link" text="Tricky Machines" url="https://gravitysensation.vercel.app/trickymachines" external/> -->
			</div>
		</div>

		<div class="hidden md:block md:col-span-3 lg:col-span-2">
			<div class="flex justify-between mt-2 md:mt-0">
				<h4 class="uppercase opacity-50">Preview</h4>
				<!-- <h5 class="sm:hidden uppercase text-xs bg-black rounded-md py-[3px] px-2 text-red-500 animate-pulse">Desktop/tablet recommended</h5> -->
			</div>
			<hr class="mt-4"/>
			<div class="">
				<!-- <img src="/fuze.webp" alt="thefuze.ie"/> -->
				<iframe src="https://thefuze.ie" title="description" class="w-full h-128 min-h-full aspect-[9/16]"></iframe>
			</div>
		</div>
	</div>

	<div class="flex justify-between mt-16 md:mt-8">
		<h4 class="uppercase">Older Work (temporary image)</h4>
		<h5 class="flex ml-1 text-center sm:hidden uppercase text-xs bg-black rounded-md py-[3px] px-2 text-red-500 animate-pulse">Desktop/tablet recommended</h5>
	</div>
	<hr class="my-4 "/>
	<a href="/older-work.webp" target="_blank"><img src="/older-work.webp" alt="older work" srcset="" class="rounded-2xl"/></a>

</Container>