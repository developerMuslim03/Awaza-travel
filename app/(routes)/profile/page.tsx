"use client"

import React from 'react'
import { useSession, signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'

const ProfilePage = () => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div className="p-6 text-center">Loading...</div>
    }

    if (!session || !session.user) {
        return <div className='text-red-500 p-6'>Login required!</div>
    }

   
    const currentUser = session.user as {
        id: string;
        username?: string | null;
        email?: string | null;
        name?: string | null;
    };

    return (
        <div className='p-6 max-w-md mx-auto mt-24 bg-white shadow-md rounded border'>
            <h1 className='text-2xl font-bold mb-4'>Profile information</h1>
            
            <p><strong>ID:</strong> {currentUser.id}</p>
            <p><strong>Username :</strong> {currentUser.username || "Belirtilmemiş"}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            
            <h2 className='mt-4 text-lg font-semibold'>Token</h2>
            <pre className='bg-gray-100 p-2 rounded text-sm overflow-auto max-h-40'>
                {JSON.stringify(currentUser, null, 2)}
            </pre>

            <Button 
                className="mt-6 w-full" 
                onClick={() => signOut({ callbackUrl: "/login" })}
            >
               Signout
            </Button>
        </div>
    )
}

export default ProfilePage