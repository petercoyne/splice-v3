<script>
	import Button from "$lib/Button.svelte";
import Container from "$lib/Container.svelte";
	let y
	import { headerExpanded, headerShown } from '$lib/stores.js';
	$headerShown = true
	$: if (y > 10) { headerExpanded.set(false) } else { headerExpanded.set(true) }
</script>
<svelte:window bind:scrollY={y}/>
<Container>
	<h4 class="uppercase text-neutral-500">Contact Details</h4>
	<hr class="mt-4 mb-8 border-neutral-500"/>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 md:mt-8">
		<div>
			<h1 class="text-4xl mb-2 text-white">Get in touch!</h1>
			<p class="leading-7">
				I'm looking for web projects with a bit of interactivity, or maybe something that has basic
				ecommerce elements. If you have an idea for a project, feel free to contact me.
			</p>
		</div>
		<div class="grid md:grid-cols-4 gap-4 md:items-center">
			<Button icon="send" url="mailto:02-walk.gardens@icloud.com" text="Email"/>
			<Button icon="instagram" url="https://www.instagram.com/acous/" text="Instagram"/>
			<Button icon="twitter" url="https://twitter.com/cows/" text="Twitter"/>
			<Button icon="github" url="https://github.com/petercoyne/" text="GitHub"/>
		</div>
	</div>

</Container>