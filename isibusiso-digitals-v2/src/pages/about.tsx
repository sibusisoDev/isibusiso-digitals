import {CtaBanner, PageHeader, useSeo} from "@/components/sections/page-blocks";
import {PageLayout} from "@/components/layout/page-layout";
import img from "@/assets/Sibusiso Khanye2302 Teams_Reduced.jpg"


const FOUNDER_PHOTO: string | null = img;
const FOUNDER_STORY: string | null= null;

const points = [
    {
        title: "Build for where you are now",
        description:"Pricing, process and communication are designed for startups and small businesses, not corporate budgets. Websites start from R4 000."
    },
    {
        title: "Replies within 24 hours",
        description:"Every enquiry, question and project update receives a response within a day, so you are never left waiting."
    },
    {
        title: "Local context",
        description:"Based in Alberton, Gauteng, with advice grounded in the South African market rather than an oversees playbook."
    },
    {
        title: "One partner from idea to growth",
        description:"Web development, e-commerce, custom applications, UI/UX design and SEO, so you are not juggling freelancers. "
    }
]

export default function AboutPage () {
    useSeo(
        "About | iSibusiso Digital Experiences",
        "A founder-led web studio in Alberton helping South African startups and small business needs get online."
    );

    return (
        <PageLayout>
            <PageHeader title="A founder-led web studio for startups and small businesses" intro="iSibusiso Digitaal Experiences is not a faceless agency. Every project is a collaboration with the person who runs the studio." />

            <div className="container mx-auto space-y-16 px-6 py-16">
                <section className={FOUNDER_PHOTO ? "grid gap-10 md:grid-cols-[1fr_18rem] md:items-start" : ""}>
                    <div>
                        <h2 className="text-2xl font-bold"> Sibusiso Khanye, founder</h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Sibusiso started the studio on the belief that a great partner grows with you:
                            honest advice even when it is not what you expected, flexible engagement, and a genuine
                            interest in your business succeeding online after launch.
                        </p>
                        {FOUNDER_STORY && <p className="mt-3 max-w-2xl text-muted-foreground">{FOUNDER_STORY}</p> }
                    </div>
                    {FOUNDER_PHOTO && (
                        <img src={FOUNDER_PHOTO} alt="Sibusiso Khanye Founder Logo" className="aspect-square rounded-full mx-auto w-full border border-gray-white/10 object-cover object-[75%_top]" />
                    )}
                </section>

                <section>
                    <h2 className="text-2xl font-bold">How we work</h2>
                    <dl className="mt-6 grid gap-8 md:grid-cols-2">
                        {points.map((p) => (
                            <div key={p.title} className="border-l-2 border-primary pl-5">
                                <dt className="text-lg font-bold">{p.title}</dt>
                                <dd className="mt-2 text-muted-foreground">{p.description}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>

            <CtaBanner heading="Let's talk about your business" />
        </PageLayout>
    )
}