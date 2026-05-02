import type { IconNode } from 'lucide';

function escAttr(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function attrsString(attrs: Record<string, string | number | undefined>): string {
	return Object.entries(attrs)
		.filter(([, v]) => v !== undefined)
		.map(([k, v]) => `${escAttr(k)}="${escAttr(String(v))}"`)
		.join(' ');
}

export function lucideIconToSvg(
	nodes: IconNode,
	opts?: { class?: string; size?: number },
): string {
	const size = opts?.size ?? 24;
	const svgAttrs: Record<string, string | number | undefined> = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: size,
		height: size,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
	};
	if (opts?.class) svgAttrs.class = opts.class;

	const inner = nodes
		.map(([tag, attrs]) => {
			const a = attrsString(attrs);
			return `<${tag} ${a} />`;
		})
		.join('');

	return `<svg ${attrsString(svgAttrs)}>${inner}</svg>`;
}
