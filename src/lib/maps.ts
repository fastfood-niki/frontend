/** Query opens at the pin in Google Maps (web + native app handoff on phones). */
export function googleMapsUrl(lat: number, lng: number): string {
	return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`;
}

/** Opens Apple Maps on iOS/macOS; falls back to maps.apple.com elsewhere. */
export function appleMapsUrl(lat: number, lng: number, placeName: string): string {
	const q = encodeURIComponent(placeName);
	return `https://maps.apple.com/?ll=${lat}%2C${lng}&q=${q}`;
}

/** Lightweight embed from OpenStreetMap (no API key). */
export function openStreetMapEmbedUrl(lat: number, lng: number): string {
	const dLon = 0.007;
	const dLat = 0.005;
	const bbox = `${lng - dLon},${lat - dLat},${lng + dLon},${lat + dLat}`;
	return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lng}`;
}
