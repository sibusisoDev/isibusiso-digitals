import { CtaBanner, PageHeader, useSeo } from "@/components/sections/page-blocks";
import { PageLayout } from "@/components/layout/page-layout";
import img from "@/assets/Sibusiso Khanye2302 Teams_Reduced.jpg";

import {
    Fingerprint,
    HeartHandshake,
    Rocket,
    ShieldCheck,
    TrendingUp,
    Users
} from "lucide-react";

const FOUNDER_PHOTO: string | null = img;

const LINKEDIN_URL =
    "https://linkedin.com/in/sibusiso-khanye-236243a2/";

const founderStory = [
    "I'm Sibusiso Khanye, the founder of iSibusiso Digital Experiences. I started this business from a genuine passion for creating things, exploring possibilities through technology and finding better ways to solve everyday challenges. What began as an interest in development gradually became a bigger ambition: building something of my own that could create value for other people.",
    "I've always believed that technology should open doors rather than create barriers. There are businesses with great ideas, valuable services and ambitions to grow, yet finding the right digital partner or accessing the right solutions isn't always straightforward. I saw an opportunity to approach this differently, making the process more accessible, personal and centred around what each business actually needs.",
    "For me, iSibusiso Digital Experiences is an opportunity to turn knowledge, creativity and ambition into something meaningful. It's about building a business that grows through trust, continuous learning and the value it creates for the people it works with."
];


const originStory = [
    "The name iSibusiso is derived from my own name, Sibusiso, meaning 'blessing'. It carries a personal significance that goes beyond simply identifying a business. It represents gratitude for the knowledge, opportunities and abilities I've been fortunate enough to develop, and the belief that these blessings carry an opportunity to create something meaningful.",
    "I believe knowledge becomes even more valuable when it is shared and used to make a difference. Establishing iSibusiso Digital Experiences is one way of putting that belief into practice: using technology, creativity and problem-solving to help businesses bring their ideas to life and pursue new opportunities.",
    "What I want to build is more than a service provider. I want iSibusiso Digital Experiences to become a trusted partner that businesses can approach with an idea, a challenge or an ambition, knowing that they'll receive genuine attention, honest guidance and solutions developed with purpose."
];


const businessPurpose = [
    "We believe every business deserves the opportunity to make its mark in the digital world. However, getting there can sometimes feel unnecessarily complicated. Expensive development services, generic solutions and a lack of clear communication can make it difficult for smaller businesses to know where to start or who to trust.",
    "iSibusiso Digital Experiences exists to make that experience different. We bring together thoughtful design, practical development and a people-first approach to deliver digital solutions that make sense for each business. Whether establishing an online presence, creating an e-commerce experience or developing something more specialised, our focus is on understanding the bigger picture before getting into the details.",
    "We're here to make digital development feel less intimidating, more collaborative and accessible to businesses with ambitions to do more."
];


const MISSION = "To help startups and small businesses get online with honest advice, bespoke software and a partner who stays with them as they grow.";

const VISION = "To grow into a trusted digital technology partner, creating meaningful digital experiences and innovative solutions that empower businesses to explore new possibilities.";


const approach = [
    {
        icon: ShieldCheck,
        title: "A trusted technical partner",
        description:
            "We take the time to understand your challenges, provide honest technical guidance and recommend solutions that make sense for your business. No unnecessary complexity, just practical thinking and purposeful development."
    },
    {
        icon: Fingerprint,
        title: "A creative digital partner",
        description:
            "Your ideas deserve thoughtful execution. We combine design, functionality and creativity to turn concepts into engaging digital experiences that reflect your business and connect with your audience."
    },
    {
        icon: TrendingUp,
        title: "A partner in your growth",
        description:
            "Your business won't stand still, and your digital presence shouldn't either. We build with your future in mind, creating solutions that can evolve alongside your ambitions and changing business needs."
    }
];

const values = [
    {
        icon: ShieldCheck,
        title: "Honesty Without Compromise",
        description:
            "No hidden costs, confusing jargon or unrealistic promises. We believe in honest conversations, transparent pricing and doing what we say we will do."
    },
    {
        icon: Fingerprint,
        title: "Different by Design",
        description:
            "No cookie-cutter templates. Your business isn't a copy of someone else's, so your digital experience shouldn't be either. We challenge the ordinary and create solutions that reflect your identity, ambitions and customers."
    },
    {
        icon: HeartHandshake,
        title: "People Before Technology",
        description:
            "Technology should make life easier, not more complicated. We put people at the centre of every decision, creating digital experiences that are intuitive, accessible and enjoyable."
    },
    {
        icon: Users,
        title: "Better Together",
        description:
            "Great results come from great collaboration. We listen, share ideas, welcome feedback and work alongside you to turn your vision into something meaningful."
    },
    {
        icon: Rocket,
        title: "Courage to Innovate",
        description:
            "We aren't afraid to explore new ideas, embrace emerging technologies and challenge conventional thinking. We build with curiosity, creativity and the confidence to push boundaries."
    },
    {
        icon: TrendingUp,
        title: "Progress With Purpose",
        description:
            "We don't just build for today. We create thoughtful, reliable and scalable digital solutions that help businesses adapt, evolve and grow into what's next."
    }
];


const points = [
    {
        title: "Solutions that fit your business",
        description:
            "Our services are designed with startups and growing businesses in mind, offering practical solutions and transparent pricing."
    },
    {
        title: "Responsive communication",
        description:
            "Your time matters. We aim to respond to all enquiries, questions and project updates within 24 hours, keeping communication clear and ensuring you always know where things stand."
    },
    {
        title: "Insight that understand your business",
        description:
            "We take the time to understand your business, audience and goals, delivering practical advice and digital solutions tailored to your market, wherever your business operates."
    },
    {
        title: "One partner from idea to growth",
        description:
            "From website development and e-commerce to custom applications, UI/UX design and SEO, we bring everything together under one roof. One reliable partner to support your digital journey, from the initial idea to continued growth."
    }
];


export default function AboutPage() {
    useSeo(
        "About | iSibusiso Digital Experiences",
        "Discover the thinking, purpose and vision behind iSibusiso Digital Experiences. We create meaningful digital solutions through thoughtful development, creativity and collaboration."
    );

    return (
        <PageLayout>
            <PageHeader
                title="A founder-led web studio for startups and small businesses"
                intro="iSibusiso Digital Experiences is not a faceless agency. Every project is a collaboration with the person who runs the studio."
            />

            <div className="container mx-auto space-y-20 px-6 py-16">
                {/* MEET THE FOUNDER */}
                <section
                    className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-12"
                >
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Behind the studio
                        </p>

                        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                            Sibusiso Khanye, founder
                        </h2>

                        {founderStory.map((text, i) => (
                            <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                                {text}
                            </p>
                        ))}

                        <a href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block font-semibold text-primary hover:underline">
                            Connect with Sibusiso on LinkedIn →
                        </a>
                    </div>
                    {FOUNDER_PHOTO && (
                        <div className="relative mx-auto w-full max-w-sm md:mx-0">
                            <div className="absolute -inset-3 rounded-2xl border border-primary/20" />
                            <img src={FOUNDER_PHOTO} alt="Sibusiso Khanye, founder of iSibusiso Digital Experiences" className="relative aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-[75%_top]"/>
                        </div>
                    )}
                </section>

                {/* THE MEANING BEHIND THE NAME */}
                <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our story</p>
                        <h2 className="mt-2 text-2xl font-bold md:text-3xl">More than just a name</h2>
                        {originStory.map((text, i) => (
                            <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            The meaning behind iSibusiso
                        </p>
                        <h3 className="mt-4 text-4xl font-bold tracking-tight">
                            iSibusiso.
                        </h3>
                        <p className="mt-3 text-lg font-medium">
                            A blessing.
                        </p>
                        <div className="my-6 h-px bg-primary/20" />
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Knowledge is a blessing, but its greatest value
                            is realised when you use it to create opportunities
                            for others.
                        </p>
                    </div>
                </section>


                {/* WHY WE EXIST */}
                <section>
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our purpose</p>
                        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Why we exist</h2>

                        {businessPurpose.map((text, i) => (
                            <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                        ))}
                    </div>

                    <blockquote className="mt-8 max-w-3xl border-l-2 border-primary pl-5 text-lg font-medium md:text-xl">
                        Every business deserves the opportunity to make its
                        mark in the digital world, whatever its size or budget.
                    </blockquote>
                </section>


                {/* OUR APPROACH */}
                <section>
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our approach</p>

                        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                            More than a development service.
                            A partner in your digital journey.
                        </h2>

                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            We believe the best digital solutions come from
                            understanding the people and businesses behind
                            them. That's why we bring technical thinking,
                            creative execution and a genuine interest in
                            your success to every project.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {approach.map(({ icon: Icon, title, description }) => (
                            <article
                                key={title}
                                className="rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon
                                        className="h-5 w-5"
                                        aria-hidden="true"/>
                                </span>
                                <h3 className="mt-5 text-lg font-bold">
                                    {title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* MISSION & VALUES */}
                <section>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        What drives us
                    </p>

                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                        Our mission and values
                    </h2>

                    <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our mission</p>
                        <p className="mt-2 max-w-3xl text-xl font-medium md:text-2xl">{MISSION}</p>
                    </div>

                    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {values.map(({ icon: Icon, title, description }) => (
                            <li key={title} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon
                                        className="h-5 w-5"
                                        aria-hidden="true" />
                                </span>
                                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* OUR VISION */}
                <section className="rounded-2xl border bg-card p-8 md:p-12">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Looking ahead</p>
                        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Our vision</h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                            {VISION}
                        </p>
                    </div>
                </section>



                {/* HOW WE WORK */}
                <section>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">The experience</p>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">How we work</h2>
                    <dl className="mt-8 grid gap-8 md:grid-cols-2">
                        {points.map((p) => (
                            <div key={p.title} className="border-l-2 border-primary pl-5">
                                <dt className="text-lg font-bold">
                                    {p.title}
                                </dt>

                                <dd className="mt-2 leading-relaxed text-muted-foreground">
                                    {p.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
            <CtaBanner heading="Let's talk about your business" />
        </PageLayout>
    );
}