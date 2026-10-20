import {type ReactNode, useEffect} from "react";
import {useLocation} from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export function PageLayout({ children }: { children: ReactNode }) {
    const [location] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar/>
            <main className="pt-20">{children}</main>
            <Footer/>
        </div>
    )
}