export type MenuItemBadge = 'Popular' | string;

export interface MenuItem {
	name: string;
	price: string;
	description?: string;
	badge?: MenuItemBadge;
}

export interface MenuCategory {
	id: string;
	title: string;
	items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
	{
		id: 'mengjes',
		title: 'Mëngjes',
		items: [
			{ name: 'Supë Pule', price: '2.00 €' },
			{ name: 'Omlet Natyral', price: '2.50 €' },
			{ name: 'Petulla', price: '2.50 €' },
		],
	},
	{
		id: 'sallata',
		title: 'Sallata',
		items: [
			{ name: 'Sallatë Shope', price: '2.50 €' },
			{ name: 'Sallatë Mix', price: '2.50 €' },
		],
	},
	{
		id: 'sandvic',
		title: 'Sandviç',
		items: [
			{ name: 'Sandviç Proshutë', price: '1.50 €' },
			{ name: 'Sandviç Pule', price: '1.50 €' },
			{ name: 'Sandviç Mix', price: '1.80 €' },
			{ name: 'Sandviç Tuna', price: '1.80 €' },
			{ name: 'Sandviç me Pomfrit', price: '2.00 €' },
			{ name: 'Sandviç Pet Niki', price: '3.50 €' },
		],
	},
	{
		id: 'hamburger',
		title: 'Hamburger',
		items: [
			{ name: 'Hamburger', price: '2.00 €' },
			{ name: 'Hamburger me Vezë', price: '2.30 €' },
			{ name: 'Hamburger me Pomfrit', price: '2.50 €' },
			{
				name: 'Hamburger Niki',
				price: '2.80 €',
				badge: 'Popular',
			},
			{ name: 'Hamburger Pule', price: '2.00 €' },
			{ name: 'Chicken Burger', price: '2.50 €' },
		],
	},
	{
		id: 'skare',
		title: 'Skarë',
		items: [
			{ name: 'Qebapa (5 copë)', price: '2.50 €' },
			{ name: 'Qebapa (7 copë)', price: '3.50 €' },
			{ name: 'Qebapa (10 copë)', price: '5.00 €' },
			{ name: 'Pleskavicë Normale', price: '3.00 €' },
			{ name: 'Pleskavicë e Mbushur', price: '3.50 €' },
			{ name: 'File Pule', price: '3.50 €' },
			{ name: 'File Prezlle', price: '4.00 €' },
			{ name: 'Sallatë Pule', price: '3.50 €' },
			{ name: 'Kombinim Skarë', price: '3.50 €' },
			{ name: 'Suxhuk Shtëpie', price: '4.00 €' },
		],
	},
	{
		id: 'samun',
		title: 'Samun',
		items: [
			{ name: 'Samun Proshutë', price: '2.50 €' },
			{ name: 'Samun Pule', price: '2.50 €' },
			{ name: 'Samun Suxhuk', price: '2.50 €' },
			{
				name: 'Samun Niki',
				price: '3.00 €',
				badge: 'Popular',
			},
			{ name: 'Samun Tuna', price: '2.50 €' },
		],
	},
	{
		id: 'pizza',
		title: 'Pizza',
		items: [
			{ name: 'Pizza Margarita', price: '2.50 €' },
			{ name: 'Pizza Proshutë', price: '3.50 €' },
			{ name: 'Pizza Peperoni', price: '3.50 €' },
			{
				name: 'Pizza Shtëpie NIKI',
				price: '4.00 €',
				badge: 'Popular',
			},
			{ name: 'Pizza Tuna', price: '4.00 €' },
		],
	},
	{
		id: 'rizoto',
		title: 'Rizoto',
		items: [
			{ name: 'Rizoto Perime', price: '3.00 €' },
			{ name: 'Rizoto Pule', price: '3.50 €' },
		],
	},
	{
		id: 'pasta',
		title: 'Pasta',
		items: [
			{ name: 'Pasta Bolognese', price: '3.50 €' },
			{ name: 'Pasta Carbonara', price: '3.50 €' },
			{ name: 'Pasta Pule', price: '3.50 €' },
		],
	},
	{
		id: 'menze',
		title: 'Menze',
		items: [
			{
				name: 'Meze e Ftohtë',
				price: '10 € – 15 €',
				description: 'Varësisht përzgjedhjes',
			},
			{
				name: 'Meze e Nxehtë',
				price: '10 € – 15 €',
				description: 'Varësisht përzgjedhjes',
			},
			{
				name: 'Chicken Fingers',
				price: '5 € / 10 € / 15 €',
				description: 'Porcione të ndryshme',
			},
			{
				name: 'Chicken Wings',
				price: '5 € / 10 € / 15 €',
				description: 'Porcione të ndryshme',
			},
		],
	},
];
