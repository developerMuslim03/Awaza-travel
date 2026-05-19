"use client";

import React, { useState } from "react";
import { z } from "zod"; 
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from 'next/image'


const loginSchema = z.object({
  email: z.string().email("Aktiw email salgysy giriz"),
  password: z.string().min(6, "Parol in azy 6 simwol bolmaly"),
});

type LoginValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginValues) {
      
    setLoading(true);
    setErrorMessage(null);
    const res = await signIn("credentials",{
      email:data.email,
      password:data.password,
      redirect:false,
    });

    if(res?.error){
      setErrorMessage("Invalid email or password");
    }else{
      router.push("/")
    }
    try {
      console.log("Giriş mnaglumatlar:", data);
     
      router.push("/"); 
    } catch (error) {
      console.error(error); 
      setErrorMessage("Email salgysy yalnys!.");
    } finally {
      setLoading(false);
    }
  }

  return (
    
    <div className="bg-sky-50 max-w-md mx-auto mt-50 p-6 border rounded-lg shadow-sm">
      <Link href="/" className='flex justify-center items-center py-8'>
        <Image
            src="/i.webp"
            alt='travel'
            width={200}
            height={100}
            className='w-32 lg:w-40 h-auto'
        />
    </Link>
      <h1 className="text-2xl font-bold mb-6 text-center">Giriş</h1>
      
      {errorMessage && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
          {errorMessage}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parol</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center justify-between">
              <Button type="submit"  disabled={loading}>
              {loading ? "Giriş amala aşyrylýar..." : "Giriş"}
            </Button>
            <Link href="/register" className="font-bold text-sm text-blue-500 hover:text-blue-800 ">
            Register
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;