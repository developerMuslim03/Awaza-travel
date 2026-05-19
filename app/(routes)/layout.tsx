import ClientWrapper from '@/components/providers/ClientWrapper';
import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'
import React from 'react'

interface RoutLayoutProps{
    children:React.ReactNode;
}
const RouteLayout = ({children}:RoutLayoutProps) => {
  return (
    <ClientWrapper>
    <div>
        <Header/>
            <div className='min-h-screen'>
              {children}
            </div>    
        <div className="min-h-64 "></div>
        <Footer/>
    </div>
    </ClientWrapper>
  )
}

export default RouteLayout