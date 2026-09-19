import Navbar from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import Footer from "@/components/layout/footer";


export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Process />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}