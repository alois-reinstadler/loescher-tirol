<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import { site, type NavItem } from '$lib/config';

	import { useTranslations } from '$lib/hooks/i18n';

	import IconBrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
	import IconBrandFacebook from '@tabler/icons-svelte/icons/brand-facebook';
	import IconBrandInstagram from '@tabler/icons-svelte/icons/brand-instagram';
	import IconExternalLink from '@tabler/icons-svelte/icons/external-link';
	import Container from '$lib/components/container.svelte';

	const { t } = useTranslations();

	const socialLinks = [
		{
			label: 'LinkedIn',
			href: '#',
			icon: IconBrandLinkedin
		},
		{
			label: 'Facebook',
			href: '#',
			icon: IconBrandFacebook
		},
		{
			label: 'Instagram',
			href: '#',
			icon: IconBrandInstagram
		}
	] satisfies NavItem[];

	// Company Information (Impressum)
	const companyInfo = {
		name: 'Günter Löscher GmbH',
		uid: 'ATU12345678',
		firmenbuch: '123456a',
		fbGericht: 'Innsbruck',
		sitz: '6020 Innsbruck',
		address: 'Musterstraße 12',
		country: 'Österreich',
		phone: '+43 512 123456',
		email: 'office@loescher-tirol.at',
		authority: 'Bezirkshauptmannschaft Innsbruck',
		memberships: 'WKÖ, WK Tirol, Landesgremium Handel'
	};
</script>

<footer class="w-full">
	<!-- Impressum Section -->
	<Container class="py-10 md:py-12">
		<h3 class="mb-6 text-sm tracking-wide text-foreground">
			{t('legal_notice')}
		</h3>
		<div class="grid gap-6 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			<div>
				<p class="text-muted-foreground">{t('footer_legal_form')}</p>
				<p class="text-foreground">{companyInfo.name}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_anschrift')}</p>
				<p class="text-foreground">
					{companyInfo.address}<br />
					{companyInfo.sitz}<br />
					{companyInfo.country}
				</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_contact')}</p>
				<p class="text-foreground">
					{companyInfo.phone}<br />
					{companyInfo.email}
				</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_uid')}</p>
				<p class="font-mono text-foreground">{companyInfo.uid}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_firmenbuch')}</p>
				<p class="font-mono text-foreground">{companyInfo.firmenbuch}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_fb_court')}</p>
				<p class="text-foreground">{companyInfo.fbGericht}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_memberships')}</p>
				<p class="text-foreground">{companyInfo.memberships}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_authority')}</p>
				<p class="text-foreground">{companyInfo.authority}</p>
			</div>
			<div>
				<p class="text-muted-foreground">{t('footer_legal_regulations')}</p>
				<p class="text-foreground">
					<a
						href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 transition-colors hover:text-muted-foreground"
					>
						{t('footer_gewerbeordnung')}
						<IconExternalLink class="size-3" />
					</a>
				</p>
			</div>
		</div>
	</Container>

	<!-- Logo, Socials & Copyright -->
	<Container class="border-t py-6">
		<div class="flex flex-col items-center gap-4">
			<a href={resolve('/')} aria-label="go home">
				<img src={logo} alt={site.name} class="h-10 w-auto invert dark:invert-0" />
			</a>
			<div class="flex gap-2">
				{#each socialLinks as { href, label, icon: Icon } (label)}
					<a
						{href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						class="flex size-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
					>
						<Icon class="size-4" />
					</a>
				{/each}
			</div>
			<div class="flex items-center gap-2 text-xs text-muted-foreground">
				<span>
					© {new Date().getFullYear()}
					{companyInfo.name}
				</span>
				<span class="size-1 rounded-full bg-muted-foreground"></span>
				<a
					href="https://alrein.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-foreground"
				>
					alrein.dev
				</a>
			</div>
		</div>
	</Container>
</footer>
