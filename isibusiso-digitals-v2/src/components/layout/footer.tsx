import {Link} from "wouter";
import { services } from "@/data/services";
import { legalDocuments } from "@/data/legal";
import { openCookieSettings} from "@/lib/analytics";


export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="container mx-auto px-6">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div>
                        <img
                            src="/logo_white_1.png"
                            alt="iSibusiso Digital Experiences Logo"
                            className="h-16 md:h-16 lg:h-20 w-auto object-contain invert dark:invert-0"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                            Building thoughtful digital experiences, one line at a time.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold mb-3">Company</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/process" className="hover:text-primary transition-colors">Process</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Request a quote</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold mb-3">Services</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {services.map((s) => (
                                <li key={s.serviceId}>
                                    <Link href={`/services/${s.serviceId}`} className="hover:text-primary transition-colors">
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold mb-3">Connect</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {}
                            <li><a href="https://wa.me/27603051230"
                                   className="hover:text-primary transition-colors">WhatsApp</a></li>
                            <li><a href="https://linkedin.com/in/sibusiso-khanye-236243a2/"
                                   className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="https://facebook.com/sibusiso.sbudaa21"
                                   className="hover:text-primary transition-colors">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                    <p>
                        &copy; {new Date().getFullYear()} iSibusiso Digital Experiences. All rights reserved.
                    </p>
                    <nav aria-label="Legal">
                        <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            {legalDocuments.map((d) => (
                                <li key={d.slug}>
                                    <Link href={`/${d.slug}`} className="hover:text-primary transition-colors">
                                        {d.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    type="button"
                                    onClick={openCookieSettings}
                                    className="hover:text-primary transition-colors">
                                    Cookie settings
                                </button>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </footer>
    );
}