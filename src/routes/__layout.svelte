<script>
	import "../app.css"
	import Header from '$lib/Header.svelte'
	import AnimController from "$lib/AnimController.svelte"
	import Footer from "$lib/Footer.svelte"
	import { headerExpanded, headerShown } from '$lib/stores.js'
</script>
<!-- <AnimController/> -->

{#if $headerShown}
	<Header/>
{/if}
<slot/>
<Footer/>