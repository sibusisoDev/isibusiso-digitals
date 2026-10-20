import {Link, useLocation} from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { caseStudies } from "@/data/case-studies";

const links = [
    { href: "/services", label: "Services" },
    ...(caseStudies.length > 0 ? [{ href: "/work", label: "Work" }] : []),
    { href: "/process", label: "Our Strategy" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useLocation();

    const isActive = (href: string) => location === href || location.startsWith(`${href}/`);
    // I will keep this event handler, although I have defined
    // html { scroll-behavior: smooth;} in global index.css file
    // Also defined scroll-mt-20 on each of my sections
   const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>
        ) => {
        event.preventDefault();
        setIsOpen(false);

        if(location === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            setLocation("/");

            requestAnimationFrame(() =>{
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" onClick={handleNavClick} className="hover:opacity-80 transition-opacity flex items-center">
                    <img src="/logo_white_1.png" alt="iSibusiso Digital Experiences Logo" className="h-36 w-auto object-contain dark:invert" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"}`}>
                            {link.label}
                        </Link>
                       /* <a key={link.href} href={link.href} onClick={(event) =>
                            handleNavClick(event,link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </a>*/
                    ))}
                    <Button className="rounded-xl border-solid font-bold" size="sm" asChild>
                        {/*<a href="#contact" onClick={(event) =>
                        handleNavClick(event, "#contact")
                        }>Start Project</a>*/}
                        <Link href="/contact">
                            Start Project
                        </Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} >
                    {isOpen ? <X/> : <Menu/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 w-full bg-background border-b border-white/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {links.map((link) => (
                     /*   <a
                            key={link.href}
                            href={link.href}
                            onClick={(event) => handleNavClick(event, link.href)}
                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </a>*/
                        <Link key={link.href} href={link.href} className={`text-lg font-medium transition-colors hover:text-primary ${
                            isActive(link.href) ? "text-primary" : "text-muted-foreground"}`} onClick={() => setIsOpen(false)}> {link.label}
                        </Link>
                    ))}
                    <Button className="rounded-none w-full font-bold" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Start Project
                        </Link>
                    </Button>
                </div>
            )}
        </nav>
    );
}