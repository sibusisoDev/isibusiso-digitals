import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PricingPage from "@/pages/quote";
import GoogleAnalytics from "@/components/analytics/googleAnalytics";
import CookieConsent from "@/components/analytics/cookieConsent";


function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/pricing" component={ PricingPage } />
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
