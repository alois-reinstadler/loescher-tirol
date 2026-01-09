export const locales = ['de', 'en'] as const;
export type Locale<L extends string = (typeof locales)[number]> = L;

export type Translations<L extends string = Locale, K extends string = TKeys> = {
	[Locale in L]: {
		[Key in K]: string;
	};
};

export type TKeys =
	// literal keys
	| 'literal_or'
	| 'literal_and'
	| 'literal_by'
	| 'literal_from'
	| 'literal_to'
	| 'literal_until'
	| 'literal_since'

	// header keys
	| 'label_home'
	| 'label_about'
	| 'label_contact'

	// hero keys
	| 'hero_title'
	| 'hero_description'
	| 'hero_button_text'
	| 'hero_button_href'

	// testimonials keys
	| 'testimonials_title'
	| 'testimonials_description'

	// quote 01 keys
	| 'quote_01_author'
	| 'quote_01_role'
	| 'quote_01_text'

	// quote 02 keys
	| 'quote_02_author'
	| 'quote_02_role'
	| 'quote_02_text'

	// quote 03 keys
	| 'quote_03_author'
	| 'quote_03_role'
	| 'quote_03_text'

	// quote 04 keys
	| 'quote_04_author'
	| 'quote_04_role'
	| 'quote_04_text'

	// customers keys
	| 'customers_title'
	| 'customers_description'
	| 'history_1991_title'
	| 'history_1991_description'
	| 'history_1997_title'
	| 'history_1997_description'
	| 'history_1998_title'
	| 'history_1998_description'
	| 'history_2008_title'
	| 'history_2008_description'
	| 'history_current_title'
	| 'history_current_description'

	// contact keys
	| 'contact_title'
	| 'contact_description'
	| 'contact_input_label'
	| 'contact_input_placeholder'
	| 'contact_cta_send_mail'
	| 'contact_cta_call_us'
	| 'contact_disclaimer'
	| 'contact_hours_monday_thursday'
	| 'contact_hours_monday_thursday_time'
	| 'contact_hours_friday'
	| 'contact_hours_friday_time'

	// legal keys
	| 'legal_notice'
	| 'legal_notice_firmenwortlaut'
	| 'legal_notice_anschrift'
	| 'legal_notice_uid'
	| 'legal_notice_firmenbuch'
	| 'legal_notice_fb_gericht'
	| 'legal_notice_memberships'
	| 'legal_notice_aufsicht'
	| 'legal_notice_rechtsvorschriften'
	| 'legal_notice_anschrift'
	| 'legal_notice_kontakt'

	// footer keys
	| 'footer_legal_form'
	| 'footer_anschrift'
	| 'footer_contact'
	| 'footer_uid'
	| 'footer_firmenbuch'
	| 'footer_fb_court'
	| 'footer_memberships'
	| 'footer_authority'
	| 'footer_legal_regulations'
	| 'footer_gewerbeordnung';

export const translations: Translations = {
	//english keys
	en: {
		// literal keys
		literal_or: 'or',
		literal_and: 'and',
		literal_by: 'by',
		literal_from: 'from',
		literal_to: 'to',
		literal_until: 'until',
		literal_since: 'since',

		// header keys
		label_home: 'Home',
		label_about: 'About',
		label_contact: 'Contact',

		// hero keys
		hero_title: 'Löscher Gardinen',
		hero_description: 'Since 1960 active in the textile industry',
		hero_button_text: 'Contact Us',
		hero_button_href: '#contact',

		// testimonials keys
		testimonials_title: 'Testimonials',
		testimonials_description: 'What our customers say',

		// quote 01 keys
		quote_01_author: 'John Doe',
		quote_01_role: 'CEO',
		quote_01_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 02 keys
		quote_02_author: 'Jane Doe',
		quote_02_role: 'CTO',
		quote_02_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 03 keys
		quote_03_author: 'Jim Beam',
		quote_03_role: 'CFO',
		quote_03_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 04 keys
		quote_04_author: 'John Doe',
		quote_04_role: 'CEO',
		quote_04_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// customers keys
		customers_title: 'Customers',
		customers_description: 'Our customers',

		// history keys
		history_1991_title: 'A new generation takes over.',
		history_1991_description:
			'With the entry of Junior-Chef Günter Löscher in 1991, the export to the neighboring countries also began to increase. Löscher Gardinen are now exported worldwide and the program has been expanded through innovation, challenge and creativity.',
		history_1997_title: 'The first step abroad.',
		history_1997_description:
			'1997 was the takeover of the Augsburger Gardinenfabrik Herzog. This strengthened us in the German market and our production in Jaquard was increased by several times.',
		history_1998_title: 'Own printing production.',
		history_1998_description:
			'Acquisition of the company Faber in Vienna, own printing production.',
		history_2008_title: 'A step further.',
		history_2008_description:
			'In 2008, we brought the company Vetter Gardinen Gmbh into our fold, whose main area is in the Weissware and printing as well. In 2008, the company Ardison from Germany was also taken over.',
		history_current_title: 'Nowadays',
		history_current_description:
			'thus we were able to further strengthen our products in the deco and uni sector.',

		// contact keys
		contact_title: 'Contact Us',
		contact_description: 'Get in touch with us',
		contact_input_label: 'Name',
		contact_input_placeholder: 'Enter your name',
		contact_cta_send_mail: 'Send Message',
		contact_cta_call_us: 'Call Us',
		contact_disclaimer: 'Please note our office hours',
		contact_hours_monday_thursday: 'Monday - Thursday',
		contact_hours_monday_thursday_time: '8am - 5pm',
		contact_hours_friday: 'Friday',
		contact_hours_friday_time: '8am - 1pm',

		// legal keys
		legal_notice: 'Legal Notice',
		legal_notice_firmenwortlaut: 'Company Name',
		legal_notice_uid: 'UID',
		legal_notice_firmenbuch: 'Company Registration Number',
		legal_notice_fb_gericht: 'Registry Court',
		legal_notice_memberships: 'Memberships',
		legal_notice_aufsicht: 'Supervisory Authority',
		legal_notice_rechtsvorschriften: 'Legal Regulations',
		legal_notice_anschrift: 'Address',
		legal_notice_kontakt: 'Contact',

		// footer keys
		footer_legal_form: 'Limited Liability Company',
		footer_anschrift: 'Address',
		footer_contact: 'Contact',
		footer_uid: 'VAT-ID',
		footer_firmenbuch: 'Company Reg. No.',
		footer_fb_court: 'Registry Court',
		footer_memberships: 'Memberships',
		footer_authority: 'Supervisory Authority',
		footer_legal_regulations: 'Legal Regulations',
		footer_gewerbeordnung: 'Trade Regulation Act'
	},
	de: {
		// literal keys
		literal_or: 'oder',
		literal_and: 'und',
		literal_by: 'von',
		literal_from: 'von',
		literal_to: 'bis',
		literal_until: 'bis',
		literal_since: 'seit',

		// header keys
		label_home: 'Startseite',
		label_about: 'Über uns',
		label_contact: 'Kontakt',

		// hero keys
		hero_title: 'Löscher Gardinen',
		hero_description: 'Seit 1960 aktiv in der Textilbranche',
		hero_button_text: 'Kontaktieren Sie uns',
		hero_button_href: '#kontakt',

		// testimonials keys
		testimonials_title: 'Kundenmeinungen',
		testimonials_description: 'Was unsere Kunden sagen',

		// quote 01 keys
		quote_01_author: 'John Doe',
		quote_01_role: 'Geschäftsführer',
		quote_01_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 02 keys
		quote_02_author: 'Jane Doe',
		quote_02_role: 'Technische Leitung',
		quote_02_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 03 keys
		quote_03_author: 'Jim Beam',
		quote_03_role: 'Finanzleiter',
		quote_03_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// quote 04 keys
		quote_04_author: 'John Doe',
		quote_04_role: 'Geschäftsführer',
		quote_04_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

		// customers keys
		customers_title: 'Kunden',
		customers_description: 'Unsere Kunden',

		// history keys
		history_1991_title: 'Eine neue Generation übernimmt.',
		history_1991_description:
			'Mit dem Eintritt von Junior-Chef Günter Löscher im Jahr 1991 begann auch der Export in die Nachbarländer zu steigen. Löscher Gardinen werden inzwischen weltweit exportiert und das Programm wurde durch Innovation, Herausforderung und Kreativität erweitert.',
		history_1997_title: 'Der erste Schritt ins Ausland.',
		history_1997_description:
			'1997 erfolgte die Übernahme der Augsburger Gardinenfabrik Herzog. Dadurch wurden wir im deutschen Markt gestärkt und unsere Jacquard-Produktion konnte um ein Vielfaches gesteigert werden.',
		history_1998_title: 'Eigene Druckproduktion.',
		history_1998_description: 'Übernahme der Firma Faber in Wien, eigene Druckproduktion.',
		history_2008_title: 'Ein Schritt weiter.',
		history_2008_description:
			'2008 nahmen wir die Firma Vetter Gardinen GmbH in unsere Gruppe auf, deren Hauptgebiet ebenfalls die Weißware und der Druck sind. Ebenfalls 2008 wurde die Firma Ardison aus Deutschland übernommen.',
		history_current_title: 'Heutzutage',
		history_current_description:
			'Dadurch konnten wir unsere Produkte im Deko- und Uni-Sektor weiter stärken.',

		// contact keys
		contact_title: 'Kontakt',
		contact_description: 'Nehmen Sie Kontakt mit uns auf',
		contact_input_label: 'Name',
		contact_input_placeholder: 'Geben Sie Ihren Namen ein',
		contact_cta_send_mail: 'E-Mail senden',
		contact_cta_call_us: 'Anrufen',
		contact_disclaimer: 'Bitte beachten Sie unsere Öffnungszeiten',
		contact_hours_monday_thursday: 'Montag - Donnerstag',
		contact_hours_monday_thursday_time: '08:00 - 17:00 Uhr',
		contact_hours_friday: 'Freitag',
		contact_hours_friday_time: '08:00 - 13:00 Uhr',

		// legal keys
		legal_notice: 'Impressum',
		legal_notice_firmenwortlaut: 'Firmenwortlaut',
		legal_notice_uid: 'UID',
		legal_notice_firmenbuch: 'Firmenbuchnummer',
		legal_notice_fb_gericht: 'Firmenbuchgericht',
		legal_notice_memberships: 'Mitgliedschaften',
		legal_notice_aufsicht: 'Aufsichtsbehörde',
		legal_notice_rechtsvorschriften: 'Rechtsvorschriften',
		legal_notice_anschrift: 'Anschrift',
		legal_notice_kontakt: 'Kontakt',

		// footer keys
		footer_legal_form: 'Firmenwortlaut',
		footer_anschrift: 'Anschrift',
		footer_contact: 'Kontakt',
		footer_uid: 'UID-Nr',
		footer_firmenbuch: 'Firmenbuchnummer',
		footer_fb_court: 'FB-Gericht',
		footer_memberships: 'Mitgliedschaften',
		footer_authority: 'Aufsichtsbehörde',
		footer_legal_regulations: 'Rechtsvorschriften',
		footer_gewerbeordnung: 'Gewerbeordnung'
	}
};
