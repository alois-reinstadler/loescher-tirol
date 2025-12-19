<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { site, type NavItem } from '$lib/config';

	import { getLocale, locales, localizeHref, type Locale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	import { toggleMode } from 'mode-watcher';

	import LanguageIcon from '@tabler/icons-svelte/icons/language';
	import SunIcon from '@tabler/icons-svelte/icons/sun';
	import MoonIcon from '@tabler/icons-svelte/icons/moon';

	import Container from '$lib/components/container.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	import I18nDE from '$lib/assets/i18n_de.svg';
	import I18nEN from '$lib/assets/i18n_en.svg';
	import { page } from '$app/state';

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

	// Locale configuration
	const localeIcons: Record<Locale, string> = {
		de: I18nDE,
		en: I18nEN
	};

	const localeLabels: Record<Locale, string> = {
		de: 'Deutsch',
		en: 'English'
	};

	function handleLocaleChange(locale: Locale) {
		// Use localizeHref to get the correct URL for the target locale
		// This will return '/' for German (base locale) and '/en/...' for English
		const localizedPath = localizeHref(page.url.pathname, { locale });
		// Navigate to the localized URL (triggers full page reload for locale change)
		window.location.href = localizedPath;
	}
</script>

<header
	class="fixed bottom-0 z-50 w-full overflow-hidden border-b bg-background/40 backdrop-blur-sm md:top-0 md:bottom-auto"
>
	<Container class="grid h-16 grid-cols-3 py-2 lg:py-2.5">
		<div class="overflow-hidden">
			<a href="/" class="block h-full w-fit">
				<img src={logo} alt={site.name} class="h-full w-auto invert dark:invert-0" />
			</a>
		</div>

		<nav class="flex justify-center">
			<ul class="flex items-center gap-2">
				{#each links as { href, label }, i (label)}
					<li>
						<Button variant="ghost" {href} class="tracking-wide">
							{label}
						</Button>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- theme toggle -->
		<div class="flex items-center justify-end gap-2">
			<Button onclick={toggleMode} variant="outline" size="icon">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>

			<!-- language selector -->
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
					<LanguageIcon class="h-[1.2rem] w-[1.2rem]" />
					<span class="sr-only">Switch language</span>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content align="end" preventScroll={false}>
					{#each locales as locale (locale)}
						<!-- +		<a href={}>{locale}</a> -->
						<DropdownMenu.Item>
							{#snippet child({ props }: any)}
								<Button
									{...props}
									variant="ghost"
									class="flex w-full items-center justify-start"
									onclick={() => handleLocaleChange(locale)}
								>
									<img src={localeIcons[locale]} alt={locale} class="size-4" />
									<span class="ml-1">
										{localeLabels[locale]}
									</span>
								</Button>
							{/snippet}
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</Container>
</header>
