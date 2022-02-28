<script>
	import { page } from '$app/stores'
</script>

<div class:opacity-0={$page.url.pathname=='/'} class="shrink-0 grid grid-cols-1 grid-rows-1 items-center justify-center">
	<a id="backbutton" href="/" class="row-start-1 col-start-1 z-50 border backdrop-blur border-neutral-700 top-8 left-8 bg-neutral-700 bg-opacity-30 rounded-full p-2 m-2 cursor-pointer">
		<img src="/chevron-left.svg" alt="" srcset="" width="20" height="20">
	</a>
</div>