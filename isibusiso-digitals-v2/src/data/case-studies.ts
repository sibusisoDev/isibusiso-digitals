export type CaseStudy = {
    slug: string;
    title: string;
    client: string;
    kind: "client" | "concept";
    summary: string;
    challenge: string;
    solution: string;
    result: string;
    tech: string[];
    images: { src: string; alt: string }[];
}

export const caseStudies: CaseStudy[] = [];

export const getCaseStudies = (slug: string) => caseStudies.find((s) => s.slug === slug);


