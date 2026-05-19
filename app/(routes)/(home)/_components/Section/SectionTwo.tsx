'use client'
import { Button } from '@/components/ui/button'
import { motion,Variants } from 'framer-motion'
import React from 'react'
import {TypeAnimation} from "react-type-animation"

const SectionTwo = () => {
    
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

  return (
    <motion.div className='bg-sky-50 mt-12'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInVariants}
    custom={0}
    >
        <div className='mx-auto container text-center py-16 px-6 lg:px-28 '>
            <h1 className='text-2xl lg:text-4xl font-bold text-sky-500 mb-4'>
                <TypeAnimation
                sequence={[
                    "Awaza milli syýahatçylyk zolagyna hoş geldiňiz!",
                    2000,
                    "Welcome to Awaza !",
                    2000,
                    "Добро пожаловать в Аваза!",
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat = {Infinity}/>
            </h1>
            <div className='flex justify-center items-center mb-6'>
                <hr className='border-gray-300 w-1/5'/>
                <span className='mx-3 text-gray-400 text-xl'> &#128064;</span>
                <hr className='border-gray-300 w-1/5'/>                
            </div>
            <p className='text-gray-600 mb-8 max-w-3xl mx-auto'>
               Awaza milli syýahatçylyk zolagy Türkmenistanyň Kaspi deňziniň kenarynda, Türkmenbaşy şäheriniň golaýynda ýerleşýän halkara derejeli döwrebap dynç alyş merkezidir. 2007-nji ýylda düýbi tutulan bu ägirt uly taslama gysga wagtyň içinde sebitiň iň gözel we amatly syýahatçylyk nokatlarynyň birine öwrüldi. Bu ýerde dünýä standartlaryna laýyk gelýän onlarça kaşaň myhmanhanalar, saglygy dikeldiş merkezleri, kottež toplumlary we çagalar üçin dynç alyş lagerleri ýerleşýär.
                Zolagyň iň özüne çekiji aýratynlyklaryndan biri 7 kilometr uzynlygyndaky emeli derýadyr. Onuň kenarlarynda gurlan gezelenç ýodalary, kafe-restoranlar we gök zolaklar syýahatçylaryň iň gelim-gidimli ýerleri hasaplanýar. Mundan başga-da, Älemgoşar, Deniz merjeni we Jadyly kenar ýaly häzirki zaman attraksionlary bilen enjamlaşdyrylan seýilgähler, akwaparklar, ýat-klublar we halkara maslahatlar merkezi Awazanyň ähmiýetini has-da artdyrýar. Ekologik taýdan arassalygy, dury deňiz suwy we şypahana hyzmatlary bilen tapawutlanýan bu zolak, diňe bir tomusky dynç alyş däl, eýsem halkara derejeli syýasy we medeni çäreleriň geçirilýän merkezidir.
            </p>
            <div className='flex justify-center gap-4 '>
                <motion.div
                whileTap={{scale:0.9}}
                whileHover={{scale:1.1}}
                >

                    <Button className='cursor-pointer bg-sky-400 text-white py-6 px-8 rounded-lg hover:bg-sky-600 transition'> 
                        Detail
                    </Button>
                </motion.div>
                    <Button  className='cursor-pointer bg-green-400 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition'>
                        Browse
                    </Button>
            </div>
        </div>
    </motion.div>
  )
}

export default SectionTwo