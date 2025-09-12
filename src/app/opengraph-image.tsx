import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

async function loadGoogleFont (font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
 
  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }
 
  throw new Error('failed to load font data')
}

export default async function Image() {
	const backgroundColor = '#221F18';
	const gridLine = 'rgba(255,255,255,0.02)';
	const text = 'hey, i\'m hanz';

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
					fontSize: 128,
					color: '#E5E7EB',
				}}
			>
				{text}
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: 'Crimson Pro',
					data: await loadGoogleFont('Crimson Pro', text),
					style: 'normal',
					weight: 400,
				},
			],
		}
	);
}
