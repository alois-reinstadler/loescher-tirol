<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages.js';
	import { Silk } from '$lib/components/silk';

	import { mode } from 'mode-watcher';

	let color = $derived(mode.current === 'light' ? '#FFFFFF' : '#3a3540');
</script>

<section class="relative grid h-svh w-full place-items-center overflow-hidden">
	<!-- Silk shader background -->
	<div class="absolute inset-0 -z-50">
		<Silk speed={3} scale={0.8} {color} noiseIntensity={1.2} rotation={0.2} />
	</div>

	<!-- Bottom gradient fade -->
	<!-- <div
		class="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none -z-40"
	></div> -->

	<!-- bottom wave gradient fade -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
		class="absolute bottom-0 -z-40 w-full translate-y-1/6 scale-x-110 fill-background blur-lg"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill-opacity="0.30"
				d="M 0 190 L 0 105.28498658235549 C 180 105.28498658235549 180 107.24811596345542 360 107.24811596345542 C 540 107.24811596345542 540 154.48548228675708 720 154.48548228675708 C 900 154.48548228675708 900 128.80057021631123 1080 128.80057021631123 C 1260 128.80057021631123 1260 168.2400175563278 1440 168.2400175563278 C 1440 168.2400175563278 1440 320 1440 320 L 1440 320 L 0 320 Z"
			></path>
			<path
				fill-opacity="0.55"
				d="M 0 230 L 0 152.65948828612463 C 180 152.65948828612463 180 238.6781114965858 360 238.6781114965858 C 540 238.6781114965858 540 180.90411221947156 720 180.90411221947156 C 900 180.90411221947156 900 179.37993897672715 1080 179.37993897672715 C 1260 179.37993897672715 1260 124.97557911984063 1440 124.97557911984063 C 1440 124.97557911984063 1440 320 1440 320 L 1440 320 L 0 320 Z"
			></path>
			<path
				fill-opacity="1.00"
				d="M 0 270 L 0 243.8003483670879 C 180 243.8003483670879 180 205.19452507509718 360 205.19452507509718 C 540 205.19452507509718 540 219.13115398138035 720 219.13115398138035 C 900 219.13115398138035 900 237.59069204128923 1080 237.59069204128923 C 1260 237.59069204128923 1260 247.62404085406877 1440 247.62404085406877 C 1440 247.62404085406877 1440 320 1440 320 L 1440 320 L 0 320 Z"
			></path>
		</svg>
	</svg>

	<div class="relative">
		<div class="mx-auto max-w-7xl px-6">
			<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
				<!-- <div>
					<a
						href="#about"
						class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
					>
						<span class="text-foreground text-sm">Seit 1960 in der Textilindustrie</span>
						<span class="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
						></span>
						<div
							class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
						>
							<div
								class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
							>
								<span class="flex size-6">
									<ArrowRight class="m-auto size-3" />
								</span>
								<span class="flex size-6">
									<ArrowRight class="m-auto size-3" />
								</span>
							</div>
						</div>
					</a>
				</div> -->
				<h1 class="mt-8 text-6xl font-bold text-balance md:text-7xl lg:mt-16 xl:text-[5.25rem]">
					Löscher Gardinen
				</h1>
				<p class="mx-auto mt-8 max-w-2xl text-lg text-balance">
					Qualität, Innovation und Tradition vereint. Ihr Partner für hochwertige Gardinen und
					textile Raumlösungen aus Tirol — weltweit geschätzt seit über 60 Jahren.
				</p>
				<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
					<div
						class="border bg-foreground/10 p-0.5"
						style="border-radius: calc(0.5rem + 0.125rem + 4px);"
					>
						<Button href="#contact" size="lg" class="rounded-xl px-5 text-base">
							<span class="text-nowrap">Kontaktieren Sie uns</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
