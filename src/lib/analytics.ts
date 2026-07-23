export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "";

export function isGaEnabled(): boolean {
  return GA_MEASUREMENT_ID.startsWith("G-");
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (!isGaEnabled() || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}

export function trackPageView(path: string): void {
  if (!isGaEnabled() || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Lead conversion — mark as key event in GA4 Admin if desired. */
export function trackGenerateLead(params?: { method?: string; country?: string }): void {
  trackEvent("generate_lead", {
    method: params?.method ?? "contact_form",
    country: params?.country,
  });
}
