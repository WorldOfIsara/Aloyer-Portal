import path from 'node:path';
import sharp from 'sharp';
import type { APIRoute } from 'astro';

export const prerender = true;

const sourcePath = path.resolve(
  process.cwd(),
  'public',
  'backgrounds',
  'Leather033B_2K-JPG_Color.jpg',
);

export const GET: APIRoute = async () => {
  const optimizedTexture = await sharp(sourcePath)
    .rotate()
    .resize({
      width: 512,
      height: 512,
      fit: 'cover',
      position: 'centre',
      withoutEnlargement: true,
    })
    .webp({
      quality: 68,
      effort: 5,
      smartSubsample: true,
    })
    .toBuffer();

  return new Response(optimizedTexture, {
    status: 200,
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
