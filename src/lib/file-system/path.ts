import fs from 'fs';
import path from 'path';

import { ensureFileExists } from './file';

export function assertPathExists(pathname: string): void {
  if (!fs.existsSync(pathname)) {
    throw new Error(`Location ${pathname} could not be found.`);
  }
}

export function deletePath(filePath: string, recursive = false): void {
  fs.rmSync(filePath, { recursive: recursive });
}

export function ensureDirExists(pathname: string): void {
  if (!fs.existsSync(pathname)) {
    fs.mkdirSync(pathname);
  }
}

export function ensureLocationExists(location: string): string {
  const stat = fs.statSync(location);

  if (stat.isFile()) {
    ensureFileExists(location);
  } else if (stat.isDirectory()) {
    ensureDirExists(location);
  } else {
    throw new Error(`Location ${location} is neither file nor directory.`);
  }

  return location;
}

export function isJoinablePath(...paths: string[]): boolean {
  return paths.some(value => value === '..');
}

export function getPath(...paths: string[]): string {
  const pathFn = isJoinablePath(...paths) ? path.join : path.resolve;

  const fullPath = pathFn(...paths);

  return fullPath;
}
