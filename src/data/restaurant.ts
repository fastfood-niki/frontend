export interface SocialLinks {
	label: string;
	url: string;
}

export interface Coordinates {
	lat: number;
	lng: number;
}

export interface RestaurantInfo {
	name: string;
	tagline: string;
	phone: string;
	phoneHref: string;
	deliveryNote: string;
	social?: SocialLinks[];
	/** WGS84 decimal degrees — used for maps / SEO. */
	coordinates?: Coordinates;
}

export const restaurant: RestaurantInfo = {
	name: 'Fast Food NIKI',
	tagline: 'Fresh, Shpejt & Shijshëm',
	phone: '045 102 447',
	phoneHref: 'tel:+38345102447',
	deliveryNote: 'FREE DELIVERY',
	coordinates: {
		lat: 42.520917,
		lng: 21.121056,
	},
	social: [
		{ label: 'Instagram', url: '#' },
		{ label: 'Facebook', url: '#' },
	],
};
