import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
//import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email address"),
    projectType: z.string().min(1, "Please select a project type"),
    message: z.string().min(10, "Please tell us a bit more about your project"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    //const { toast } = useToast();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            projectType: "",
            message: "",
        },
    });

    const submitMutation = useMutation({
        mutationFn: async (data: FormData) => {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Failed to submit form");
            }
            return response.json();
        },
        onSuccess: () => {
            toast.success("Message Sent", {
                description: "We'll get back to you within 24 hours.",
            });
            form.reset();
        },
        onError: (error) => {
            toast.error( "Error", {
                description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
            });
        },
    });

    function onSubmit(values: FormData) {
        submitMutation.mutate(values);
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                            Ready to <span className="text-primary">Scale?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Tell us about your vision. Whether you need a complete overhaul or a new digital product from scratch, we're ready to build.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">info@isibusiso-digital.co.za</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+27 60 305 1230</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Location</h3>
                                    <p className="text-muted-foreground">Palmridge, Alberton, 1458</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-white/5 p-8 backdrop-blur-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your Name"
                                                    className="bg-background/50 border-white/10 rounded-xl border-solid focus:border-primary"
                                                    data-testid="input-name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="info@company.com"
                                                    className="bg-background/50 border-white/10 rounded-xl border-solid focus:border-primary"
                                                    data-testid="input-email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="projectType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Project Type</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g. Business Website, Marketing Site, Blog..."
                                                    className="bg-background/50 border-white/10 rounded-xl border-solid focus:border-primary"
                                                    data-testid="input-project-type"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Project Details</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your goals..."
                                                    className="bg-background/50 border-white/10 min-h-[120px] rounded-xl border-solid focus:border-primary"
                                                    data-testid="textarea-message"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-xl border-solid font-bold"
                                    disabled={submitMutation.isPending}
                                    data-testid="button-submit"
                                >
                                    {submitMutation.isPending ? "Sending..." : "Send Inquiry"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}