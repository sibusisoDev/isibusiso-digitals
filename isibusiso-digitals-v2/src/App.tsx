import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GoogleAnalytics from "@/components/analytics/googleAnalytics";
import CookieConsent from "@/components/analytics/cookieConsent";
import Services from "@/pages/services";
import ServiceDetailPage from "@/pages/service-detail";
import ProcessPage from "@/pages/process";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import FaqPage from "@/pages/faq";


function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/services/:slug" component={ServiceDetailPage} />
            <Route path="/process" component={ProcessPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/faq" component={FaqPage} />
{/*
            <Route path="/work" component={Work} />
            <Route path="/work/:slug" component={CaseStudy} />




            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/blog" component={Blog} />
            <Route path="/terms" component={Terms} />*/}
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                <Toaster duration={10000} />
                    <GoogleAnalytics />
                    <CookieConsent />
                <Router />
                </TooltipProvider>
            </QueryClientProvider>
    );
}

export default App;
