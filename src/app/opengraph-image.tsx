import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

async function loadCrimsonPro(): Promise<ArrayBuffer | null> {
	try {
		const cssUrl = 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap';
		const css = await fetch(cssUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
		if (!css.ok) return null;
		const cssText = await css.text();
		const match = cssText.match(/src: url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
		if (!match) return null;
		const fontUrl = match[1];
		const res = await fetch(fontUrl);
		if (!res.ok) return null;
		return await res.arrayBuffer();
	} catch {
		return null;
	}
}

async function loadInterFallback(): Promise<ArrayBuffer | null> {
	try {
		// Stable Inter font hosted by Vercel's OG playground
		const res = await fetch('https://og-playground.vercel.app/inter-latin-ext.woff');
		if (!res.ok) return null;
		return await res.arrayBuffer();
	} catch {
		return null;
	}
}

export default async function Image() {
	const backgroundColor = '#221F18';
	const gridLine = 'rgba(255,255,255,0.02)';
	const crimsonProData = await loadCrimsonPro();

	let fontData: ArrayBuffer | null = crimsonProData;
	let fontName = 'Crimson Pro';
	if (!fontData) {
		fontData = await loadInterFallback();
		fontName = 'Inter';
	}

	if (!fontData) {
		throw new Error('Failed to load any font for OG image generation');
	}

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor,
					backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
					backgroundSize: '20px 20px',
					backgroundPosition: 'center center',
				}}
			>
				<div
					style={{
						fontFamily: fontName,
						fontSize: 96,
						color: '#E7E5E4',
						letterSpacing: -1,
						textAlign: 'center',
					}}
				>
					hey, i&apos;m hanz
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: fontName,
					data: fontData,
					style: 'normal',
					weight: 400,
				},
			],
		}
	);
}
