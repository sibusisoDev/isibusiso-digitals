const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

export function loadGoogleAnalytics() {
    if (!GA_MEASUREMENT_ID) {
        console.warn("Google Analytics Measurement ID is missing.");
        return;
    }

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