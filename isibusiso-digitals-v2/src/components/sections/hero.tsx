import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Digital Landscape"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
                <div className="absolute inset-0 grid-bg opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
                        Open for business
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Building Digital Experiences <br />
                        <span className="text-gradient">that grow with your business</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        Helping startups succeed through modern websites and digital solutions that achieve real business result.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                        <Button size="lg" className="rounded-xl border-solid text-base h-12 px-8 font-bold" asChild>
                            <a href="#contact">
                                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-xl border-solid text-base h-12 px-8 border-white/10 hover:bg-white/5" asChild>
                            <a href="#services">
                                Explore Services
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}