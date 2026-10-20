//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import {Link, useLocation} from "wouter";
import {useEffect} from "react";
import {PageLayout} from "@/components/layout/page-layout";
import {CtaBanner, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {services} from "@/data/services";
import {Link} from "wouter";

export default function ServicesPage() {
    useSeo("Services | iSibusiso Digital Experiences",
        "Web development, e-commerce, custom web applications, UI/UX design and SEO for South African startups and small businesses.")
    return (
        <PageLayout>
            <PageHeader
                title="Services"
                intro="Everything a startup or small business needs online, from one studio."
            />
            <section className="container mx-auto px-6 py-16">
                <ul className="divide-y divide-white/10">
                    {services.map((s) => (
                        <li key={s.serviceId} className="py-8 first:pt-8">
                            <h2 className="text-2xl font-bold">
                                <Link href={`/services/${s.serviceId}`} className="hover:text-primary transition-colors">
                                    {s.title}
                                </Link>
                            </h2>
                            <p className={"mt-2 max-w-2xl text-lg text-muted-foreground"}>{s.tagline}</p>
                            <p className="mt-3 text-sm text-mutted-foreground">{s.pricingNote}</p>
                            <Link href={`/services/${s.serviceId}`}
                                  className="mt-4 inline-block font-medium text-primary underline-offset-4 hover:underline">
                                See what's included
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <CtaBanner/>
        </PageLayout>
    );



}

