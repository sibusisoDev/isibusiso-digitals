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
        problem: "Many small businesses rely on social media alone. Customers can't find them on Google, can't see what they offer, and have no clear way to get in touch.",
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
        tagline: "Build a stronger online presence with SEO-ready websites",
        audience: "Helping businesses establish a stronger online presence through SEO-friendly website development, search visibility foundations and essential website improvements.",
        problem: "Having a website is only the first step. Without properly structured content, essential search engine configuration and a good browsing experience, potential customers may struggle to discover and navigate your business online.",
        deliverables: [
            "On-page SEO",
            "SEO-friendly website development",
            "Search visibility setup",
            "Basic website performance improvements",
        ],
        pricingNote: "Services are quoted according to your website requirements, the work involved and the level of optimisation needed.",
        faqs: [
            {
                question: "Do you guarantee Google rankings?",
                answer:
                    "No. Search engine rankings depend on various factors, including competition, search engine algorithms and website authority. We implement SEO best practices to establish a foundation for search visibility, but specific rankings or traffic results cannot be guaranteed.",
            },
            {
                question: "Can you optimise an existing website?",
                answer:
                    "Yes. We can assist with on-page SEO improvements, essential search visibility configuration and basic website performance improvements, depending on your website's existing structure and technology.",
            },
            {
                question: "Do you provide ongoing SEO management?",
                answer:
                    "Our primary focus is SEO foundations and website improvements. Any ongoing support or additional optimisation requirements can be discussed and quoted separately.",
            },
            {
                question: "Is SEO included in website development?",
                answer:
                    "Our website development includes basic SEO setup. More extensive on-page optimisation, search visibility configuration and website improvements are quoted separately.",
            },
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
