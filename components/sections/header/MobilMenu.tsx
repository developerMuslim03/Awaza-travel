import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navigationLinks } from '@/constans'
import{
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,

}  from "../../ui/sheet"
const MobilMenu = () => {
  return (
       <Sheet>
        <SheetTrigger asChild>
            <div className='p-3 lg:hidden bg-sky-400 cursor-pointer text-white rounded-full'>
                <Menu />
              </div>
              
        </SheetTrigger>
        <SheetContent>
        <SheetTitle className='m-3 text-3xl text-sky-500 mt-2'>Awaza</SheetTitle>
              <div className='m-3 mt-8 flex flex-col gap-3'>
                {navigationLinks.map((link, index)=>(
                <Link key={index} href={link.href} className='block font-semibold  hover:text-sky-500'>
                    {link.label}
                </Link>
                ))}
              </div>
             
        </SheetContent>
    </Sheet>
  )
}

export default MobilMenu