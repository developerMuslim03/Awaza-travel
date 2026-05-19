"use client";

import React, { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useHotelsStore } from "@/stores/hotelStore";
import RentacarFilter from "./RentacarFilter";

// Eksik olan tip tanımı eklendi
type FilterValues = {
  rating?: string;
  priceMin?: string;
  priceMax?: string;
};

const RentacarList = () => {
  const { error, fetchHotels, hotels, loading } = useHotelsStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    
    const filters: FilterValues = {
      rating: searchParams.get("rating") || "",
      priceMin: searchParams.get("priceMin") || "",
      priceMax: searchParams.get("priceMax") || "",
    };

    fetchHotels(filters);
  }, [searchParams, fetchHotels]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels & Rent a Car</h1>
      
      <RentacarFilter />

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-lg" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 font-semibold">
          Maglumatlar ýüklenmedi!
        </div>
      )}

      {!loading && !error && hotels.length === 0 && (
        <div className="text-center text-blue-500 font-semibold">
          Gözlegiňize görä netije tapylmady!
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="shadow-md">
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={hotel.photos?.[0] || "/placeholder.png"}
                    alt={hotel.name || "Hotel Image"}
                    fill
                    className="object-cover rounded"
                    unoptimized
                  />
                </div>
                <CardTitle className="text-lg font-semibold mt-2">
                  {hotel.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-orange-700 font-bold">{hotel.rating} ★</p>
                <p className="text-gray-700 line-clamp-2">{hotel.description}</p>
                <p className="text-sm text-gray-500 mt-2">{hotel.location}</p>
                <p className="text-lg font-bold mt-2">
                
                  {hotel.pricePerNight} / gije
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RentacarList;