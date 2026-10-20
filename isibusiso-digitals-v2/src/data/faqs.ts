import type {Faq} from "@/data/services";

export type FaqGroup = { title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
    {
        title: "Pricing",
        items: [
            {
                question: "How much does a website cost?",
                answer: "Website development starts from R4 000. Online stores and custom applications are scoped individually, so you only pay for what your project needs.",
            },
            {
                question: "Are there hidden fees?",
                answer: "No. Your quote includes a detailed breakdown, and any change to the scope is discussed openly before extra work is billed.",
            },
            {
                question: "How fast will I get a quote?",
                answer: "Within 24 hours of your request.",
            },
        ],
    },
    {
        title: "Process",
        items: [
            {
                question: "How does a project work?",
                answer: "Four steps: Discovery and Strategy, Design and Prototype, Development , then Launch and Growth. You are kept invoiced at every stage without needing the technical detail.",
            },
            {
                question: "What do you need from me to start?",
                answer: "Your target audience, websites you admire, features you cannot live without and your ideal launch date. Rough notes are enough.",
            },
        ],
    },
    {
        title: "Support",
        items: [
            {
                question: "Do you help after launch?",
                answer: "Yes. Launch is a milestone, not an ending. We can keep improving performance and search visibility through updates or a Digital Growth & SEO retainer.",
            },
            {
                question: "How quickly do you reply?",
                answer: "Every enquiry, question and project update receives a response within 24 hours.",
            },
        ],
    },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);

export const pendingFaqs: string[] = [
    "Who owns the website, code and domain after launch?",
    "How long does a typical website take?",
    "Do you work with clients outside Gauteng?",
    "Which payment providers can you integrate for online stores?",
];
