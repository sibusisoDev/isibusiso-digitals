import React from "react";
import {Link, useRoute} from "wouter";
//import {Button} from "@/components/ui/button";
import {PageLayout} from "@/components/layout/page-layout";
import {ButtonLink, CtaBanner, FaqList, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {getServices} from "@/data/services";
import NotFound from "@/pages/not-found";

type ServiceOffering = {
    serviceIds: string[];
    title: string;
    priceLabel: string;
    price: string;
    description: string;
    sectionTitle: string;
    items: string[];
    includedTitle: string;
    included: string[];
    featured?: boolean;
};

const serviceOfferings: ServiceOffering[] = [
    // Website development offerings
    {
        serviceIds: ["web-development"],
        title: "Website Development",
        priceLabel: "Starting from",
        price: "R4,000",
        description:
            "A professional, responsive website that builds trust and gives customers a clear way to learn about your business and get in touch.",
        sectionTitle: "Ideal for",
        items: [
            "Small businesses and startups",
            "Professional service providers",
            "Personal brands",
            "Businesses establishing an online presence",
        ],
        includedTitle: "What's included",
        included: [
            "Custom responsive website design",
            "Mobile optimisation",
            "Contact or quote form",
            "Social media integration where required",
            "Basic SEO setup",
            "Launch support",
        ],
        featured: true,
    },
    {
        serviceIds: ["web-development"],
        title: "E-commerce Development",
        priceLabel: "Starting from",
        price: "R8,500",
        description:
            "An online store that helps you showcase products and gives customers a straightforward way to browse and purchase.",
        sectionTitle: "Ideal for",
        items: [
            "Retail and product-based businesses",
            "Businesses moving into online sales",
            "Existing stores that need a better online experience",
        ],
        includedTitle: "What's included",
        included: [
            "Product catalogue and product pages",
            "Shopping cart and checkout",
            "Payment integration, where required",
            "Responsive storefront",
            "Basic SEO setup",
            "Order-flow configuration",
        ],
        featured: false,
    },
    {
        serviceIds: ["web-development"],
        title: "Custom Web Applications",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Purpose-built web applications designed around your business processes, workflows and functionality.",
        sectionTitle: "Examples include",
        items: [
            "Customer portals",
            "Booking systems",
            "Business dashboards",
            "Internal management tools",
            "Database-driven applications",
        ],
        includedTitle: "What's included",
        included: [
            "Requirements and functionality planning",
            "Custom application features",
            "Database integration where required",
            "API integrations where required",
            "User authentication where required",
            "Scalable implementation planning",
        ],
        featured: false,
    },

    // Digital Growth & SEO offerings
    {
        serviceIds: ["digital-growth-seo"],
        title: "SEO Audit & Setup",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Understand how your website is performing in search and identify practical opportunities to improve its visibility.",
        sectionTitle: "Ideal for",
        items: [
            "Businesses starting their SEO journey",
            "Websites with low search visibility",
            "Businesses that need a clear SEO action plan",
        ],
        includedTitle: "What's included",
        included: [
            "Technical SEO audit",
            "Indexing and crawlability checks",
            "On-page SEO review",
            "Metadata and sitemap review",
            "Prioritised recommendations",
        ],
        featured: false,
    },
    {
        serviceIds: ["digital-growth-seo"],
        title: "Website Performance Optimisation",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Improve technical performance and the browsing experience across desktop and mobile devices.",
        sectionTitle: "Ideal for",
        items: [
            "Slow-loading websites",
            "Businesses with mobile visitors",
            "Websites that need a technical performance review",
        ],
        includedTitle: "What's included",
        included: [
            "Website performance assessment",
            "Image optimisation recommendations",
            "Core Web Vitals assessment",
            "Mobile performance checks",
            "Prioritised performance improvements",
        ],
        featured: true,
    },
    {
        serviceIds: ["digital-growth-seo"],
        title: "Ongoing SEO & Growth",
        priceLabel: "Pricing",
        price: "Monthly Retainer",
        description:
            "Work towards sustainable search visibility with ongoing optimisation, monitoring and measurable improvements.",
        sectionTitle: "Ideal for",
        items: [
            "Growing small businesses",
            "Businesses targeting organic traffic",
            "Websites that need continuous optimisation",
        ],
        includedTitle: "What's included",
        included: [
            "Keyword research and refinement",
            "On-page SEO improvements",
            "Search performance monitoring",
            "Analytics review and reporting",
            "Ongoing recommendations",
        ],
        featured: false,
    },

    // UI/UX design offerings
    {
        serviceIds: ["ui-ux-design"],
        title: "UI/UX Design",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Plan and design clear, user-centred digital experiences that help people navigate websites and applications with confidence.",
        sectionTitle: "Ideal for",
        items: [
            "Startups planning a digital product",
            "Businesses redesigning a website",
            "Teams improving user journeys",
        ],
        includedTitle: "What's included",
        included: [
            "User journey and flow planning",
            "Wireframes and page layouts",
            "Information architecture",
            "Interface design",
            "Feedback and agreed revisions",
        ],
        featured: false,
    },
    {
        serviceIds: ["ui-ux-design"],
        title: "Website & App Prototyping",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Explore the proposed experience before development begins with clickable screens and interactive user flows.",
        sectionTitle: "Ideal for",
        items: [
            "Startups validating product ideas",
            "Businesses planning a redesign",
            "Teams preparing for development",
        ],
        includedTitle: "What's included",
        included: [
            "Low- or high-fidelity prototype screens",
            "Clickable navigation flows",
            "Desktop and mobile screen designs",
            "Prototype walkthrough",
            "Feedback and design refinements",
        ],
        featured: true,
    },
    {
        serviceIds: ["ui-ux-design"],
        title: "Design System & UI Components",
        priceLabel: "Pricing",
        price: "Request a Quote",
        description:
            "Build a consistent visual language with reusable interface components and guidelines for your digital product.",
        sectionTitle: "Ideal for",
        items: [
            "Businesses creating a consistent brand experience",
            "Products with inconsistent interfaces",
            "Teams planning future product expansion",
        ],
        includedTitle: "What's included",
        included: [
            "Colour palette and typography",
            "Button, form and input styles",
            "Reusable UI components",
            "Spacing and layout guidelines",
            "Design system documentation",
        ],
        featured: false,
    },
];


export default function ServiceDetailPage() {
    const [, params] = useRoute("/services/:serviceId");
    const service = params ? getServices(params.serviceId) : undefined;

    useSeo(
        service ? `${service} (${service.title}) | iSibusiso Digital Experiences` : "Service not found | iSibusis Digital Experiences",
        service ? `${service.tagline}. ${service.pricingNote}` : "This service page does not exist",
    );

    if (!service) return <NotFound />;

    const offerings = serviceOfferings.filter((offering) =>
        offering.serviceIds.includes(service.serviceId),
    );

    /* const [, navigate] = useLocation();
     const handleRequestQuote = () => {
         navigate("/");

         setTimeout(() => {
             document.getElementById("contact")?.scrollIntoView({
                 behavior: "smooth", });
         }, 100);
     };*/
    return (
        <PageLayout>
            <PageHeader title={service.title} intro={service.tagline}>
                <ButtonLink href="/contact">Request a quote</ButtonLink>
                <ButtonLink href="/process" variant="outline">See how we work</ButtonLink>
            </PageHeader>

            <div className="container mx-auto space-y-14 px-6 py-16">
                <section>
                    <h2 className="text-2xl font-bold">Who is this for</h2>
                    <p className="mt-3 max-w-2xl text-muted-foreground">{service.audience}</p>
                    <p className="mt-3 max-w-2xl text-muted-foreground">{service.problem}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">What's included</h2>
                    <ul className="mt-4 space-y-2">
                        {service.deliverables.map((d) => (
                            <li key={d} className="flex items-center text-muted-foreground">
                                <span className="mr-3 h-1.5 w-1.5 shrink-0 bg-primary"/>
                                {d}
                            </li>
                        ))}
                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-3">
                            {offerings.map((offering) => (
                                <div key={offering.title}
                                     className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                                         offering.featured
                                             ? "border-primary bg-black text-white shadow-xl dark:border-primary dark:bg-zinc-900"
                                             : "border-white/10 bg-white text-black hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-950 dark:text-white"
                                     }`}>
                                    {/* Featured Label */}
                                    {offering.featured && (
                                        <div
                                            className="absolute right-6 top-6 rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                                            Featured
                                        </div>
                                    )}

                                    {/* Card Header */}
                                    <div>
                                        <h3 className="pr-20 text-2xl font-semibold tracking-tight font-display">
                                            {offering.title}
                                        </h3>

                                        <p className="mt-6 text-sm text-muted-foreground">
                                            {offering.priceLabel}
                                        </p>

                                        <div className="mt-1">
                                    <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    {offering.price}
                                    </span>
                                        </div>

                                        <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                            {offering.description}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="my-8 h-px bg-gray-300"/>

                                    {/* Ideal For */}
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                            {offering.sectionTitle}
                                        </h4>

                                        <ul className="mt-4 space-y-3">
                                            {offering.items.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm">
                                                    <span className="mt-0.5 text-sm">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Included */}
                                    <div className="mt-8">
                                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                            {offering.includedTitle}
                                        </h4>

                                        <ul className="mt-4 space-y-3">
                                            {offering.included.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm">
                                                    <span className="font-semibold text-primary">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <div className="mx-auto mt-8 max-w-3xl text-center">
                            <p className="text-xs leading-5 text-muted-foreground">
                                <span className="font-semibold">Starting prices are provided as a guide.</span>{" "}
                                Final pricing depends on project scope, functionality, integrations,
                                content requirements, design complexity and ongoing support needs.
                            </p>
                        </div>
                    </ul>
                </section>

                <section className="grid gap-10 md:grid-cols-2">
                    {service.timeline && (
                        <div>
                            <h2 className="text-2xl font-bold">Timeline</h2>
                            <p className="mt-3 text-muted-foreground"></p>
                        </div>
                    )}
                    <div>
                        <h2 className="text-2xl font-bold">Pricing</h2>
                        <p className="mt-3 text-muted-foreground">{service.pricingNote}</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">How we work</h2>
                    <p className="mt-3 max-w-2xl text-muted-foreground">
                        Every project follows four steps: Discovery & Strategy, Design & Prototype, Development, then Launch & Growth.{" "}
                        <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/process" >
                            Read the full process
                        </Link>
                    </p>
                </section>

                {service.faqs.length > 0 && (
                    <section className="max-w-3xl">
                        <h2 className="mb-4 text-2xl font-bold">Questions about {service.title.toLowerCase()}</h2>
                        <FaqList items={service.faqs} />
                    </section>
                )}
            </div>
            <CtaBanner heading={`Ready to talk about ${service.title.toLowerCase()}?`} />
        </PageLayout>
    );
}
