import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { navigationLinks } from '@/constans';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  
  const socialLinks = [
    {href: "#", icon: <Facebook size={16}/>},
    {href: "#", icon: <Twitter size={16}/>},
    {href: "#", icon: <Instagram size={16}/>},
  ];

  const instagramImages = Array.from({length:6},(_,index)=>`/hotel/inside/${index+1}.jpg`);
  return (
    <footer className='relative bg-black text-white '>
      <div className='absolute -top-16 left-1/2 transform -translate-x-1/2
      bg-sky-400 text-left px-6 py-12 rounded-md shadow-lg w-11/12 max-w-6xl h-72
      grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
        <div> 
            <h2 className='text-3xl font-bold'>Biziň bilen syýasahata dowam et!</h2>      
            <p className='mt-2 text-lg'>Döwrebap myhmanhanalarymyz 7/24 siziň hyzmatyňyza garaşýar.Syýahatyňyzy biz bilen has gyzykly geçiriň! </p>

            <Link href="/register">
              <Button className='mt-4 bg-white text-sky-400 px-6 py-2 cursor-pointer font-semibold rounded shadow-md '>
              Agza bol
            </Button>
            </Link>
        </div>
        <div className='flex justify-center relative'>
          <Image
          height={456}
          width={564}
          src="/sliders/footer.png"
          alt='Call to action graphic'
          className='hidden md:block absolute w-full -bottom-48'/>
        </div>
      </div>
      <div className='container mx-auto relative py-56 px-4 grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-7 gap-8'>
        <div className='lg:col-span-2 mt-16 '>
          <h4 className='text-xl font-bold'>Awaza</h4>
          <div className='relative w-16 mt-2 h1 bg-sky-400'>
            <div className='absolute top-1/2 left-0 right-0 h-[1] bg-sky-400'></div>
            <div className='absolute h-3 w-3 bg-sky-400 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
            <div className='absolute h-1.5 w-1.5 ml-0.5  bg-white rounded-full top-1/2 -translate-y-1/2  animate-move-dot'></div>
          </div>
          <p className='mt-4 text-sm'>Biziň bilen syýasahatyňyzy has gyzykly geçiriň, aşakdaky sosial media ulgamlary arkaly biz bilen galyň!
          </p>
           <div className='flex mt-4 space-x-4'>
            {socialLinks.map((link, index)=>(
              <Link key={index} href={link.href} className='hover:text-sky-400'>
                {link.icon}
              </Link>
            ))}
           </div>
        </div>

        <div className=' mt-16'>
            <h4 className='text-xl font-bold mb-3'>Useful Links</h4>
          <div className='relative w-16  h1 bg-sky-400'>
            <div className='absolute top-1/2 left-0 right-0 h-[1] bg-sky-400'></div>
            <div className='absolute h-3 w-3 bg-sky-400 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
            <div className='absolute h-1.5 w-1.5 ml-0.5  bg-white rounded-full top-1/2 -translate-y-1/2  animate-move-dot'></div>
          </div>
            <div className='space-y-2 text-sm mt-8'>
              {navigationLinks.map((link, index)=>(
              <Link key={index} href={link.href} className='block hover:text-sky-400'>
                {link.label}
              </Link>
            ))}
            </div>
        </div>

       <div className='lg:col-span-2 mt-16'>
          <h4 className='text-xl font-bold'>Instagram</h4>
          <div className='relative w-16 mt-2 h1 bg-sky-400'>
            <div className='absolute top-1/2 left-0 right-0 h-[1] bg-sky-400'></div>
            <div className='absolute h-3 w-3 bg-sky-400 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
            <div className='absolute h-1.5 w-1.5 ml-0.5  bg-white rounded-full top-1/2 -translate-y-1/2  animate-move-dot'></div>
          </div>
            <div className='grid grid-cols-6 gap-2 mt-8'>
              {instagramImages.map((src,index)=>(
                <Image
                  key={index}
                  src={src}
                  width={50}
                  height={50}
                  alt={`instagram Image ${index + 1}`}
                  className='w-full h-auto'
                />
              ))}
            </div>
        </div>

        <div className='lg:col-span-2 mt-16'>
          <h4 className='text-xl font-bold'>Awaza</h4>
          <div className='relative w-16 mt-2 h1 bg-sky-400'>
            <div className='absolute top-1/2 left-0 right-0 h-[1] bg-sky-400'></div>
            <div className='absolute h-3 w-3 bg-sky-400 rounded-full top-1/2 -translate-y-1/2 animate-move-dot'></div>
            <div className='absolute h-1.5 w-1.5 ml-0.5  bg-white rounded-full top-1/2 -translate-y-1/2  animate-move-dot'></div>
          </div>
          <p className='text-sm mb-4 mt-8'> 
            Teklipleriňizi we habarlaryňyzy bildirmek üçin biziň toparymyz bilen habarlaşyň
          </p>
          <div className='flex flex-col sm:flex-row'>
            <Input
              type='email'
              placeholder='Your email adress'
              className='w-full px-4 text-sky-400 rounded-none'
            />
            <Button className='px-4 py-4 rounded-none bg-sky-400   hover:bg-sky-600 cursor-pointer text-black'>
              Ugrat
            </Button>
          </div>
        </div>

      </div>

      <div className='container mx-auto py-4 text-center text-sm border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>
              Developermuslim03@gmail.com 2026 {" "}
              <span className='text-sky-400'>Awaza</span>
            </div>
            <div>
              <span className='text-sky-400'>Tik_Tok</span> Developermuslim03
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer