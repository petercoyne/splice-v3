<script>
	import { onMount, afterUpdate } from 'svelte';
	import { intervalStarted, rot1, rot2, gap1, pad1 } from '$lib/stores.js';

	onMount(async () => {
		if (typeof intervalGoing == 'undefined') {
			console.log("starting interval")
			var interval = setInterval(function () {
				$rot1 = Math.floor(Math.random() * 180)
				$rot2 = Math.floor(Math.random() * 180)
				$gap1 = Math.floor(Math.random() * 10)
				$pad1 = Math.floor(Math.random() * 30)
			}, 3000);
			var intervalGoing = true;
		}
	});

</script>