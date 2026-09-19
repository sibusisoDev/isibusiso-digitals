import { useEffect } from "react";
import { useLocation } from "wouter";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
    const [location] = useLocation();

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");

        if (consent !== "accepted" || !GA_MEASUREMENT_ID || !window.gtag) {
            return;
        }

        window.gtag("event", "page_view", {
            page_path: location,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [location]);

    return null;
}