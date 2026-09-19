import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import devImg from "@/assets/webDesign.jpeg";
import growthImg from "@/assets/seo.jpeg";
import designImg from "@/assets/uxuiDesign.jpeg";
import { Button } from "@/components/ui/button";
import {Link, useLocation} from "wouter";
import {useEffect} from "react";

const services = [
    {
        title: "Web Development",
        description: "Full-stack solutions built on modern architectures (React and Node). Fast, secure, and scalable from day one.",
        image: devImg,
        features: ["Custom Web Applications", "E-commerce Platforms"],
    },
    {
        title: "Digital Growth & SEO",
        description: "Technical SEO and performance optimization to ensure your business dominates search results and converts visitors.",
        image: growthImg,
        features: ["Technical SEO Audit", "Performance Optimization", "Analytics Setup"],
    },
    {
        title: "UI/UX Design",
        description: "Prototype interface design that blends aesthetics with usability. We create digital experiences people love to use.",
        image: designImg,
        features: ["Brand Identity", "User Interface Design", "Prototyping"],
    },
];

export function Services() {

    return (
        <section id="services" className="md:py-16 relative bg-background scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        Comprehensive <span className="text-primary">Digital Solutions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We don't just build websites, we build business assets. Our holistic approach covers every
                        aspect of your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full p-0 overflow-hidden group bg-card/50 border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors duration-500 rounded-xl border-solid">
                            <div className="relative w-full h-72 overflow-hidden m-0 p-0">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"/>
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center m-4 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 bg-primary mr-2 rounded-full"/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <p className="text-muted-foreground mb-4">
                        Interested in our services?
                    </p>

                    <Link href="/pricing" onClick={() => {
                            window.scrollTo(0,0)
                    }}>
                        <Button size="lg" className="rounded-xl mb-4 border-solid text-base h-12 px-8 font-bold">
                            See Pricing
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}