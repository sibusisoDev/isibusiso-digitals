import { useState } from "react";
import {CtaBanner, FaqList, FaqSchema, PageHeader, useSeo} from "@/components/sections/page-blocks";
import { PageLayout } from "@/components/layout/page-layout";
import { allFaqs, faqGroups } from "@/data/faqs";
import {CircleDollarSign, Compass, FileCheck2, HelpCircle, LifeBuoy, MapPin, Wrench } from "lucide-react";

const GROUP_ICONS = [
    CircleDollarSign,
    Compass,
    FileCheck2,
    MapPin,
    Wrench,
    LifeBuoy,
    HelpCircle
];

export default function FaqPage() {
    useSeo(
        "FAQ | iSibusiso Digital Experiences",
        "Answers about website pricing, process and support from iSibusiso Digital Experiences."
    );

    const [active, setActive] = useState<string>("all");

    const topics = [
        {
            title: "all",
            count: allFaqs.length,
            icon: HelpCircle
        },
        ...faqGroups.map((group, index) => ({
            title: group.title,
            count: group.items.length,
            icon: GROUP_ICONS[index % GROUP_ICONS.length]
        }))
    ];

    const visibleGroups = faqGroups
        .map((group, index) => ({ group, index }))
        .filter(({ group }) =>
            active === "all" || group.title === active
        );

    return (
        <PageLayout>
            <PageHeader
                title="Frequently asked questions"
                intro="Find answers to common questions about our services, pricing, process, ownership and ongoing support."
            />

            <div className="container mx-auto w-full min-w-0 px-6 py-12">
                <FaqSchema items={allFaqs} />

                <div className="mx-auto w-full max-w-5xl min-w-0">

                    <section className="mb-14">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold">
                                Browse by topic
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Select a category to find the answers you need.
                            </p>
                        </div>

                        <nav aria-label="FAQ categories" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {topics.map((topic) => {
                                const isActive = active === topic.title;
                                const Icon = topic.icon;

                                return (
                                    <button key={topic.title} type="button" onClick={() => setActive(topic.title)} aria-pressed={isActive} className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200${ isActive ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"}`} >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon className="h-4 w-4" aria-hidden="true"/>
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block break-words text-xs font-semibold leading-snug sm:text-sm">
                                                {topic.title === "all"
                                                    ? "All questions"
                                                    : topic.title}
                                            </span>

                                            <span className="mt-1 block text-xs opacity-60">
                                                {topic.count} questions
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </section>

                    <div className="min-w-0 space-y-12">
                        {visibleGroups.map(({ group, index }) => {
                            const Icon = GROUP_ICONS[
                                index % GROUP_ICONS.length
                            ];

                            return (
                                <section key={group.title} aria-labelledby={`faq-${index}`} className="min-w-0">
                                    <div className="mb-5 flex items-center gap-3 border-b pb-4">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" aria-hidden="true"/>
                                        </span>

                                        <h2 id={`faq-${index}`} className="min-w-0 text-xl font-bold sm:text-2xl">
                                            {group.title}
                                        </h2>

                                        <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                                            {group.items.length}
                                        </span>
                                    </div>

                                    <FaqList items={group.items} schema={false}/>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>

            <CtaBanner
                heading="Still have a question?"
                text="Ask us directly. Every message gets a reply within 24 hours."
            />
        </PageLayout>
    );
}