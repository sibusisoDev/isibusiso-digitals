import {CtaBanner, FaqList, FaqSchema, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {PageLayout} from "@/components/layout/page-layout";
import {allFaqs, faqGroups} from "@/data/faqs";


export default function FaqPage() {
    useSeo (
        "FAQ | iSibusiso Digital Experiences",
        "Answers about website pricing, process and support from iSibusiso Digital Experiences."
    );

    return (
        <PageLayout>
            <PageHeader title="Frequently asked questions" intro="Short answers about cost, process and support."/>
            <div className="mx-auto max-w-4xl space-y-12 px-6 py-16">
                <FaqSchema items={allFaqs} />
                {faqGroups.map((g) => (
                    <section key={g.title}>
                        <h2 className="mb-4 text-2xl font-bold">{g.title}</h2>
                        <FaqList items={g.items} schema={false} />
                    </section>
                ))}
            </div>
            <CtaBanner heading="Still have a question?" text="Ask us directly. Every message gets a reply within 24 hours." />
        </PageLayout>
    )

}