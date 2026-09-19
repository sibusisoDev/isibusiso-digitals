import React from "react";
import { useLocation } from "wouter";
import {Button} from "@/components/ui/button";

const pricingPlans = [
    {
        title: "Website Development",
        priceLabel: "From",
        price: "R4,000",
        description: "Professional, responsive websites designed to give your business a strong and credible online presence.",
        sectionTitle: "Ideal for",
        items: [
            "Small businesses",
            "Professional services",
            "Personal brands",
            "Startups",
            "Company websites",
        ],
        includedTitle: "What's included",
        included: [
            "Responsive design",
            "Custom website development",
            "Mobile optimisation",
            "Contact forms",
            "Basic SEO setup",
            "Social media integration",
        ],
        featured: true,
    },


    {
        title: "E-commerce Development",
        priceLabel: "Quote based on requirements",
        price: "Request a Quote",
        description: "Online stores designed to help businesses showcase products and provide customers with a smooth shopping experience.",
        sectionTitle: "Ideal for",
        items: [
            "Retail businesses",
            "Product-based businesses",
            "Online stores",
            "Startups entering e-commerce",
        ],
        includedTitle: "What's included",
        included: [
            "Product catalogue",
            "Shopping cart",
            "Checkout functionality",
            "Payment integration",
            "Responsive design",
            "Basic SEO setup",
        ],
        featured: false,
    },
    {
        title: "Custom Web Applications",
        priceLabel: "Quote based on requirements",
        price: "Request a Quote",
        description: "Purpose-built web applications designed around your business processes, workflows and functionality.",
        sectionTitle: "Examples include",
        items: [
            "Business management systems",
            "Customer portals",
            "Booking systems",
            "Custom dashboards",
            "API integrations",
            "Database-driven applications",
        ],
        includedTitle: "Built around your needs",
        included: [
            "Custom functionality",
            "Database integration",
            "API integration",
            "User authentication",
            "Business workflows",
            "Scalable architecture",
        ],
        featured: false,
    },
];

export default function Pricing() {
    const [, navigate] = useLocation();
    const handleRequestQuote = () => {
        navigate("/");

        setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth", });
            }, 100);
    };
    return (
        <section id="pricing" className="w-full px-6 py-24 dark:text-white scroll-mt-20">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"/>
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight sm:text-5x mb-6">
                        Simple, Transparent <br/>
                        <span className='text-primary'>Pricing</span>
                    </h2>

                    <p className="mx-auto mt-12 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Solutions designed around your business, with pricing tailored to
                        the scope and requirements of your project.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div key={plan.title}
                             className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                                 plan.featured
                                     ? "border-primary bg-black text-white shadow-xl dark:border-primary dark:bg-zinc-900"
                                     : "border-white/10 bg-white text-black hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-950 dark:text-white"
                             }`}>
                            {/* Featured Label */}
                            {plan.featured && (
                                <div
                                    className="absolute right-6 top-6 rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                                    Featured
                                </div>
                            )}

                            {/* Card Header */}
                            <div>
                                <h3 className="pr-20 text-2xl font-semibold tracking-tight font-display">
                                    {plan.title}
                                </h3>

                                <p className="mt-6 text-sm text-muted-foreground">
                                    {plan.priceLabel}
                                </p>

                                <div className="mt-1">
                                    <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    {plan.price}
                                    </span>
                                </div>

                                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="my-8 h-px bg-gray-300"/>

                            {/* Ideal For */}
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                    {plan.sectionTitle}
                                </h4>

                                <ul className="mt-4 space-y-3">
                                    {plan.items.map((item) => (
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
                                    {plan.includedTitle}
                                </h4>

                                <ul className="mt-4 space-y-3">
                                    {plan.included.map((feature) => (
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

                {/* Bottom CTA */}
                <div className="mx-auto mt-24 max-w-3xl text-center">
                    <span
                        className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Let's get started
                    </span>

                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
                        Tell us what you have in mind
                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                        Every project is different. If you're not sure which solution is
                        right for your business, let's discuss your requirements and find
                        an approach that works for you.
                    </p>

                    <Button size="lg" onClick={handleRequestQuote}
                            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/80">
                        Request Quote
                        <span className="transition-transform duration-200 group-hover:translate-x-1"></span>
                    </Button>

                    <p className="mt-5 text-xs text-muted-foreground">
                    No two projects are exactly the same. You'll receive a clear
                        quotation based on your specific requirements before any work
                        begins.
                    </p>
                </div>
            </div>
        </section>
    );
}
