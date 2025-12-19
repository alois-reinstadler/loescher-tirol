<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	export const historyLinks: Record<'year' | 'title' | 'description', string>[] = [
		{
			year: '1991',
			title: m.history_1991_title(),
			description: m.history_1991_description()
		},
		{
			year: '1997',
			title: m.history_1997_title(),
			description: m.history_1997_description()
		},
		{
			year: '1998',
			title: m.history_1998_title(),
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab libero id quaerat temporibus blanditiis sequi laudantium quo natus sapiente fugiat maiores necessitatibus, alias similique at, quae vitae illum iusto minus quos! Quasi obcaecati vitae repellendus soluta. Dolore, facere veritatis! Vel pariatur cumque veniam nisi quae sunt ratione explicabo debitis, nobis autem in ullam alias odio quis impedit necessitatibus ipsum.'
		},
		{
			year: '2008',
			title: m.history_2008_title(),
			description: m.history_2008_description()
		},
		{
			year: new Date().getFullYear().toString(),
			title: m.history_current_title(),
			description: m.history_current_description()
		}
	];
</script>

<section class="relative container mx-auto overflow-hidden px-6 py-16 md:px-12 md:py-32">
	<div class="relative grid grid-cols-[1fr_2fr] items-start gap-x-8 gap-y-12">
		{#each historyLinks as link}
			<div class="flex items-center gap-6">
				<div class="size-16 shrink-0 rounded-full border-8 border-foreground bg-background"></div>
				<span class="text-3xl font-bold text-muted-foreground md:text-4xl">{link.year}</span>
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-4xl font-semibold">{link.title}</h2>
				<p class="max-w-prose text-muted-foreground">{link.description}</p>
			</div>
		{/each}
		<div class="absolute top-0 left-0 -z-50 h-[calc(100%-(--spacing(16)))] w-16 translate-x-0.5">
			<div class="relative mx-auto h-full w-1 -translate-x-1/2 overflow-hidden bg-border">
				<!-- Animated pulse light -->
				<div class="timeline-pulse"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.timeline-pulse {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			oklch(63.343% 0.00007 271.152 / 0.4) 20%,
			oklch(100% 0.00011 271.152) 50%,
			oklch(28.094% 0.00003 271.152 / 0.4) 80%,
			transparent 100%
		);
		border-radius: 9999px;
		animation: pulse-travel 4s ease-in-out infinite;
	}

	@keyframes pulse-travel {
		0% {
			top: -40px;
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			top: 100%;
			opacity: 0;
		}
	}
</style>
