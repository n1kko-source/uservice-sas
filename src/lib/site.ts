/** Canonical site origin (matches live host after apex → www redirect). */
export const SITE_URL = "https://www.userviceglobal.com";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function absoluteAsset(path: string): string {
  return absoluteUrl(path.startsWith("/") ? path : `/${path}`);
}
