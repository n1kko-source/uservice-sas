import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { GA_MEASUREMENT_ID, isGaEnabled, trackPageView } from "@/lib/analytics";

/**
 * Loads gtag.js once and sends SPA page_view on route changes.
 * No-ops when VITE_GA_MEASUREMENT_ID is missing.
 */
export function GoogleAnalytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const initialized = useRef(false);

  useEffect(() => {
    if (!isGaEnabled() || initialized.current) return;
    initialized.current = true;

    window.dataLayer = window.dataLayer || [];
    // gtag.js expects `dataLayer.push(arguments)`, not a rest array
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isGaEnabled()) return;
    const path = `${pathname}${search || ""}`;
    trackPageView(path);
  }, [pathname, search]);

  return null;
}
