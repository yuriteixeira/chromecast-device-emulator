import { readFile } from 'fs/promises';

export async function readJson(path) {
  return JSON.parse(
    await readFile(
      new URL(path, import.meta.url)
    )
  );
}
