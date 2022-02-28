<script>
	import Container from '$lib/Container.svelte';
	let y
	import { headerExpanded, headerShown } from '$lib/stores.js';
	$headerShown = true
	$: if (y > 10) { headerExpanded.set(false) } else { headerExpanded.set(true) }
</script>

<svelte:window bind:scrollY={y}/>
<Container>
<div class="grid h-full min-h-[12rem] object-cover rounded-xl overflow-hidden">
	<img src="/mtgable.webp" alt="Drone shot from Mt. Gable" srcset="" class="w-full h-full object-cover">
</div>
<p class="text-right text-xs text-neutral-600">Drone shot from Mt. Gable, Co. Galway</p>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-16 mt-8">
	<div>
		<h4 class="uppercase">Welcome</h4>
		<hr class="my-4"/>
		<div class="grid grid-cols-[4rem_1px_auto] sm:grid-cols-[8rem_auto] gap-4 md:gap-8 items-center">
			<img src="/profile.webp" alt="Profile" class="self-start lg:mt-8" />
			<div class="vertica-divider border-r border-neutral-700 h-full sm:hidden"></div>
			<div>
				<h3 class="text-3xl text-white mb-2">Hello :)</h3>
				<p class="leading-6 text-sm sm:text-base">
					I'm a designer &amp; frontend developer based in the west of Ireland. This site is a platform to
					play with ideas for now, my plan is to get a bit more experience with development before I start
					actively seeking work.
				</p>
			</div>
		</div>
	</div>
	<div>
		<h4 class="uppercase">Tools of the trade</h4>
		<hr class="my-4"/>
		<div class="grid grid-cols-1 sm:grid-cols-[8rem_auto] lg:grid-cols-[10rem_auto] gap-4 md:gap-8 items-center">
			<div class="self-start lg:mt-8 flex items-center justify-center max-w-full">
				<img src="/sveltekit-logo-noglow.webp" alt="SvelteKit" class="shrink min-w-0 max-h-32 m-4 sm:scale-125"/>
				<img src="/tailwindlogo.png" alt="TailwindCSS" class="shrink min-w-0 max-h-32 m-4 bg-neutral-300 rounded-lg sm:hidden"/>
			</div>
			<div>
				<h3 class="text-3xl text-white mb-2 text-center sm:text-left hidden lg:block">Technologies</h3>
				<p class="leading-6 text-sm sm:text-base text-center sm:text-left">
					I develop sites using modern frontend development tools such as <a href="http://kit.svelte.dev">SvelteKit</a>,
					<a href="http://tailwindcss.com">TailwindCSS</a>, <a href="http://github.com">GitHub</a> and
					<a href="http://code.visualstudio.com">VSCode</a>. These tools give a huge advantage in <b>speed</b>,
					<b>maintainability</b> and <b>reliability</b> over
					traditional workflows e.g. <span class="line-through decoration-red-600">WordPress</span>.
				</p>
			</div>
		</div>
	</div>
</div>


</Container>