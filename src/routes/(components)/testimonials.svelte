<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';

	interface Testimonial {
		quote: string;
		name: string;
		role: string;
		company?: string;
		initials: string;
		image?: string;
	}

	const testimonials: Testimonial[] = [
		{
			quote:
				'Seit über 15 Jahren arbeiten wir exklusiv mit Löscher Gardinen zusammen. Die Qualität der Stoffe, die termingerechte Lieferung und die persönliche Beratung sind unübertroffen. Unsere Kunden sind jedes Mal begeistert von der Auswahl und Verarbeitung.',
			name: 'Margarethe Hofer',
			role: 'Inhaberin',
			company: 'Raumausstattung Hofer, Salzburg',
			initials: 'MH'
		},
		{
			quote:
				'Löscher ist für uns ein verlässlicher Partner. Die Kollektion überzeugt durch zeitloses Design und höchste Materialqualität.',
			name: 'Stefan Brandstätter',
			role: 'Einkaufsleiter',
			company: 'Möbelhaus Brandstätter',
			initials: 'SB'
		},
		{
			quote:
				'Die Jacquard-Gardinen von Löscher sind ein Highlight in unseren Musterzimmern. Gäste fragen regelmäßig nach der Herkunft!',
			name: 'Isabella Neururer',
			role: 'Hotelière',
			company: 'Hotel Alpenblick, Tirol',
			initials: 'IN'
		},
		{
			quote:
				'Kompetente Beratung, schnelle Lieferung und faire Preise. So macht die Zusammenarbeit Freude. Absolute Empfehlung!',
			name: 'Andreas Winkler',
			role: 'Innenarchitekt',
			company: 'Winkler Design Studio',
			initials: 'AW'
		},
		{
			quote:
				'Als Raumausstatter schätze ich besonders die Vielfalt der Kollektion. Von klassisch bis modern — bei Löscher finde ich für jeden Kunden das Passende.',
			name: 'Claudia Reiter',
			role: 'Raumausstattermeisterin',
			company: 'Reiter Raumdesign, Wien',
			initials: 'CR'
		}
	];
</script>

<section class="py-16 md:py-32">
	<div class="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-4xl font-medium lg:text-5xl">
				Vertrauen durch Qualität — seit über 60 Jahren
			</h2>
			<p class="text-muted-foreground">
				Unsere Partner aus Hotellerie, Raumausstattung und Handel schätzen die Zusammenarbeit mit
				Löscher Gardinen. Lesen Sie, was unsere Kunden über uns sagen.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
			<!-- Featured testimonial -->
			<Card class="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
				<CardHeader>
					<span class="font-serif text-4xl text-primary/20">"</span>
				</CardHeader>
				<CardContent>
					<blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
						<p class="text-xl font-medium">
							{testimonials[0].quote}
						</p>
						<div class="grid grid-cols-[auto_1fr] items-center gap-3">
							<Avatar class="size-12">
								<AvatarFallback>{testimonials[0].initials}</AvatarFallback>
							</Avatar>
							<div>
								<cite class="text-sm font-medium not-italic">{testimonials[0].name}</cite>
								<span class="block text-sm text-muted-foreground"
									>{testimonials[0].role}, {testimonials[0].company}</span
								>
							</div>
						</div>
					</blockquote>
				</CardContent>
			</Card>

			<!-- Second testimonial -->
			<Card class="md:col-span-2">
				<CardContent class="h-full pt-6">
					<blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
						<p class="text-xl font-medium">
							{testimonials[1].quote}
						</p>
						<div class="grid grid-cols-[auto_1fr] items-center gap-3">
							<Avatar class="size-12">
								<AvatarFallback>{testimonials[1].initials}</AvatarFallback>
							</Avatar>
							<div>
								<cite class="text-sm font-medium not-italic">{testimonials[1].name}</cite>
								<span class="block text-sm text-muted-foreground"
									>{testimonials[1].role}, {testimonials[1].company}</span
								>
							</div>
						</div>
					</blockquote>
				</CardContent>
			</Card>

			<!-- Third testimonial -->
			<Card>
				<CardContent class="h-full pt-6">
					<blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
						<p>
							{testimonials[2].quote}
						</p>
						<div class="grid grid-cols-[auto_1fr] items-center gap-3">
							<Avatar class="size-12">
								<AvatarFallback>{testimonials[2].initials}</AvatarFallback>
							</Avatar>
							<div>
								<cite class="text-sm font-medium not-italic">{testimonials[2].name}</cite>
								<span class="block text-sm text-muted-foreground">{testimonials[2].role}</span>
							</div>
						</div>
					</blockquote>
				</CardContent>
			</Card>

			<!-- Fourth testimonial -->
			<Card>
				<CardContent class="h-full pt-6">
					<blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
						<p>
							{testimonials[3].quote}
						</p>
						<div class="grid grid-cols-[auto_1fr] gap-3">
							<Avatar class="size-12">
								<AvatarFallback>{testimonials[3].initials}</AvatarFallback>
							</Avatar>
							<div>
								<cite class="text-sm font-medium not-italic">{testimonials[3].name}</cite>
								<span class="block text-sm text-muted-foreground">{testimonials[3].role}</span>
							</div>
						</div>
					</blockquote>
				</CardContent>
			</Card>
		</div>
	</div>
</section>
