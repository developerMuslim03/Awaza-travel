import { prismadb } from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const rating = searchParams.get("rating");
    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");

   
    const filters: Prisma.HotelWhereInput[] = [];

    if (priceMin || priceMax) {
    
        const priceFilter: { gte?: number; lte?: number } = {};
        
        if (priceMin) priceFilter.gte = parseInt(priceMin);
        if (priceMax) priceFilter.lte = parseInt(priceMax);
        
        filters.push({ pricePernight: priceFilter });
    }

    if (rating) {
        filters.push({ rating: { gte: parseFloat(rating) } });
    }

    try {
        const hotels = await prismadb.hotel.findMany({
        
            where: filters.length > 0 ? { AND: filters } : {}, 
            include: {
                rooms: true,
            }
        });

        return NextResponse.json(hotels);
    } catch (error) {
        console.error("[HOTELS_GET]", error);
        return NextResponse.json(
            { error: "Veriler yüklenirken bir hata oluştu." }, 
            { status: 500 }
        );
    }
}