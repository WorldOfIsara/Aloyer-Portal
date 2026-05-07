import fs from 'node:fs';
import path from 'node:path';

export type FotostreckeFile = {
  absolutePath: string;
  fileName: string;
  mimeType: string;
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function toMimeType(fileName: string): string {
  const ext = path.extname(fileName).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  return 'image/jpeg';
}

export function getFotostreckeFiles(): FotostreckeFile[] {
  const folderPath = path.resolve(process.cwd(), 'user_files', 'Fotostrecke');
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((fileName) => ({
      absolutePath: path.join(folderPath, fileName),
      fileName,
      mimeType: toMimeType(fileName),
    }));
}
