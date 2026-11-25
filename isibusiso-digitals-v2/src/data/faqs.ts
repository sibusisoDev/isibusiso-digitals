import type {Faq} from "@/data/services";


export type FaqGroup = { title: string; items: Faq[] };

export const additionalFaqGroups: FaqGroup[] = [
    {
        title: "Cost & pricing",
        items: [
            {
                question: "How much does a website cost?",
                answer: "Websites start from R4 000. The final price depends on the number of pages, the features you need and whether you want e-commerce or a custom application. You receive a clear quote after the discovery conversation, before any work begins.",
            },
            {
                question: "Why do website prices vary so much?",
                answer: "Price follows size and complexity: how many pages, how custom the design is, and what the site has to do, such as bookings, payments or user accounts. A five-page business site and a custom web application are very different projects, so they are quoted differently.",
            },
            {
                question: "What costs should I expect beyond the build?",
                answer: "Most sites have a few ongoing costs: a domain name (renewed yearly), hosting, and optionally maintenance or SEO. We list these in your quote so nothing surprises you later.", // CONFIRM what you include/bill
            },
            {
                question: "Can I pay in stages?",
                answer: "Yes. Projects are split by the four steps, so you are not asked to pay everything upfront. The payment schedule is written into your quote.", // CONFIRM payment terms
            },
            {
                question: "Will there be hidden fees?",
                answer: "No. If something affects scope or cost, we discuss it openly with you before the work continues, and nothing is added without your agreement.",
            },
        ],
    },
    {
        title: "Process & timelines",
        items: [
            {
                question: "How long does a website take to build?",
                answer: "It depends on the size of the project and how quickly content and feedback come back to us. We give you an expected timeline in the project brief once we understand what you need.",
            },
            {
                question: "What do you need from me to get started?",
                answer: "Your target audience, websites you admire, features you cannot live without and your ideal launch date. Rough notes are enough. Later on we will need your content, such as text, logos and photos.",
            },
            {
                question: "What usually slows a project down?",
                answer: "Late content and delayed feedback are the most common causes. Agreeing a simple schedule at the start keeps things moving.",
            },
            {
                question: "Can I see the design before it is built?",
                answer: "Yes. You get an interactive prototype to click through, and you can ask for changes before development starts.",
            },
            {
                question: "What if I want to change something halfway through?",
                answer: "Small tweaks are usually easy. If a change affects scope, timeline or cost, we talk it through openly first so you can decide how to proceed.",
            },
            {
                question: "Do I have to meet in person?",
                answer: "No. We can kick off in person, by call or on WhatsApp, whichever suits you.",
            },
        ],
    },
    {
        title: "Ownership & contracts",
        items: [
            {
                question: "Who owns my website after it is finished?",
                answer: "You do. Once the project is paid for, the website, its content and your domain belong to you.", // CONFIRM ownership terms
            },
            {
                question: "Can I move my site to another host or developer later?",
                answer: "Yes. Your site is not locked to us, and we will hand over what a new developer or host needs.", // CONFIRM handover terms
            },
            {
                question: "What is agreed in writing before we start?",
                answer: "A project brief and quote covering what is being built, the price, the schedule and what is and is not included, so we are both clear before any work begins.", // CONFIRM
            },
            {
                question: "Will you keep my business information private?",
                answer: "Yes. What you share about your business and customers is used only for your project.",
            },
        ],
    },
    {
        title: "South African essentials",
        items: [
            {
                question: "Should I use a .co.za or a .com domain?",
                answer: "If your customers are mainly in South Africa, a .co.za domain is usually the best choice because it signals a local business. If you also serve international customers, a .com can be worth having as well. We will help you choose and register it.",
            },
            {
                question: "Do I need to be a registered company to get a .co.za domain?",
                answer: "No. Registering a .co.za domain does not require a company registration, although having your business details ready makes setting up the rest of your online presence easier.",
            },
            {
                question: "Does my website need to comply with POPIA?",
                answer: "If your site collects personal information, for example through a contact form, POPIA is likely to apply. We build sites with this in mind, including privacy information and clear consent on forms, and recommend you confirm your specific obligations with a legal adviser.", // CONFIRM what you include
            },
            {
                question: "Will my site work well on mobile data and slower connections?",
                answer: "Yes. Most South African visitors browse on their phones, so we build mobile-first and keep pages light so they load quickly even on slower connections.",
            },
        ],
    },
    {
        title: "Websites & technology",
        items: [
            {
                question: "Will my website work on phones and tablets?",
                answer: "Yes. Every site is built to adapt to any screen size.",
            },
            {
                question: "Will people find my website on Google?",
                answer: "We build sites with search engines in mind: clean structure, fast loading and proper page titles and descriptions. Ranking well takes time and ongoing effort, which is why we also offer SEO as a retainer after launch.",
            },
            {
                question: "Is my website secure?",
                answer: "Security is part of the build. We create sites that are secure by design, and we keep an eye on them after launch.", // CONFIRM SSL/backups details
            },
            {
                question: "Can I update the content myself?",
                answer: "Where you want that, yes. Tell us during discovery how often your content changes and who will manage it, and we will set the site up to suit.", // CONFIRM CMS approach
            },
            {
                question: "Can you build an online shop or take payments?",
                answer: "Yes. We build e-commerce sites as well as custom applications, such as booking systems or customer portals.",
            },
            {
                question: "Can you improve or redesign my existing website?",
                answer: "Yes. We look at what is working and what is not, and then redesign, fix or rebuild so you are not paying to replace what already serves you.",
            },
        ],
    },
    {
        title: "After launch",
        items: [
            {
                question: "What happens after my website goes live?",
                answer: "We launch it in a controlled, tested deployment and monitor its early performance. After that we can help improve conversion and search visibility through updates or an SEO retainer.",
            },
            {
                question: "What if something breaks?",
                answer: "Contact us and we will respond within 24 hours. Support terms for your project are agreed upfront.", // CONFIRM support/warranty terms
            },
            {
                question: "How quickly will you reply to my questions?",
                answer: "Every enquiry, question and project update receives a response within 24 hours.",
            },
            {
                question: "Do you offer ongoing support or maintenance?",
                answer: "Yes. We offer updates and an SEO retainer so your site keeps working for your business after launch.", // CONFIRM maintenance plans
            },
        ],
    },
];

export const additionalFaqs: Faq[] = additionalFaqGroups.flatMap((g) => g.items);

// Names the rest of the site (and faq.tsx) already import.
// Keeping these aliases means no other file has to change.
export const faqGroups: FaqGroup[] = additionalFaqGroups;
export const allFaqs: Faq[] = additionalFaqs;