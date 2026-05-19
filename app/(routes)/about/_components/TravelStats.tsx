'use client'
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import React from 'react'
import { motion,Variants } from 'framer-motion'
const TravelStats = () => {
    const stats = [
        {label:"Myhmanhanalarymyz", end:12, suffix: "+"},
        {label:"Müşderilerimiz", end:1200, suffix:"+"},
        {label:"Hyzmatlarymyz",end:300, suffix:"+"},
    ];

    const {ref,inView} = useInView({
        triggerOnce:false,
        threshold:0.2
    })
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
    <motion.div className="bg-sky-100 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInVariants}
            custom={1}
            >
        <div className="mx-auto container text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-sky-600 mb-4">
                Awaza milli syýasatçylyk zolagynyň ýeten sepgitleri.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda obcaecati reprehenderit praesentium, provident autem hic vitae qui animi quae.</p>
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
                {stats.map((stat,index)=>(
                    <div key={index} className="bg-white shadow-lg p-8 flex flex-col items-center">
                        <h3 className="text-4xl lg:text-6xl font-bold text-sky-500">
                            {inView ?(
                                <CountUp
                                start={0}
                                end={stat.end}
                                duration={2.5}
                                suffix={stat.suffix}
                                />
                            ):(
                                "0"
                            )}

                        </h3>
                        <p className="text-gray-600 text-lg mt-4">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default TravelStats
