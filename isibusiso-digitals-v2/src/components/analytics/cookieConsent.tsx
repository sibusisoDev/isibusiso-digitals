import { useEffect, useState } from "react";
import { loadGoogleAnalytics } from "@/lib/analytics";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");

        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);

        loadGoogleAnalytics();
    };

    const rejectCookies = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setShowBanner(false);
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
                            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        >
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
