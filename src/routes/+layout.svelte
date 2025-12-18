<script lang="ts">
	// import assets
	import '@fontsource/geist-sans';
	import '@fontsource/geist-mono @fontsource/geist-sans';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	// theme support
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />

{@render children()}
