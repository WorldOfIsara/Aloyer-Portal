import sharp from 'sharp';
import type { APIRoute } from 'astro';
import { getFotostreckeFiles } from '../../lib/fotostrecke';

const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1000;
const WEBP_QUALITY = 78;

export function getStaticPaths() {
  return getFotostreckeFiles().map((_, index) => ({
    params: { index: String(index) },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const imageIndex = Number(params.index);
  if (!Number.isInteger(imageIndex) || imageIndex < 0) {
    return new Response('Not Found', { status: 404 });
  }

  const files = getFotostreckeFiles();
  const selectedFile = files[imageIndex];
  if (!selectedFile) {
    return new Response('Not Found', { status: 404 });
  }

  const optimizedImage = await sharp(selectedFile.absolutePath)
    .rotate()
    .resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: WEBP_QUALITY,
      effort: 4,
    })
    .toBuffer();

  return new Response(optimizedImage, {
    status: 200,
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
