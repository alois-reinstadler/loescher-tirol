<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
</script>

<section id="contact" class="relative border-t text-foreground">
	<div class="absolute inset-0 -z-40 bg-muted">
		<iframe
			width="100%"
			height="100%"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			title="map"
			scrolling="no"
			src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Friedhelm+Löscher+Gardinenfabrik+GmbH&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
			class="pointer-events-none opacity-40 contrast-125 grayscale"
		></iframe>
	</div>
	<div class="container mx-auto flex px-5 py-24">
		<Card.Root class="relative z-10 mt-10 w-full md:mt-0 md:ml-auto md:w-1/2 lg:w-1/3">
			<Card.Header>
				<Card.Title>Kontakt aufnehmen</Card.Title>
				<Card.Description>
					Haben Sie Fragen zu unseren Produkten oder möchten Sie ein individuelles Angebot? Wir
					freuen uns auf Ihre Nachricht.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="space-y-2">
					<Label for="email">E-Mail</Label>
					<Input type="email" id="email" name="email" placeholder="ihre@email.at" />
				</div>
				<div class="space-y-2">
					<Label for="message">Nachricht</Label>
					<Textarea
						id="message"
						name="message"
						placeholder="Ihre Nachricht an uns..."
						class="min-h-32 resize-none"
					/>
				</div>
			</Card.Content>
			<Card.Footer class="flex-col items-start gap-3">
				<Button class="w-full">Nachricht senden</Button>
				<p class="text-xs text-muted-foreground">
					Wir antworten in der Regel innerhalb von 24 Stunden. Ihre Daten werden vertraulich
					behandelt.
				</p>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
