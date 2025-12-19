<script lang="ts">
	// import assets
	// import '@fontsource-variable/geist';
	// import '@fontsource-variable/geist-mono';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	// theme support
	import { ModeWatcher } from 'mode-watcher';

	// layout components
	import Header from './(components)/header.svelte';
	import Footer from './(components)/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />

<Header />

{@render children()}

<Footer />
