<script>
	import Container from '$lib/Container.svelte';
	let y
	import { headerExpanded, headerShown } from '$lib/stores.js';
	$headerShown = true
	$: if (y > 10) { headerExpanded.set(false) } else { headerExpanded.set(true) }

	// let imageZoomed = false, zoomStyle = "";
	// function toggleZoom() {
	// 	imageZoomed = !imageZoomed
	// 	if (imageZoomed) {
	// 		zoomStyle = "absolute left-0 right-0 -z-40"
	// 	} else {
	// 		zoomStyle = ""
	// 	}
	// }

</script>

<svelte:window bind:scrollY={y}/>
<Container>
<div class="grid h-full grid-cols-1 grid-rows-1 min-h-[12rem] object-cover rounded-tr-xl rounded-bl-xl overflow-hidden">
	<img src="/mtgable.webp" alt="Drone shot from Mt. Gable" srcset="" width="2560" height="601"
		class="col-start-1 row-start-1 w-full h-full object-cover transition-all mix-blend-luminosity"/>
	<!-- <img src="/zoom-in.svg" alt="Zoom in" class="self-end justify-self-end col-start-1 row-start-1 z-20 p-2 bg-black rounded-tl-lg"/> -->
</div>
<p class="text-right text-xs text-white opacity-30">Drone shot from Mt. Gable, Co. Galway</p>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 mt-8">
	<div>
		<h4 class="uppercase">Welcome</h4>
		<hr class="my-4 opacity-10"/>
		<div class="grid grid-cols-[4rem_1px_auto] sm:grid-cols-[8rem_auto] gap-4 md:gap-8 items-start">
			<img src="/profile.webp" alt="Drone Selfie" title="Drone Selfie" class="self-start lg:mt-8" />
			<div class="vertical-divider border-r border-white opacity-20 h-full sm:hidden"></div>
			<div>
				<h3 class="text-3xl mb-2 lg:mt-2 text-white">Hello :)</h3>
				<p class="leading-6 text-sm sm:text-base">
					I'm a designer &amp; frontend developer based in the west of Ireland. This site is a platform to
					play with ideas for now, my plan is to get a bit more experience with development before I start
					actively seeking work.
				</p>
			</div>
		</div>
	</div>
	<div>
		<h4 class="uppercase">Tools</h4>
		<hr class="my-4 opacity-10"/>
		<div class="grid grid-cols-1 sm:grid-cols-[8rem_auto] lg:grid-cols-[10rem_auto] gap-4 md:gap-8 items-start">
			<div class="self-start lg:mt-8 flex items-center justify-center max-w-full">
				<img src="/sveltekit-logo-noglow.webp" alt="SvelteKit" title="SvelteKit" class="shrink min-w-0 max-h-32 m-4 sm:scale-125"/>
				<img src="/tailwindlogo.png" alt="TailwindCSS" title="TailwindCSS" class="shrink min-w-0 max-h-32 m-4 bg-white bg-opacity-30 rounded-lg sm:hidden"/>
			</div>
			<div class="md:self-center lg:self-start">
				<h3 class="text-3xl my-2 text-center sm:text-left hidden lg:block text-white">Technologies</h3>
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