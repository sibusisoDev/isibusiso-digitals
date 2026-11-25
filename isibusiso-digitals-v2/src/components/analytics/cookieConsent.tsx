import { useEffect, useState } from "react";
import { disableGoogleAnalytics,  loadGoogleAnalytics, OPEN_COOKIE_SETTINGS_EVENT, } from "@/lib/analytics";


export default function CookieConsent() {
    // show banner oon first visit
    //There is no saved choice yet
    const [showBanner, setShowBanner] = useState(
        () => typeof window !== "undefined" && !localStorage.getItem("cookie-consent")
    );

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");

        // Returning visitors who already accepted: load analytics again on every visit
        if (consent === "accepted") {
            loadGoogleAnalytics();
        }

        // The footer's "Cookie settings" link reopens the banner
        const reopen = () => setShowBanner(true);
        window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);

        return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);

        loadGoogleAnalytics();
    };

    const rejectCookies = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setShowBanner(false);

        //Also covers someone who accepted earlier and is now withdrawing consent
        disableGoogleAnalytics();
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl">
            <div className="rounded-xl border border-white/10 bg-background/95 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <h2 className="text-sm font-semibold">
                            We use cookies
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            We use cookies to understand how visitors use our
                            website and to improve your experience. You can
                            accept or decline analytics cookies.
                        </p>
                    </div>

                    <div className="flex shrink-0 gap-2">
                        <button
                            type="button"
                            onClick={rejectCookies}
                            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                            Decline
                        </button>

                        <button
                            type="button"
                            onClick={acceptCookies}
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
