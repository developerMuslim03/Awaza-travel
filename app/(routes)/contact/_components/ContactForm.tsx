"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react' // useState'e gerek kalmadı, sildik
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha";

const formShema = z.object({
    name: z.string().min(2, { message: "Username must be at least 2 chars" }),
    email: z.string().email({ message: "E-pocta salgynyz ucin" }),
    message: z.string().min(10, { message: "10 characterden az bolmadyk tekst" }),
    recaptcha: z.string().min(1, "Bot daldiginizi tassyklan!"),
})

const ContactForm = () => {
   
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            recaptcha: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formShema>) {
        try {
            const response = await fetch("/api/contact/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values })
            })
            if (response.ok) {
                console.log("Successfull!");
                form.reset(); 
            }
        } catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 border border-sky-500 mt-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl><Input placeholder="Name" {...field} /></FormControl>
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
                                <FormControl><Input placeholder="Email" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl><Textarea placeholder="Your message..." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <ReCAPTCHA
                        sitekey="6Lcb4FgsAAAAANyyP7-s-_Er7mKXcQpQ5Ct1APvh"
                        onChange={(token: string | null) => {
                          
                            form.setValue("recaptcha", token || "")
                        }}
                        onExpired={() => {
                            form.setValue("recaptcha", "")
                        }}
                    />
                  
                    {form.formState.errors.recaptcha && (
                        <p className="text-red-500 text-sm font-medium">
                            {form.formState.errors.recaptcha.message}
                        </p>
                    )}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm