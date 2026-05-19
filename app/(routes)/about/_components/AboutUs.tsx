'use client';
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import React from 'react'


const fadeInVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: (index: number) => ({
        y: 0, 
        opacity: 1,
        transition: {
            delay: index * 0.5,
            duration: 0.8,
            ease: "easeOut"
        }
    })
}

const AboutUs = () => {
  return (
   <motion.div className='bg-sky-50'  
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInVariants}
    custom={0}
            >
        <div className='mx-auto container text-center py-16 px-6 lg:px-28 '>
            <h1 className='text-2xl lg:text-4xl font-bold text-sky-600 mb-4'>Awaza milli syýahatçylyk zolagynyň resmi web sahypasyna hoş geldiňiz!</h1>
            <div className='flex justify-center items-center mb-6'>
                <hr className='border-gray-300 w-1/5'/>
                <span className='mx-3 text-gray-400 text-xl'> &#128064;</span>
                <hr className='border-gray-300 w-1/5'/>                
            </div>
            <p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
               Awaza milli syýahatçylyk zolagy Türkmenistanyň Kaspi deňziniň kenarynda, Türkmenbaşy şäheriniň golaýynda ýerleşýän halkara derejeli döwrebap dynç alyş merkezidir. 2007-nji ýylda düýbi tutulan bu ägirt uly taslama gysga wagtyň içinde sebitiň iň gözel we amatly syýahatçylyk nokatlarynyň birine öwrüldi. Bu ýerde dünýä standartlaryna laýyk gelýän onlarça kaşaň myhmanhanalar, saglygy dikeldiş merkezleri, kottež toplumlary we çagalar üçin dynç alyş lagerleri ýerleşýär.
                Zolagyň iň özüne çekiji aýratynlyklaryndan biri 7 kilometr uzynlygyndaky emeli derýadyr. Onuň kenarlarynda gurlan gezelenç ýodalary, kafe-restoranlar we gök zolaklar syýahatçylaryň iň gelim-gidimli ýerleri hasaplanýar. Mundan başga-da, Älemgoşar, Deniz merjeni we Jadyly kenar ýaly häzirki zaman attraksionlary bilen enjamlaşdyrylan seýilgähler, akwaparklar, ýat-klublar we halkara maslahatlar merkezi Awazanyň ähmiýetini has-da artdyrýar. Ekologik taýdan arassalygy, dury deňiz suwy we şypahana hyzmatlary bilen tapawutlanýan bu zolak, diňe bir tomusky dynç alyş däl, eýsem halkara derejeli syýasy we medeni çäreleriň geçirilýän merkezidir.
            </p>
            <div className='flex justify-center gap-4'>
                <Button className='bg-sky-400 text-white py-6 px-8 rounded-lg hover:bg-sky-600 transition'> Detail</Button>
                <Button  className='bg-green-400 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition'> Browse</Button>
            </div>
        </div>
    </motion.div>
  )
}

export default AboutUs