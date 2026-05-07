import fs from 'node:fs';
import type { APIRoute } from 'astro';
import { getFotostreckeFiles } from '../../lib/fotostrecke';

export function getStaticPaths() {
  return getFotostreckeFiles().map((_, index) => ({
    params: { index: String(index) },
  }));
}

export const GET: APIRoute = ({ params }) => {
  const imageIndex = Number(params.index);
  if (!Number.isInteger(imageIndex) || imageIndex < 0) {
    return new Response('Not Found', { status: 404 });
  }

  const files = getFotostreckeFiles();
  const selectedFile = files[imageIndex];
  if (!selectedFile) {
    return new Response('Not Found', { status: 404 });
  }

  const imageBuffer = fs.readFileSync(selectedFile.absolutePath);
  return new Response(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': selectedFile.mimeType,
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
