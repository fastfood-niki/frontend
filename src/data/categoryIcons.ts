import type { IconNode } from 'lucide';
import {
	Croissant,
	EggFried,
	Flame,
	Hamburger,
	LayoutGrid,
	Pizza,
	Salad,
	Sandwich,
	Soup,
	UtensilsCrossed,
} from 'lucide';

export const categoryLucideIcons: Record<string, IconNode> = {
	mengjes: EggFried,
	sallata: Salad,
	sandvic: Sandwich,
	hamburger: Hamburger,
	skare: Flame,
	samun: Croissant,
	pizza: Pizza,
	rizoto: Soup,
	pasta: UtensilsCrossed,
	menze: LayoutGrid,
} as const;

export type CategoryIconId = keyof typeof categoryLucideIcons;
