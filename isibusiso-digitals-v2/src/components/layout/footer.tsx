export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center justify-center md:justify-start">
                        <img
                            src="/logo_white_1.png"
                            alt="iSibusiso Digital Experiences Logo"
                            className="h-16 md:h-16 lg:h-20 w-auto object-contain dark:invert"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                            Building thoughtful digital experiences, one line at a time.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <a href="https://wa.me/27603051230" className="hover:text-primary transition-colors">WhatApp</a>
                        <a href="https://linkedin.com/in/sibusiso-khanye-236243a2/" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="https://facebook.com/sibusiso.sbudaa21" className="hover:text-primary transition-colors">Facebook</a>
                    </div>


                    <div className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} iSibusiso Digital Experiences. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}