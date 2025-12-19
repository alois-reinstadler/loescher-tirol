<script lang="ts">
	import { onMount } from 'svelte';
	import { Snowflake } from './snowflake';
	import type { SnowfallConfig } from './types';

	interface Props extends SnowfallConfig {
		/** Additional CSS classes for the canvas */
		class?: string;
		/** CSS styles for the canvas */
		style?: string;
	}

	let {
		color = '#dee4fd',
		snowflakeCount = 150,
		radius = [0.5, 3] as [number, number],
		speed = [1, 3] as [number, number],
		wind = [-0.5, 2] as [number, number],
		rotationSpeed = [-1, 1] as [number, number],
		changeFrequency = 200,
		class: className = '',
		style = ''
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let snowflakes: Snowflake[] = [];
	let animationFrameId: number;
	let lastFrameTime: number = 0;

	// Build config object for snowflakes
	let config = $derived<SnowfallConfig>({
		color,
		snowflakeCount,
		radius,
		speed,
		wind,
		rotationSpeed,
		changeFrequency
	});

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set initial canvas size
		resizeCanvas();

		// Create initial snowflakes
		createSnowflakes();

		// Start animation loop
		lastFrameTime = performance.now();
		animationFrameId = requestAnimationFrame(animate);

		// Handle window resize
		const resizeObserver = new ResizeObserver(() => {
			const prevWidth = canvas.width;
			const prevHeight = canvas.height;
			resizeCanvas();
			snowflakes.forEach((sf) => sf.resizeHandler(prevWidth, prevHeight));
		});
		resizeObserver.observe(canvas.parentElement || document.body);

		return () => {
			cancelAnimationFrame(animationFrameId);
			resizeObserver.disconnect();
		};
	});

	function resizeCanvas(): void {
		const parent = canvas.parentElement;
		if (parent) {
			canvas.width = parent.clientWidth;
			canvas.height = parent.clientHeight;
		} else {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}

	function createSnowflakes(): void {
		snowflakes = [];
		for (let i = 0; i < snowflakeCount; i++) {
			snowflakes.push(new Snowflake(canvas, config));
		}
	}

	function animate(currentTime: number): void {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Calculate delta time for smooth animation
		const deltaTime = currentTime - lastFrameTime;
		lastFrameTime = currentTime;

		// Calculate frames passed (target 60fps)
		const framesPassed = deltaTime / (1000 / 60);

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update and draw each snowflake
		snowflakes.forEach((snowflake) => {
			snowflake.update(framesPassed);
			snowflake.draw(ctx);
		});

		animationFrameId = requestAnimationFrame(animate);
	}

	// React to snowflakeCount changes
	$effect(() => {
		if (!canvas) return;

		const currentCount = snowflakes.length;
		const targetCount = snowflakeCount;

		if (targetCount > currentCount) {
			// Add more snowflakes
			for (let i = currentCount; i < targetCount; i++) {
				snowflakes.push(new Snowflake(canvas, config));
			}
		} else if (targetCount < currentCount) {
			// Remove snowflakes
			snowflakes = snowflakes.slice(0, targetCount);
		}
	});

	// React to config changes (update existing snowflakes)
	$effect(() => {
		snowflakes.forEach((sf) => sf.updateConfig(config));
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none {className}" {style} aria-hidden="true"
></canvas>

<style>
	canvas {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
