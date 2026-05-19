'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const MainSearch = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        location : "Awaza",
        status : "Işjeň",
        time : "1-3 gün",
        price : "300 TMT",
    });
    const handleChange = (key:string, value:string) =>{
        setFormValues((prev)=>({...prev,[key]:value}));
    }
    const handleSearch = () =>{
        const query = new URLSearchParams(formValues).toString();
        console.log(query)
        router.push(`/search?${query}`)
    }
  return (
   <div className='absolute z-50 left-1/2 transform -translate-x-1/2 top-[670] md:top-[850]
   lg:top-[400] xl:top-[470] 2xl:top-[570] container px-8'>
    <div className='bg-white shadow-lg py-6 px-6 lg:px-12 rounded-2xl lg:rounded-full flex flex-col mt-12 lg:mt-24 lg:flex-row items-center justify-between gap-4'>
      <Select
      defaultValue={formValues.location}
      onValueChange={(value)=>handleChange("location",value)}
      >
        <SelectTrigger className='w-full py-6'>
            <SelectValue placeholder="location"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='Awaza'>Awaza </SelectItem>
            <SelectItem value='Aşgabat'>Aşgabat </SelectItem>
            {/* <SelectItem value='system'>system </SelectItem> */}
        </SelectContent>
    </Select>
    <Select
    defaultValue={formValues.status}
    onValueChange={(value)=>handleChange("status",value)}
    >
        <SelectTrigger className='w-full py-6'>
            <SelectValue placeholder="status"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='Işjeň'>Işjeň</SelectItem>
            {/* <SelectItem value='asgabat'>Aşgabat </SelectItem> */}
            {/* <SelectItem value='system'>system </SelectItem> */}
        </SelectContent>
    </Select>
    <Select
    defaultValue={formValues.time}
    onValueChange={(value)=>handleChange("time",value)}
    >
        <SelectTrigger className='w-full py-6'>
            <SelectValue placeholder="time"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='1-3 gün'>1-3 gün </SelectItem>
            <SelectItem value='1-5 gün'>1-5 gün </SelectItem>
            <SelectItem value='1-10 gün'>1-10 gün </SelectItem>
        </SelectContent>
    </Select>
    <Select
    defaultValue={formValues.price}
    onValueChange={(value)=>handleChange("price",value)}
    >
        <SelectTrigger className='w-full py-6'>
            <SelectValue placeholder="price"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='300 TMT'>300 TMT </SelectItem>
            <SelectItem value='700 TMT'>700 TMT </SelectItem>
            <SelectItem value='1.500 TMT'>1.500 TMT </SelectItem>
        </SelectContent>
    </Select>

    <Button 
    onClick={handleSearch}
    className='bg-sky-400 cursor-pointer text-white hover:bg-sky-600 h-[50] px-10 w-full lg:w-auto rounded-xl lg:rounded-full font-semibold transition-all'
    > Gözle</Button>
    </div>
       
   </div>
  )
}

export default MainSearch