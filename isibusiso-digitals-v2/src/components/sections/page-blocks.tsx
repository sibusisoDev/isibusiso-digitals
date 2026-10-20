import {type ReactNode, useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Link} from "wouter";
import type {Faq} from "@/data/services";

export function useSeo(title: string, description: string) {
    useEffect(() => {
        document.title = title;
        let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!tag) {
            tag = document.createElement("meta");
            tag.name = 'description';
            document.head.appendChild(tag);
        }
        tag.content = description;
    }, [title, description]);
}

export function ButtonLink({
    href,
    children,
    variant = "default",
}: {
    href: string;
    children: ReactNode;
    variant?: "default" | "outline" | "secondary";
}) {
    return(
        <Button asChild variant={variant} size= "lg" className="font-bold">
            <Link href={href}>{children}</Link>
        </Button>
    )
}

export function PageHeader({
    title,
    intro,
    children,
}: {
    title: string;
    intro?: string;
    children?: ReactNode;
}) {
    return (
        <header className="border-b border-white/5 bg-secondary/20">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
                {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
        </header>
    );
}

export function CtaBanner({
    heading = "Tell us about your project",
    text = "Send few details about your project and will get a detailed quote within 24 hours.",
}: {
    heading?: string;
    text?: string;
}) {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto flex flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
                    <p className="mt-2 max-x-xl opacity-90">{text}</p>
                </div>
                <ButtonLink href="/contact" variant="secondary">
                    Request a quote
                </ButtonLink>
            </div>
        </section>
    )
}

/*Helper function for search engine markup so FAQ answers can appear in Google results*/
export function FaqSchema({ items }: { items: Faq[] }) {
    const jsonLd = {
        "@context": "http://schema.org/",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
            "@type":"Question",
            name: f.question,
            acceptedAnswer: {"@type": "QuestionAnswer", text: f.answer},
        })),
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />;
}

/*Expandable question list*/
export function FaqList({ items, schema = true }: { items: Faq[]; schema?: boolean}) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div>
            {schema && <FaqSchema items={items} />}
            <ul className="divide-y divide-white/10 border border-white/10">
                {items.map((fq, i) => {
                    const isOpen = open === i;
                    return (
                        <li key={fq.question}>
                            <h3 className="text-base">
                                <button type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-${i}`}
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                                    {fq.question}
                                    <span aria-hidden className="text-xl leading-none text-primary">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                            </h3>
                            <div id={`faq-${i}`} hidden={!isOpen} className="px-5 pb-5 text-muted-foreground">
                                {fq.answer}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}