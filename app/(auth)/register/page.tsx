"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

/* ---------------- SCHEMA ---------------- */

const registerSchema = z.object({
  email: z.string().email("Aktiw email salgysy giriz"),
  username: z.string().min(1, "Ulanyjy ady giriziň"),
  password: z.string().min(6, "Parol iň azy 6 simwol bolmaly"),
});

type RegisterValues = z.infer<typeof registerSchema>;

/* ---------------- COMPONENT ---------------- */

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "test@gmail.com",
      username: "Test",
      password: "123456",
    },
  });

  /* ---------------- SUBMIT ---------------- */

  const onSubmit = async (data: RegisterValues) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Register failed");
      }

      setSuccess("Maglumatlaryňyz üstünlikli ýüklendi! ✅");

      // redirect after success
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

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
      <h1 className="text-2xl font-bold mb-6 text-center">Agza bol</h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-600 p-3 rounded mb-4 text-sm">
          {success}
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* EMAIL */}
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

          {/* USERNAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ulanyjy ady</FormLabel>
                <FormControl>
                  <Input placeholder="Example" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parol</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* BUTTONS */}
          <div className="flex items-center justify-between">
            <Button type="submit" disabled={loading}>
              {loading ? "Hasap döredilýär..." : "Agza bol"}
            </Button>

            <Link
              href="/login"
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Giriş
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterPage;