import { Link } from "wouter";
import { Download, Mail } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHeader, useSeo } from "@/components/sections/page-blocks";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import {
    company,
    getLegalDocument,
    legalDocuments,
    legalUpdated,
    legalVersion,
    type LegalBlock,
} from "@/data/legal";

function Block({ block }: { block: LegalBlock }) {
    switch (block.type) {
        case "p":
            return <p className="mt-3 leading-relaxed text-muted-foreground">{block.text}</p>;

        case "list":
            return (
                <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                        <li key={item} className="flex items-start leading-relaxed text-muted-foreground">
                            <span className="mr-3 mt-2.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                            {item}
                        </li>
                    ))}
                </ul>
            );

        case "facts":
            return (
                <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-[11rem_1fr]">
                    {block.rows.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="font-medium">{label}</dt>
                            <dd className="text-muted-foreground">{value}</dd>
                        </div>
                    ))}
                </dl>
            );

        case "table":
            return (
                <div className="mt-4 overflow-x-auto border border-white/10">
                    <table className="w-full min-w-[40rem] text-left text-sm">
                        <thead className="bg-secondary/40">
                        <tr>
                            {block.head.map((h) => (
                                <th key={h} scope="col" className="px-4 py-3 font-bold">
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                        {block.rows.map((row) => (
                            <tr key={row[0]} className="align-top">
                                {row.map((cell, i) => (
                                    <td key={i} className="px-4 py-3 text-muted-foreground">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
    }
}

export default function LegalDocumentPage({ slug }: { slug: string }) {
    const doc = getLegalDocument(slug);

    useSeo(
        doc ? `${doc.title} | iSibusiso Digital Experiences` : "Page not found | iSibusiso Digital Experiences",
        doc ? doc.summary : "This page does not exist."
    );

    if (!doc) return <NotFound />;

    const others = legalDocuments.filter((d) => d.slug !== doc.slug);

    return (
        <PageLayout>
            <PageHeader title={doc.title} intro={doc.summary}>
                <Button asChild size="lg" className="font-bold">
                    <a href={doc.pdf} download>
                        <Download className="mr-2 h-4 w-4" aria-hidden />
                        Download PDF
                    </a>
                </Button>
                <p className="flex items-center text-sm text-muted-foreground">
                    Last updated {legalUpdated} &middot; Version {legalVersion}
                </p>
            </PageHeader>

            <div className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[16rem_1fr]">
                {/* Contents: sticky list on large screens, collapsible on small ones */}
                <aside>
                    <details className="border border-white/10 p-4 lg:hidden">
                        <summary className="cursor-pointer font-bold">On this page</summary>
                        <ul className="mt-3 space-y-2 text-sm">
                            {doc.sections.map((s) => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                                        {s.number} {s.heading}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>

                    <nav aria-label="Contents" className="sticky top-28 hidden lg:block">
                        <h2 className="mb-3 text-sm font-bold">On this page</h2>
                        <ul className="space-y-2 border-l border-white/10 text-sm">
                            {doc.sections.map((s) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className="-ml-px block border-l border-transparent pl-4 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                                    >
                                        {s.number} {s.heading}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <article className="max-w-3xl">
                    {doc.intro && <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{doc.intro}</p>}

                    {doc.sections.map((s) => (
                        <section key={s.id} className="mb-10">
                            {s.part && (
                                <div className="mb-8 mt-14 border-t border-white/10 pt-10 first:mt-0 first:border-0 first:pt-0">
                                    <h2 className="text-3xl font-bold text-primary">{s.part.title}</h2>
                                    <p className="mt-2 italic text-muted-foreground">{s.part.intro}</p>
                                </div>
                            )}
                            <h3 id={s.id} className="scroll-mt-28 text-xl font-bold">
                                {s.number} {s.heading}
                            </h3>
                            {s.blocks.map((b, i) => (
                                <Block key={i} block={b} />
                            ))}
                        </section>
                    ))}

                    <aside className="mt-16 border-t border-white/10 pt-10">
                        <h2 className="text-xl font-bold">Related documents</h2>
                        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                            {others.map((d) => (
                                <li key={d.slug}>
                                    <Link
                                        href={`/${d.slug}`}
                                        className="font-medium text-primary underline-offset-4 hover:underline"
                                    >
                                        {d.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 flex items-center text-muted-foreground">
                            <Mail className="mr-2 h-4 w-4 shrink-0" aria-hidden />
                            Questions about this document? Email{" "}
                            <a
                                href={`mailto:${company.email}`}
                                className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
                            >
                                {company.email}
                            </a>
                        </p>
                    </aside>
                </article>
            </div>
        </PageLayout>
    );
}
