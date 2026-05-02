export interface SocialLinks {
	label: string;
	url: string;
}

export interface RestaurantInfo {
	name: string;
	tagline: string;
	phone: string;
	phoneHref: string;
	deliveryNote: string;
	location?: string;
	social?: SocialLinks[];
}

export const restaurant: RestaurantInfo = {
	name: 'Fast Food NIKI',
	tagline: 'Fresh, Shpejt & Shijshëm',
	phone: '045 102 447',
	phoneHref: 'tel:+38345102447',
	deliveryNote: 'FREE DELIVERY',
	location: 'Location — ask staff or call',
	social: [
		{ label: 'Instagram', url: '#' },
		{ label: 'Facebook', url: '#' },
	],
};
