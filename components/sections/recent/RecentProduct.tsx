"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { packages } from '@/constans'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
const RecentProduct = () => {
    interface Package {
        image:string;
        title:string;
        location:string;
        duration:string;
        price:string;
        oldPrice?:string;
        discount?:string;
    }
  return (
    <Carousel 
    opts={{
        align:"start",
        loop:true
    }}
    plugins={[
        Autoplay({
            delay:5000,
        }),
    ]}
    
    className='container mx-auto px-10 lg:px-36'>
        <CarouselContent>
            {packages.map((pkg:Package, index)=>(
                <CarouselItem key={index} className='lg:basis-1/2 xl:basis-1/4'>
                    <div className='p-3'>
                                <Card className='shadow-lg'>
                                    <CardHeader className='relative'>
                                        <Image 
                                    width={500}
                                    height={500}
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className='w-full h-48 object-cover rounded-t-lg'
                                />
                                {pkg.discount && (
                                    <Badge className='absolute top-4 left-4  bg-green-600 text-white text-sm px-2 hover:bg-green-500'>
                                        {pkg.discount}
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent className='p-4 '>
                                <CardTitle className='text-xl h-[120]'>{pkg.title}</CardTitle>
                                <CardDescription className='flex items-center text-sm text-gray-500 '>
                                    <MapPin className='w--4 h-4 mr-1'/>{pkg.location}
                                </CardDescription>
                                <CardDescription className='flex items-center text-sm text-gray-500 mt-2'>
                                    <Clock className='w--4 h-4 mr-1'/>{pkg.duration}
                                </CardDescription>   
                                <div className='flex justify-between items-center mt-4'>
                                    <div>
                                        <span className='text-sky-600 font-bold text-xl'>{pkg.price}</span>
                                        {pkg.oldPrice && (
                                            <span className='text-gray-400 line-through ml-2'>{pkg.oldPrice}</span>
                                        )}
                                    </div>
                                </div>                             
                            </CardContent>
                            <CardFooter>
                                <Button className=' w-full bg-sky-400 hover:bg-sky-600 cursor-pointer '>
                                    Doly maglumat
                                </Button>
                            </CardFooter>
                        </Card>
                        
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious  className='left-0 bg-sky-400 hover:bg-sky-600 hover:text-white text-white py-6 px-6 cursor-pointer'/>
        <CarouselNext  className='right-0 bg-sky-500 hover:bg-sky-600 hover:text-white text-white py-6 px-6 cursor-pointer'/>
    </Carousel>
  )
}

export default RecentProduct