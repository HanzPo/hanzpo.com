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

export default async function Image() {
	const backgroundColor = '#221F18';
	const gridLine = 'rgba(255,255,255,0.02)';
	const crimsonProData = await loadCrimsonPro();

	return new ImageResponse(
		(() => {
			const verticalLines = Array.from({ length: Math.floor(size.width / 20) + 1 }, (_, i) => i * 20);
			const horizontalLines = Array.from({ length: Math.floor(size.height / 20) + 1 }, (_, i) => i * 20);
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={size.width}
					height={size.height}
					viewBox={`0 0 ${size.width} ${size.height}`}
				>
					<rect width="100%" height="100%" fill={backgroundColor} />
					<g stroke={gridLine} strokeWidth="1">
						{verticalLines.map((x) => (
							<line key={`v-${x}`} x1={x + 0.5} y1="0" x2={x + 0.5} y2={size.height} />
						))}
						{horizontalLines.map((y) => (
							<line key={`h-${y}`} x1="0" y1={y + 0.5} x2={size.width} y2={y + 0.5} />
						))}
					</g>
					<text
						x={size.width / 2}
						y={size.height / 2}
						fill="#E7E5E4"
						fontFamily="Crimson Pro, serif"
						fontSize="96"
						textAnchor="middle"
						dominantBaseline="middle"
					>
						hey, i&apos;m hanz
					</text>
				</svg>
			);
		})(),
		{
			...size,
			fonts: crimsonProData
				? [
					{
						name: 'Crimson Pro',
						data: crimsonProData,
						style: 'normal',
						weight: 400,
					},
				]
				: [],
		}
	);
}
