import React from 'react'
import { ProfileBtn } from './ProfileBtn'

export function Header(props) {
    

    return (
        <>
            <nav className="bg-white px-4 py-2.5 rounded-lg shadow-sm mb-5">
                <div className="flex justify-between items-center">
                    <div className="left"> 
                        <p className="text-lg lg:text-xl font-semibold text-dark">Hi, Shuvrodeb Roy</p>
                        <p className="text-muted">Let&apos;s check your activity</p>
                    </div>
                    <div className="">
                        <ProfileBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}
