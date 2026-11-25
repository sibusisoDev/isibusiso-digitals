import type {ReactNode} from "react";
import {CtaBanner, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {PageLayout} from "@/components/layout/page-layout";
import {Calendar, Globe, ListChecks, Users, Check} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Illustrations: one per step. Pure SVG, themed with Tailwind colour tokens  */
/* -------------------------------------------------------------------------- */

/** Shared browser-window chrome used by most illustrations. */
function Browser({x, y, w, h}: {x: number; y: number; w: number; h: number}) {
    return (
        <g>
            <rect x={x} y={y} width={w} height={h} rx={12} className="fill-card stroke-current" strokeWidth={2} />
            <line x1={x} y1={y + 22} x2={x + w} y2={y + 22} className="stroke-current opacity-30" strokeWidth={1.5} />
            <circle cx={x + 14} cy={y + 11} r={3} className="fill-current opacity-50" />
            <circle cx={x + 26} cy={y + 11} r={3} className="fill-current opacity-50" />
            <circle cx={x + 38} cy={y + 11} r={3} className="fill-current opacity-50" />
        </g>
    );
}

function IllustrationFrame({label, children}: {label: string; children: ReactNode}) {
    return (
        <svg
            viewBox="0 0 320 220"
            role="img"
            aria-label={label}
            className="h-auto w-full text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {children}
        </svg>
    );
}

/** 01: a conversation turns into an agreed brief, aimed at a goal. */
function DiscoveryArt() {
    return (
        <IllustrationFrame label="Conversation bubbles leading to an agreed project brief and a target">
            {/* Client bubble */}
            <path d="M32 24h108a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H62l-18 14V80h-12a12 12 0 0 1-12-12V36a12 12 0 0 1 12-12z" className="fill-card stroke-current" strokeWidth={2} />
            <line x1={44} y1={42} x2={128} y2={42} className="stroke-current opacity-50" strokeWidth={3} />
            <line x1={44} y1={56} x2={104} y2={56} className="stroke-current opacity-30" strokeWidth={3} />

            {/* Studio bubble */}
            <rect x={78} y={104} width={128} height={46} rx={12} className="fill-current opacity-20" />
            <rect x={78} y={104} width={128} height={46} rx={12} className="stroke-current" strokeWidth={2} />
            <line x1={92} y1={121} x2={188} y2={121} className="stroke-current opacity-60" strokeWidth={3} />
            <line x1={92} y1={134} x2={152} y2={134} className="stroke-current opacity-40" strokeWidth={3} />

            {/* Agreed brief */}
            <rect x={226} y={34} width={72} height={104} rx={8} className="fill-card stroke-current" strokeWidth={2} />
            <rect x={246} y={28} width={32} height={12} rx={4} className="fill-current opacity-30" />
            {[56, 80, 104].map((y) => (
                <g key={y}>
                    <path d={`M238 ${y}l4 4 8-8`} className="stroke-current" strokeWidth={2.5} />
                    <line x1={258} y1={y} x2={288} y2={y} className="stroke-current opacity-40" strokeWidth={3} />
                </g>
            ))}
            <path d="M206 127c10 0 16-4 20-14" className="stroke-current opacity-60" strokeWidth={2} strokeDasharray="4 5" />

            {/* Target */}
            <circle cx={96} cy={188} r={24} className="stroke-current opacity-40" strokeWidth={2} />
            <circle cx={96} cy={188} r={15} className="stroke-current opacity-70" strokeWidth={2} />
            <circle cx={96} cy={188} r={5} className="fill-current" />
            <line x1={96} y1={188} x2={128} y2={168} className="stroke-current" strokeWidth={2.5} />
            <path d="M128 168l-2 -9m2 9l-9 0" className="stroke-current" strokeWidth={2.5} />
        </IllustrationFrame>
    );
}

/** 02: layout, color and a clickable prototype. */
function DesignArt() {
    return (
        <IllustrationFrame label="A wireframe page with colour swatches and a cursor clicking through a prototype">
            <Browser x={24} y={20} w={272} h={176} />

            {/* nav */}
            <line x1={44} y1={46} x2={84} y2={46} className="stroke-current opacity-70" strokeWidth={4} />
            <line x1={206} y1={46} x2={226} y2={46} className="stroke-current opacity-30" strokeWidth={3} />
            <line x1={236} y1={46} x2={256} y2={46} className="stroke-current opacity-30" strokeWidth={3} />
            <rect x={264} y={40} width={20} height={12} rx={6} className="fill-current" />

            {/* hero */}
            <rect x={44} y={62} width={150} height={52} rx={8} className="fill-current opacity-20" />
            <line x1={58} y1={80} x2={140} y2={80} className="stroke-current" strokeWidth={4} />
            <line x1={58} y1={94} x2={112} y2={94} className="stroke-current opacity-50" strokeWidth={3} />
            <rect x={208} y={62} width={76} height={52} rx={8} className="stroke-current opacity-40" strokeWidth={2} strokeDasharray="4 4" />

            {/* cards */}
            {[44, 104, 164].map((x) => (
                <g key={x}>
                    <rect x={x} y={128} width={52} height={50} rx={8} className="stroke-current opacity-60" strokeWidth={2} />
                    <line x1={x + 8} y1={144} x2={x + 36} y2={144} className="stroke-current opacity-50" strokeWidth={3} />
                    <line x1={x + 8} y1={156} x2={x + 28} y2={156} className="stroke-current opacity-30" strokeWidth={3} />
                </g>
            ))}

            {/* palette */}
            <rect x={228} y={126} width={56} height={52} rx={8} className="fill-card stroke-current opacity-60" strokeWidth={2} />
            <circle cx={244} cy={142} r={7} className="fill-current" />
            <circle cx={268} cy={142} r={7} className="fill-current opacity-60" />
            <circle cx={244} cy={164} r={7} className="fill-current opacity-30" />
            <circle cx={268} cy={164} r={7} className="stroke-current" strokeWidth={2} />

            {/* cursor */}
            <path d="M176 84l0 28 8-7 6 14 6-3-6-13 11-1z" className="fill-card stroke-current" strokeWidth={2} />
        </IllustrationFrame>
    );
}

/** 03: code on one side, speed and security on the other. */
function DevelopmentArt() {
    const lines: Array<[number, number, number]> = [
        [40, 56, 60], [52, 72, 90], [52, 88, 50], [40, 104, 30],
        [52, 120, 84], [64, 136, 56], [40, 152, 70],
    ];
    return (
        <IllustrationFrame label="Code editor beside a security shield and a speed gauge">
            <Browser x={16} y={22} w={184} h={164} />
            {lines.map(([x, y, w], i) => (
                <line key={i} x1={x} y1={y} x2={x + w} y2={y} className={`stroke-current ${i % 3 === 0 ? "opacity-80" : "opacity-40"}`} strokeWidth={4} />
            ))}
            <rect x={44} y={164} width={5} height={14} className="fill-current" />

            {/* Shield */}
            <path d="M254 28l34 12v30c0 20-14 34-34 42-20-8-34-22-34-42V40z" className="fill-current opacity-20" />
            <path d="M254 28l34 12v30c0 20-14 34-34 42-20-8-34-22-34-42V40z" className="stroke-current" strokeWidth={2} />
            <path d="M240 70l10 10 18-20" className="stroke-current" strokeWidth={3.5} />

            {/* Speed gauge */}
            <path d="M222 174a32 32 0 0 1 64 0" className="stroke-current opacity-40" strokeWidth={5} />
            <path d="M222 174a32 32 0 0 1 48-27.7" className="stroke-current" strokeWidth={5} />
            <line x1={254} y1={174} x2={272} y2={152} className="stroke-current" strokeWidth={3} />
            <circle cx={254} cy={174} r={5} className="fill-current" />
        </IllustrationFrame>
    );
}

/** 04: tested go-live followed by growth. */
function LaunchArt() {
    const bars: Array<[number, number]> = [[42, 30], [76, 46], [110, 62], [144, 76], [178, 92]];
    return (
        <IllustrationFrame label="A live website with a rising growth chart and a rocket taking off">
            <Browser x={16} y={34} w={206} h={150} />
            {bars.map(([x, h], i) => (
                <rect key={x} x={x} y={164 - h} width={24} height={h} rx={4} className="fill-current" opacity={0.25 + i * 0.15} />
            ))}
            <polyline points="54,128 88,112 122,96 156,82 190,66" className="stroke-current" strokeWidth={3} />
            <circle cx={190} cy={66} r={5} className="fill-card stroke-current" strokeWidth={2.5} />

            {/* Live badge */}
            <rect x={150} y={42} width={64} height={16} rx={8} className="fill-current opacity-20" />
            <circle cx={162} cy={50} r={3} className="fill-current" />
            <line x1={170} y1={50} x2={204} y2={50} className="stroke-current" strokeWidth={3} />

            {/* Rocket */}
            <path d="M270 30c18 20 18 60 0 84-18-24-18-64 0-84z" className="fill-card stroke-current" strokeWidth={2} />
            <circle cx={270} cy={64} r={8} className="stroke-current" strokeWidth={2} />
            <path d="M255 92l-14 18 16-4zM285 92l14 18-16-4z" className="fill-current opacity-40" />
            <path d="M262 120c0 14 4 22 8 30 4-8 8-16 8-30" className="stroke-current opacity-70" strokeWidth={2.5} />
            <path d="M246 150l-8 12M294 150l8 12M270 160v18" className="stroke-current opacity-30" strokeWidth={2.5} />
        </IllustrationFrame>
    );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                    */
/* -------------------------------------------------------------------------- */

const steps = [
    {
        id: "01",
        slug: "discovery",
        title: "Discovery & Strategy",
        body: "Before any design or code, we learn your business model, audience, competitors and goals. You get a kick-off conversation in person, by call or on WhatsApp, and the result is a project brief we both agree on.",
        highlights: ["Kick-off conversation, your way", "Audience, competitor and goal research", "An agreed project brief"],
        Art: DiscoveryArt,
    },
    {
        id: "02",
        slug: "design",
        title: "Design & Prototype",
        body: "Colour, typography and layout come together as an interactive prototype you can click through, so you can ask for changes before development starts.",
        highlights: ["Colour, typography and layout", "A clickable prototype", "Changes agreed before any code"],
        Art: DesignArt,
    },
    {
        id: "03",
        title: "Development",
        slug: "development",
        body: "We build to the approved design so the site loads fast, stays secure and can grow with your business. You get regular progress updates, and anything that affects scope is discussed openly before work continues.",
        highlights: ["Fast, secure, scalable build", "Regular progress updates", "Open conversation on any scope change"],
        Art: DevelopmentArt,
    },
    {
        id: "04",
        title: "Launch & Growth",
        slug: "launch",
        body: "We take the product live in a controlled, tested deployment and monitor its early performance. Afterwards we help improve conversion and search visibility through updates or an SEO retainer.",
        highlights: ["Controlled, tested go-live", "Early performance monitoring", "Ongoing updates or an SEO retainer"],
        Art: LaunchArt,
    },
];

const bring = [
    {icon: Users, title: "Your target audience", text: "Who you want to reach"},
    {icon: Globe, title: "Websites you admire", text: "Any style or feature you like"},
    {icon: ListChecks, title: "Must-have features", text: "What you cannot live without"},
    {icon: Calendar, title: "Ideal launch date", text: "When you would like to go live"},
];


export default function ProcessPage() {
    useSeo(
        "Our process | iSibusiso Digital Experiences",
        "A clear four-step process from idea to live product: discovery, design, development and launch."
    );

    return (
        <PageLayout>
            <PageHeader title="How a project works" intro="Every project, from a one-page site to a custom application, follows the same four steps. Here is what each one looks like." />

            <section className="container mx-auto px-6 py-16">
                <nav aria-label="Project steps" className="mx-auto max-w-4xl">
                    <ol className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {steps.map((s) => (
                            <li key={s.id}>
                                <a href={`#${s.slug}`} className="group flex h-full flex-col rounded-xl border bg-card p-4 transition-colors hover:border-primary/60">
                                    <span className="font-display text-2xl font-bold text-primary/60 group-hover:text-primary">{s.id}</span>
                                    <span className="mt-1 text-sm font-semibold">{s.title}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <ol className="mt-20 space-y-24">
                    {steps.map((s, i) => (
                        <li key={s.id} id={s.slug} className="scroll-mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
                            <div className={i % 2 === 1 ? "md:order-2" : ""}>
                                <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-primary">
                                    <span aria-hidden className="font-display text-4xl font-bold text-primary/50">{s.id}</span>
                                    Step {i + 1} of {steps.length}
                                </span>
                                <h2 className="mt-3 text-3xl font-bold">{s.title}</h2>
                                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
                                <ul className="mt-6 space-y-2">
                                    {s.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-3">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                                <s.Art />
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="mx-auto mt-24 max-w-4xl rounded-2xl border border-white/10 p-8">
                    <h2 className="text-2xl font-bold">What to bring to the first conversation</h2>
                    <p className="mt-2 text-muted-foreground">Rough notes are enough. We will shape the rest together.</p>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {bring.map(({icon: Icon, title, text}) => (
                            <li key={title} className="rounded-xl border bg-card p-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-3 font-bold">{title}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaBanner/>
        </PageLayout>
    )
}