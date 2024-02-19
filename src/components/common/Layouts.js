'use client'
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'
import { usePathname } from 'next/navigation'
import Authlayout from '@/app/(auth)/Authlayout'

export function Layouts({children}) {
    const router = usePathname();
 

    return (
        <>
        {
            router == '/login' ? <Authlayout>{children}</Authlayout>: ( 
                <div className="flex p-4">
                    <SideBar />
                    <div className="col pl-4 md:pl-5 pr-2 pb-4">
                        <Header />
                        {children}

                    </div>
                </div>
            )
        }
        </>
    )
}
