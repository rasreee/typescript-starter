import fs from 'fs';

import invariant from '@/lib/invariant';
import { is } from '@/lib/is';

export function createFile(pathname: string): void {
  fs.writeFileSync(pathname, '');
}

export function readTextFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8');
}

export function clearFile(pathname: string): void {
  createFile(pathname);
}

export function fileSize(filePath: string): number {
  return fs.statSync(filePath).size;
}

export function deleteFile(filePath: string): void {
  fs.rmSync(filePath);
}

export const readJSONArray = <T extends any[]>(filePath: string): T => {
  const content = readTextFile(filePath);
  const parsed = JSON.parse(content);

  invariant(is.array(parsed));

  return parsed as T;
};

export const readJSON = <T = any>(filePath: string): T => {
  const content = readTextFile(filePath);
  const parsed = JSON.parse(content);
  return parsed;
};

export function ensureFileExists(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }
}
