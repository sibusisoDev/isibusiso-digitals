const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export function openCookieSettings(): void {
    window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

// Here I have used the Google's documented switch for turning analytics off for a measurement ID
function setAnalyticsDisabled(disabled:boolean) {
    if(!GA_MEASUREMENT_ID) return;
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

// This will be called when a visitor declines or withdraws consent
// This will stop the analytics and removes the Google Analytics cookies this site is allowed to reach
export function disableGoogleAnalytics(): void {
    setAnalyticsDisabled(true);

    const expired = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    const hostParts = window.location.hostname.split(".");

    document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0].trim();
        if (name !== "_ga" && !name.startsWith("_ga")) return;
        document.cookie = name + expired;

        // In cases where the GA may have set the cookie on a parent domain, so we need to try each one.
        for (let i = 0; i < hostParts.length - 1; i++) {
            document.cookie = `${name}${expired}; domain=.${hostParts.slice(i).join(".")}`;
        }
    });

}

export function loadGoogleAnalytics() {
    if (!GA_MEASUREMENT_ID) {
        console.warn("Google Analytics Measurement ID is missing.");
        return;
    }

    // Visitor may have declined earlier and changed their mind
    setAnalyticsDisabled(false);

    // Prevent loading Google Analytics more than once
    if (document.getElementById("google-analytics-script")) {
        return;
    }

    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: unknown[]) {
        window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);

    const script = document.createElement("script");

    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    document.head.appendChild(script);
}