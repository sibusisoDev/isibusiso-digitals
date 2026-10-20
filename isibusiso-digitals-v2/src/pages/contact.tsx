import {useSeo, PageHeader} from "@/components/sections/page-blocks";
import {PageLayout} from "@/components/layout/page-layout";
import {Contact} from "@/components/sections/contact";

const BOOKING_URL = ""

export default function ContactPage() {
    useSeo(
        "Request a quote",
        "Tell us about your project and get a detailed quote within 24 hours."
    );

    return (
        <PageLayout>
            <PageHeader title="Request a quote" intro="Tell us what you want to build. You will get a reply with a detailed breakdown within 24 hours." />
        <section className="container mx-auto px-6 pt-16">
            <h2 className="text-2xl font-bold">What happens next</h2>
            <ol className="mt-4 max-w-2xl list-decimal space-y-2 pl-5 text-muted-foreground">
                <li>We read your request and reply within 24 hours.</li>
                <li>We arrange a short discovery conversation by call, WhatsApp or in person.</li>
                <li>You receive a written brief and quote with a full breakdown</li>
            </ol>
            {BOOKING_URL && (
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex border border-white/10 px-5 py-3 text-sm font-bold hover:bg-secondary">
                    Prefer to talk first? Book a call.
                </a>
            )}
        </section>
            <Contact/>
        </PageLayout>
    )
}