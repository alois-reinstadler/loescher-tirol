// lib/i18n/translation.svelte.ts
import { getContext, setContext, untrack } from 'svelte';
import { type Translations, type Locale, type TKeys } from './translations';

// Context key (Symbol for collision safety)
const TRANSLATION_KEY = Symbol('i18n');

export type TranslationOptions<L extends Locale, K extends string> = {
	translations: Translations<L, K>;
	defaultLocale: L;
	detectLocale?: boolean;
};

// Class-based state using Svelte 5 runes
class TranslationState<L extends Locale, K extends string> {
	locale: L;

	#translations: Translations<L, K>;

	constructor({ translations, defaultLocale, detectLocale = true }: TranslationOptions<L, K>) {
		this.#translations = translations;
		this.locale = $state(defaultLocale);

		$effect(() => {
			if (!detectLocale) return;

			const supportedLocales = Object.keys(this.#translations);

			const lang = navigator.language;
			const langShort = lang.split('-')[0];

			untrack(() => {
				const match = supportedLocales.find((l) => l === langShort || l === lang);
				if (match) this.locale = match as L;
			});
		});
	}

	// Arrow function to preserve `this` binding
	t = (key: K, fallback?: string): string => {
		return this.#translations[this.locale]?.[key] || fallback || key;
	};

	setLocale = (locale: L) => {
		this.locale = locale;
	};
}

export function detectLocale(): Locale {
	if (typeof navigator !== 'undefined') {
		return navigator.language.split('-')[0] as Locale;
	}
	return 'de';
}

export function createTranslations<L extends Locale, K extends string>({
	translations,
	defaultLocale,
	detectLocale
}: TranslationOptions<L, K>): TranslationState<L, K> {
	const state = new TranslationState({ translations, defaultLocale, detectLocale });
	setContext(TRANSLATION_KEY, state);

	return state;
}

export function useTranslations<L extends Locale, K extends string = TKeys>(): TranslationState<
	L,
	K
> {
	const ctx = getContext<TranslationState<L, K>>(TRANSLATION_KEY);

	if (!ctx) {
		throw new Error(
			'Translation context not found. Call createTranslation() in a parent component.'
		);
	}

	return ctx;
}
