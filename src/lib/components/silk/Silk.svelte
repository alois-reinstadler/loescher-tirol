<script lang="ts">
	import { Canvas } from '@threlte/core';
	import SilkPlane from './SilkPlane.svelte';

	interface Props {
		speed?: number;
		scale?: number;
		color?: string;
		noiseIntensity?: number;
		rotation?: number;
		class?: string;
	}

	let {
		speed = 5,
		scale = 1,
		color = '#7B7481',
		noiseIntensity = 1.5,
		rotation = 0,
		class: className = ''
	}: Props = $props();
</script>

<div class="h-full w-full {className}">
	<Canvas>
		<SilkPlane {speed} {scale} {color} {noiseIntensity} {rotation} />
	</Canvas>
</div>
