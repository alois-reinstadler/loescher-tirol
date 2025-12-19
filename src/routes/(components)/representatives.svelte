<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import LocationIcon from '@tabler/icons-svelte/icons/map-pin';
	import PhoneIcon from '@tabler/icons-svelte/icons/phone';
	import MailIcon from '@tabler/icons-svelte/icons/mail';

	const representatives: SalesRep[] = [
		{
			name: 'Christian Preußer',
			area: 'Brandenburg, Berlin, Sachsen, Sachsen-Anhalt, PLZ 39, 98 und 99',
			phone: '+49 172 7939583',
			email: 'preusser-meissen@t-online.de'
		},
		{
			name: 'Thomas Danko',
			area: 'Vorarlberg, Tirol, Salzburg, Oberösterreich, Ennstal i.d. Stmk. und Südtirol',
			phone: '+43 699 16433050',
			email: 'office.danko@chello.at'
		},
		{
			name: 'Thomas Pittracher',
			area: 'Innsbruck und Umgebung, Tirol',
			phone: '+43 699 1928 65 54',
			email: 'farang67@gmx.at'
		}
	];

	type SalesRep = {
		name: string;
		area: string;
		phone: string;
		email: string;
	};
</script>

<section id="representatives" class="py-16 md:py-32 px-6 md:px-12">
	<div class="container mx-auto space-y-8 px-6 md:space-y-16">
		<div class="space-y-4">
			<h2 class="text-4xl font-medium lg:text-5xl">Unsere Vertriebspartner</h2>
			<p class="text-muted-foreground max-w-2xl">
				Unsere erfahrenen Handelsvertreter stehen Ihnen in Ihrer Region persönlich zur Verfügung.
				Kontaktieren Sie den Ansprechpartner in Ihrer Nähe für eine individuelle Beratung.
			</p>
		</div>
		<div class="gap-8 flex flex-wrap">
			{#each representatives as representative}
				<Card class="grow basis-[30%]">
					<CardHeader class="text-2xl font-medium">
						{representative.name}
					</CardHeader>
					<CardContent class="flex flex-col gap-2">
						<div class="flex gap-4 items-start">
							<LocationIcon class="size-4 shrink-0" />
							<p class="text-sm text-muted-foreground">
								{representative.area}
							</p>
						</div>
						<a
							href="tel:{representative.phone.replace(/\s/g, '')}"
							class="flex gap-4 items-start hover:text-primary duration-150"
						>
							<PhoneIcon class="size-4 shrink-0" />
							<p class="text-sm text-muted-foreground">
								{representative.phone}
							</p>
						</a>
						<a
							href="mailto:{representative.email}"
							class="flex gap-4 items-start hover:text-primary duration-150"
						>
							<MailIcon class="size-4 shrink-0" />
							<p class="text-sm text-muted-foreground">
								{representative.email}
							</p>
						</a>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
