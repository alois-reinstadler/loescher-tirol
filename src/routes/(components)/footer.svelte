<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { site, type NavItem } from '$lib/config';

	import { m } from '$lib/paraglide/messages';

	import IconBrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin';
	import IconBrandFacebook from '@tabler/icons-svelte/icons/brand-facebook';
	import IconBrandInstagram from '@tabler/icons-svelte/icons/brand-instagram';
	import Container from '$lib/components/container.svelte';

	const links: NavItem[] = [
		{
			label: m.nav_home(),
			href: '#'
		},
		{
			label: m.nav_about(),
			href: '#'
		},

		{
			label: m.nav_team(),
			href: '#'
		},
		{
			label: m.nav_contact(),
			href: '#'
		}
	];

	const legalLinks: NavItem[] = [
		{
			label: m.legal_notice(),
			href: '#'
		}
	];

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
</script>

<footer class="w-full overflow-hidden border-t">
	<Container class="py-16 md:py-32">
		<a href="/" aria-label="go home" class="mx-auto block size-fit">
			<img src={logo} alt={site.name} class=" h-16 w-auto invert dark:invert-0" />
		</a>
		<div class="my-8 flex flex-wrap justify-center gap-6 text-sm">
			{#each links as link}
				<a href={link.href} class="block text-muted-foreground duration-150 hover:text-primary">
					<span>{link.label}</span>
				</a>
			{/each}
		</div>
		<ul class="my-8 flex flex-wrap justify-center gap-6 text-sm">
			{#each socialLinks as { href, label, icon: Icon }, i (label)}
				<li>
					<a
						{href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						class="block text-muted-foreground hover:text-primary"
					>
						<Icon class="size-6" />
					</a>
				</li>
			{/each}
		</ul>

		<div class="my-6 flex flex-wrap justify-center gap-4 text-xs">
			{#each legalLinks as link}
				<a href={link.href} class="text-muted-foreground duration-150 hover:text-primary">
					{link.label}
				</a>
			{/each}
		</div>

		<span class="block text-center text-sm text-muted-foreground">
			© {new Date().getFullYear()} Günter Löscher GmbH -
			<a
				href="http://alrein.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-primary">alrein.dev</a
			></span
		>
	</Container>
</footer>
