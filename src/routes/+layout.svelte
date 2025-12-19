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

	import { Snowfall } from '$lib/components/snowfall';

	let { children } = $props();

	const isWinter = [11, 0, 1].includes(new Date().getMonth());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />

{#if isWinter}
	<div class="fixed inset-0 -z-30">
		<Snowfall
			color="#ffffff"
			snowflakeCount={200}
			radius={[0.5, 3]}
			speed={[1, 3]}
			wind={[-0.5, 2]}
		/>
	</div>
{/if}

<Header />

{@render children()}

<Footer />
