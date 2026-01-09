<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';

	import { useTranslations } from '$lib/hooks/i18n';

	const { t, locale } = useTranslations();

	import Container from '$lib/components/container.svelte';
	import {
		Map,
		MapControls,
		MapMarker,
		MarkerContent,
		MarkerTooltip
	} from '$lib/components/ui/map';

	import { Separator } from '$lib/components/ui/separator';
</script>

<section id="contact" class="w-full">
	<Container class="relative flex items-stretch overflow-hidden rounded-2xl py-16 md:py-32">
		<div class="grow overflow-hidden rounded-2xl rounded-tr-none rounded-br-none border border-r-0">
			<Map
				center={[10.978965, 47.305855]}
				zoom={13}
				options={{
					dragPan: false,
					dragRotate: false,
					scrollZoom: false,
					touchZoomRotate: false,
					doubleClickZoom: false
				}}
			>
				<MapMarker longitude={10.979996} latitude={47.307667}>
					<MarkerContent>
						<div class="absolute size-2 animate-ping rounded-full bg-green-400 shadow-lg"></div>
						<div class="size-2 rounded-full bg-green-300 shadow-lg"></div>
					</MarkerContent>

					<MarkerTooltip>Löscher Gardinen</MarkerTooltip>
				</MapMarker>
				<MapControls />
			</Map>
		</div>

		<Card.Root class="relative w-full max-w-sm rounded-tl-none rounded-bl-none">
			<Card.Header>
				<Card.Title>{t('contact_title')}</Card.Title>
				<Card.Description>
					{t('contact_description')}
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="space-y-2">
					<Input type="text" placeholder={t('contact_input_label')} />
					<Textarea
						id="message"
						name="message"
						placeholder={t('contact_input_placeholder')}
						class="min-h-32 resize-none"
					/>
				</div>

				<Button class="w-full">{t('contact_cta_send_mail')}</Button>

				<div class="relative isolate grid w-full shrink-0 place-items-center">
					<span class="z-10 bg-card px-2 text-sm text-muted-foreground">or</span>
					<Separator orientation="horizontal" class="absolute" />
				</div>

				<Button variant="outline" class="w-full">{t('contact_cta_call_us')}</Button>
			</Card.Content>
			<Card.Footer class="flex-col items-start gap-3">
				<div class="mt-4 grid gap-2 text-sm">
					<p class="font-semibold">{t('contact_disclaimer')}:</p>
					<div class="flex flex-col text-muted-foreground">
						<span>{t('contact_hours_monday_thursday')}</span>
						<span>{t('contact_hours_monday_thursday_time')}</span>
					</div>
					<div class="flex flex-col text-muted-foreground">
						<span>{t('contact_hours_friday')}</span>
						<span>{t('contact_hours_friday_time')}</span>
					</div>
				</div>
			</Card.Footer>
		</Card.Root>
	</Container>
</section>
