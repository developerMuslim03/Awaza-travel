"use client"
import React from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const filterSchema = z.object({
  rating: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
})

type FilterValues = z.infer<typeof filterSchema>;

const RentacarFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter()

  
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      rating: searchParams.get("rating") || "",
      priceMin: searchParams.get("priceMin") || "",
      priceMax: searchParams.get("priceMax") || "",
    },
  })

  function onSubmit(values: FilterValues) {
    const params = new URLSearchParams();
    if (values.rating) params.set("rating", values.rating);
    if (values.priceMin) params.set("priceMin", values.priceMin);
    if (values.priceMax) params.set("priceMax", values.priceMax);

    
    router.push(`/rent-a-cars?${params.toString()}`);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
              className="mb-4 grid grid-cols-1 sm:grid-cols-4 items-end gap-4">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 4.5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Min Price</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="minimum price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceMax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Price</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="maximum price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="bg-sky-400 hover:bg-sky-600 w-full">
            Gözle
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default RentacarFilter