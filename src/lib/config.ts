import type { Icon } from '@tabler/icons-svelte';

export const site = {
	name: 'Löscher Tirol',
	url: 'https://loescher-tirol.com',
	description: 'Löscher Tirol',
	keywords: [
		'Löscher Tirol',
		'Löscher',
		'Löscher Tirol Gardinen',
		'Gardinenfabrik Loescher',
		'Günther Löscher'
	],
	author: 'Reinstadler Alois',
	authorEmail: 'alois.reinstadler@gmail.com'
};

export interface NavItem {
	label: string;
	href: string;
	icon?: Icon;
}
