import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#services", label: "Services" },
        { href: "#strategy", label: "Our Strategy" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <img
                    src="/logo_white_1.png"
                    alt="iSibusiso Digital Experiences Logo"
                    className="h-36 w-auto object-contain dark:invert"
                />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button className="rounded-xl border-solid font-bold" size="sm" asChild>
                        <a href="#contact">Start Project</a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 w-full bg-background border-b border-white/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button className="rounded-none w-full font-bold" asChild>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Start Project</a>
                    </Button>
                </div>
            )}
        </nav>
    );
}