const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business model, target audience, and goals to build a roadmap for success."
    },
    {
        id: "02",
        title: "Design & Prototype",
        description: "Next, we design and prototype. This is where we transform your version into clear visual style and create an interactive sample of your website. "
    },
    {
        id: "03",
        title: "Development",
        description: "We design to life. We build the website using modern tools and best practices, making sure it loads fast, stays secure, and can grow with your business."
    },
    {
        id: "04",
        title: "Launch & Growth",
        description: "Finally, we launch your website and make it live for the world to see. From here, we ensure that your site stays aligned with your business goals by focusing on performance and future improvements."
    }
];

export function Process() {
    return (
        <section id="strategy" className="py-24 bg-secondary/20 relative border-y border-white/5 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 sticky top-24">
                            Our Proven <br />
                            <span className="text-primary">Methodology</span>
                        </h2>
                    </div>

                    <div className="md:w-2/3 space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-primary/50 transition-colors">
                    {step.id}
                  </span>
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}