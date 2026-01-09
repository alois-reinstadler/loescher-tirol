export type TranslationKey = string;
export type Translatable = string | number;

export type Locale = 'de' | 'en';

export type Translation<Keys extends Translatable> = {
	[L in Locale]: {
		[K in Keys]: Translatable;
	};
};
