export const SITE = {
	title: 'Programming for IoT',
	description: 'Exercise and laboratory for IoT',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Training', header: true },
		{ text: 'Install Python',link: 'en/Training/install-python'},
		{ text: 'Introduction', link: 'en/Training/introduction' },
		{ text: 'Object Oriented Programming', link: 'en/Training/object-oriented-programming' },
		{ text: 'REST', link: 'en/Training/rest' },
		{ text: 'MQTT', link: 'en/Training/mqtt' },
		{ text: 'Laboratories', header: true },
	],
};