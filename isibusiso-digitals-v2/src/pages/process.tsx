import {CtaBanner, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {PageLayout} from "@/components/layout/page-layout";

const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        body: "Before any design or code, we learn your business model, audience, competitors and goals. You get a kick-off conversations in person, by call or on WhatsApp, and the result is a project brief we both agree on."
    },
    {
        id: "02",
        title: "Design & Prototype",
        body: "Colour, typography and layout come together as an interactive prototype you can click through, so you can ask for changes before development starts."
    },
    {
        id: "03",
        title: "Development",
        body: "We build to the approved design so the site loads fast, stays secure and can grow with your business. You get regular process updates, and anything that affects scope is discussed openly before work continues."
    },
    {
        id: "04",
        title: "Launch & Growth",
        body: "We take the product live in a controlled, tested deployment and monitor its early performance. Afterwards we help improve conversion and search visibility through updates or an SEO retainer."
    }
];

export default function ProcessPage() {
    useSeo(
        "Our process | iSibusiso Digital Experiences",
        "A clear four-step process from idea to live product: discovery, design, development and launch."
    );

    return (
        <PageLayout>
            <PageHeader title="How a project works" intro="Every project, from a one-page site to a custom application, follows the same four steps." />
            <section className="container mx-auto px-6 py-16">
                <ol className="max-w-3xl space-y-12">
                    {steps.map((s) => (
                        <li key={s.id} className="flex gap-6">
                            <span aria-hidden className="text-4xl font-bold font-display text-primary/50">
                                {s.id}
                            </span>
                            <div className="pt-2">
                                <h2 className="mb-3 text-2xl font-bold">{s.title}</h2>
                                <p className="text-lg leading-relaxed text-muted-foreground">{s.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mt-16 max-w-3xl border border-white/10 p-6">
                    <h2 className="text-xl font-bold">What to bring to the first conversation</h2>
                    <p className="mt-2 text-muted-foreground">
                        Your target audience, websites you admire, features you cannot live without and your ideal
                        launch data. Rough notes are enough.
                    </p>
                </div>
            </section>
            <CtaBanner/>
        </PageLayout>
    )

}