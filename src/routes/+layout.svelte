<script module lang="ts">
	const flakeCount = navigator.hardwareConcurrency < 4 ? 50 : 150;
	const isWinter = ![11, 0, 1].includes(new Date().getMonth());
	const loadSnow = () => import('$lib/components/snowfall').then((module) => module.Snowfall);
</script>

<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	// theme and i18n support
	import { ModeWatcher, mode } from 'mode-watcher';
	import { createTranslations, translations } from '$lib/hooks/i18n';
	import { prefersReducedMotion } from '$lib/hooks/motion-preferences';

	// layout components
	import Header from './(components)/header.svelte';
	import Footer from './(components)/footer.svelte';

	let { children } = $props();

	createTranslations({ translations, defaultLocale: 'de' });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />

<!-- if it's winter, show snow -->
{#if isWinter && !prefersReducedMotion.current}
	{#await loadSnow()}
		<!-- empty block / do nothing -->
	{:then Snowfall}
		<div class="fixed inset-0 -z-30">
			<Snowfall
				color={mode.current === 'dark' ? '#ffffff' : '#000000'}
				snowflakeCount={flakeCount}
				radius={[0.5, 3]}
				speed={[1, 3]}
				wind={[-0.5, 2]}
			/>
		</div>
	{:catch err}
		<!-- empty block / do nothing -->
	{/await}
{/if}

<Header />

{@render children()}

<Footer />
