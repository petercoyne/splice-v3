import { writable } from 'svelte/store';

export const headerExpanded = writable(true)
export const headerShown = writable(false)

export const menuShow = writable(false)

export const intervalStarted = writable(false)
export const rot1 = writable(0)
export const rot2 = writable(0)
export const gap1 = writable(0)
export const pad1 = writable(0)