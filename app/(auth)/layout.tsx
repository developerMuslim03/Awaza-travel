"use client"

import { Loader2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // DÜZELTME: next/navigation olmalı
import React, { useEffect } from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const router = useRouter()
    const { data: session, status } = useSession()

    useEffect(() => {
        // Kullanıcı zaten giriş yapmışsa Login sayfasına girmesini engelle ve ana sayfaya at
        if (status === "authenticated") {
            router.push("/")
        }
    }, [status, router])

    if (status === "loading") {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Loader2 size={48} className='animate-spin' />
            </div>
        )
    }

    // Giriş yapılmışsa sayfayı gösterme (yönlendirmeyi bekle)
    if (session) {
        return null
    }

    return (
        <div>   
            <div>
                {children}
                
            </div>
        </div>
    )
}

export default AuthLayout