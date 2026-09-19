import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#services", label: "Services" },
        { href: "#strategy", label: "Our Strategy" },
        { href: "#contact", label: "Contact" },
    ];
    // I will keep this event handler, although I have defined
    // html { scroll-behavior: smooth;} in global index.css file
    // Also defined scroll-mt-20 on each of my sections
    const handleNavClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string ) => {
        event.preventDefault();

        const targetId = href.replace("#", "");
        const target = document.getElementById(targetId);

        if(!target)
            return;

        // Navbar is fixed. Therefore, I will subtract navHeight so that the section does not
        // directly position itself underneath the navbar
        // Therefore, the section will begin below 80px NavBar
        const navBarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navBarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        // Close mobile menu ensures that the mobile menu closes immediately when the user selects
        // the Nav items - Services, Strategy ....
        setIsOpen(false);

        // Update URL without triggering a page jump
        window.history.pushState(null, "", href);
    };

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" onClick={() => {
                    window.history.replaceState(null, "", "/");
                    window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        // Ensure to close mobile menu when I click the logo
                        setIsOpen(false);
                        }} className="hover:opacity-80 transition-opacity flex items-center">
                    <img src="/logo_white_1.png" alt="iSibusiso Digital Experiences Logo" className="h-36 w-auto object-contain dark:invert" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={(event) =>
                            handleNavClick(event,link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <Button className="rounded-xl border-solid font-bold" size="sm" asChild>
                        <a href="#contact" onClick={(event) =>
                        handleNavClick(event, "#contact")
                        }>Start Project</a>
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
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(event) => handleNavClick(event, link.href)}
                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <Button className="rounded-none w-full font-bold" asChild>
                        <a href="#contact" onClick={(event) => handleNavClick(event, "#contact")}>Start Project</a>
                    </Button>
                </div>
            )}
        </nav>
    );
}