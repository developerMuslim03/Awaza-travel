'use client'
import { Facebook, Instagram,  MessageCircle, Phone,  Twitter, User, UserPlus } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobilMenu from './MobilMenu';
import { navigationLinks } from '@/constans';
import SearchPage from './Search';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Header = () => {

  const pathname = usePathname();

  const socialLinks = [
    {href: "#", icon: <Facebook size={20}/>},
    {href: "#", icon: <Twitter size={20}/>},
    {href: "#", icon: <Instagram size={20}/>},
  ];

  const {data:session} = useSession()
  
  return (
    <header className='bg-sky-400 text-white'>
       {/* Top bar */}
        <div className='flex container mx-auto h-16 justify-center 
        md:justify-between items-center px-4 py-2 text-sm'>
          <div className='flex items-center gap-5'>
              <div className='flex gap-3 items-center'>
                  <div className='bg-white p-2 rounded-full'>
                    <MessageCircle size={12} className='text-sky-400'/>
                  </div>
                  developermuslim03@gmail.com
               </div>
                  <div className='flex gap-3 items-center'>
                    <div className='bg-white p-2 rounded-full'>
                      <Phone size={12} className='text-blue-400'/>
                    </div>
                    +99361671603 
                  </div>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            {socialLinks.map((link, index)=>(
              <Link key={index} href={link.href} className='hover:text-white'>
                {link.icon}
              </Link>
            ))}
          </div>
    
        </div>
       {/* Navigation Bar */}
       <div className='bg-white h-28 text-black shadow flex items-center'>
          <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
            <Image
            src={"/i.webp"}
            alt='travel'
            width={681}
            height={447}
            className='w-30 lg:w-42 h-auto'
            />
            

            <nav className='hidden lg:flex space-x-8 text-lg font-semibold'>
              {navigationLinks.map((link, index)=>(
              <Link key={index} href={link.href} 
              className={`${pathname===link.href ? "text-sky-600" : "hover:text-sky-600"} `}>
                {link.label}
              </Link>
            ))}
            </nav>

            <div className='flex items-center space-x-4'>              
              <SearchPage/>

              {session ? (
                <Link href="/profile" className='p-3 bg-sky-400 cursor-pointer text-white rounded-full'>                
                  <User />
                </Link>
              ):(
                  <Link href="/login" className='p-3 bg-red-400 cursor-pointer text-white rounded-full'>                
                    <UserPlus />
                </Link>
              )}

              
             <MobilMenu/>
              
            </div>
          </div>
       </div>
    </header>
  )
}

export default Header