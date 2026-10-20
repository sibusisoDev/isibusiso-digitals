export type Faq = {question: string; answer: string};

export type Service = {
    serviceId: string;
    title: string;
    tagline: string;
    audience: string;
    problem: string;
    deliverables: string[];
    //will commit to the range later (for now when this is empty it will hide)
    timeline?: string;
    pricingNote: string;
    faqs: Faq[];
};

export const services: Service[] = [
    {
        serviceId: "web-development",
        title: "Web Development",
        tagline: "A professional website that turns visitors into enquiries",
        audience: "Startups and small businesses getting online for the first time, or replacing a site that no longer works for them.",
        problem: "Many small businesses rely on social media alone. Customers can't find them on Google, can't see what they offer, and have no clear way to gett in touch.",
        deliverables: [
            "Custom, mobile-friendly design",
            "Contact or quote form",
            "Fast, secure build that can grow with your business",
            "Basic search engine setup",
        ],
        pricingNote: "Websites start from R4 000. You receive a detailed quote within 24 hours.",
        faqs: [
            {
                question: "How much does a website cost?",
                answer: "Website development starts from R4 000. Send us your requirements and you will receive a detailed breakdown within 24 hours.",
            },
            {
                question: "How many pages do I need?",
                answer: "Most startups launch well with a handful of pages: Home, Services, About and Contact. We agree the list together during discovery.",
            }
        ],
    },
    {
        serviceId: "digital-growth-seo",
        title: "Digital Growth & SEO",
        tagline: "Get found, then get chosen",
        audience: "Businesses with a site that needs more visitors, or more of those visitors turning into customers.",
        problem: "A site nobody visits earns nothing. Search visibility and conversion improvements build up month after month.",
        deliverables: [
            "Technical SEO audit",
            "Performance optimisation",
            "Analytics setup",
            "Ongoing improvements after launch",
        ],
        pricingNote: "Available as an ongoing retainer. Request s quote for a figure that fits your goals.",
        faqs: [
            {
                question: "Is SEO a one-off job or ongoing?",
                answer: "Both are possible. An audit and fixes can be a one-off, while a retainer keeps performance and visibility improving after launch.",
            }
        ],
    },
    {
        serviceId: "ui-ux-design",
        title: "UI/UX Design",
        tagline: "Interfaces people understand the first time they use them",
        audience: "Teams with an idea, a product that confuses users, or a site that needs a redesign.",
        problem: "A product that looks fine but confuses people loses them quickly. Good design removes friction before any code is written.",
        deliverables: [
            "Brand identity: colours, typography and look and feel",
            "User interface design",
            "An interactive prototype you can click through",
            "A feedback round before development starts",
        ],
        pricingNote: "Quoted per project, on its own or as part of a build.",
        faqs: [
            {
                question: "Do I get a prototype or just static mockups?",
                answer: "An interactive prototype, so you can experience the product the way your users will and request changes before development.",
            }
        ],
    }
]

export const getServices = (slug: string) => services.find((s) => s.serviceId === slug);
