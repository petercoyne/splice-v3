<script>
import { afterUpdate } from 'svelte';
import { rot1, rot2, pad1, gap1, headerExpanded } from '$lib/stores.js';

export let size

let twstring, bgcolor, arrowsize, multiplier
let secondArrows, occlusionGrid

if (size == 1) {
	twstring = "w-10 h-10 mx-2"
	arrowsize = "w-1 h-1 m-1"
	multiplier = 1
} else if (size == 2) {
	twstring = "w-16 h-16"
	arrowsize = "w-2 h-2 m-2"
	multiplier = 1
} else if (size == 3) {
	twstring = "h-full w-full mx-auto"
	arrowsize = "w-4 h-4 m-4"
	multiplier = 4
}

$: if (!$headerExpanded) {
	bgcolor = "bg-white"
} else {
	bgcolor = "bg-black bg-opacity-50 backdrop-blur-xl mix-blend-darken shadow-[0_0_60px_10px_rgba(0,0,0,1)]"
}

afterUpdate(async () => {
	secondArrows.style.transform = `rotate(${$rot1}deg)`
	occlusionGrid.style.transform = `rotate(${$rot2}deg)`
	secondArrows.style.padding = $pad1 + '%'
	occlusionGrid.style.gap = $gap1 * size * multiplier + 'px'
});

</script>
<div class="grid grid-cols-1 grid-rows-1 mix-blend-overlay aspect-square items-center justify-center {twstring}">
	<video id="flame" class="mix-blend-overlay -z-30 w-full h-full max-w-full mx-auto aspect-square object-contain" src="/2-pass-500-vslow-grey-grain.mp4" autoplay playsinline muted loop />
	<div id="secondarrows" bind:this={secondArrows}
		 class="-z-20 opacity-0 max-h-full max-w-full h-full aspect-square grid items-center justify-center mx-auto grid-rows-2 grid-cols-2  row-start-1 col-start-1 transition-all duration-1000">
		<div class="block justify-self-start self-start {arrowsize} border-t border-l border-black opacity-50"/>
		<div class="block justify-self-end self-start {arrowsize} border-t border-r border-black opacity-50"/>
		<div class="block self-end {arrowsize} border-l border-b border-black opacity-50"/>
		<div class="block justify-self-end self-end {arrowsize} border-r border-b border-black opacity-50" />
	</div>
	<div
		id="flamegrid" bind:this={occlusionGrid}
		class="w-full max-h-full grid grid-cols-2 -z-30 mx-auto aspect-square row-start-1 col-start-1">
		<div id="flameq1" class="flamequad {bgcolor}">
			<div class="rounded-3xl justify-self-end self-end {arrowsize} border-r border-b border-black opacity-50"/>
		</div>
		<div id="flameq2" class="flamequad {bgcolor}">
			<div class="rounded-3xl self-end {arrowsize} border-l border-b border-black opacity-50" />
		</div>
		<div id="flameq3" class="flamequad {bgcolor}">
			<div class="rounded-3xl justify-self-end {arrowsize} border-r border-t border-black opacity-50"/>
		</div>
		<div id="flameq4" class="flamequad {bgcolor}">
			<div class="rounded-3xl {arrowsize} border-l border-t border-black opacity-50" />
		</div>
	</div>
</div>

<style type="text/postcss">
#flame {
    mask: url(/circle-smaller.svg);
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    grid-row-start: 1;
    grid-column-start: 1;
    transition: transform 1s;
}

#flamegrid {
    transition: all 2s;
    transform: rotate(0deg);
	gap: 3px;

	mask: url(/circle.svg);
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
	/* opacity: 80; */
	/* mix-blend-mode: overlay; */
}

.flamequad {
	display: grid;
	transition: all 100m;
	@apply rounded-2xl;
}
</style>