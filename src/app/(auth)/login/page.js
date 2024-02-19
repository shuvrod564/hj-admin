import { EnvelopeIcon, LockIcon } from '@/components/shared/Icons'
import React from 'react'
import { Checkbox } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Authlayout from '../Authlayout';
const Page = () => {
    return (
        <Authlayout>
            
            <div className="min-h-screen flex items-center">
                <div className="container">
                    <div className="">
                        <div className="w-full lg:w-[500px] bg-white rounded-lg shadow p-10 mx-auto"> 
                            <Image src={"/images/fav.png"} width={54} height={50} alt="House Journey" />
                            <h1 className="text-cente text-2xl text-[#2d2d2e] font-bold mt-4">Hello! Welcome back</h1>

                            <form className="mx-auto mt-6">
                                <div className="mb-5">
                                    <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Email / Phone No</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow rounded-md pl-14 pr-3 text-base"
                                            placeholder="Enter email id / phone no."
                                        />
                                        <EnvelopeIcon
                                            className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5"
                                        />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="text-base font-bold text-[#2a2a2a] block mb-1">Password</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            className="w-full h-14 bg-white border border-[#333] hover:border-primary focus:border-primary shadow rounded-md pl-14 pr-3 text-base"
                                            placeholder="Enter password"
                                        />
                                        <LockIcon className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5" />
                                    </div>
                                </div>
                                <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
                                    <div className="inline-flex">
                                        <Checkbox>Remember Me</Checkbox>
                                    </div>
                                    <Link href={"/forgot-password"} className="text-base text-secondary">Forgot Password</Link>
                                </div>
                                <div className="mb-4 pt-3">
                                    <button className="btn-primary w-full text-center !font-bold justify-center !py-4 !rounded-full !text-xl tracking-widest !transition">Log in</button>
                                </div>
                                <p className="text-center text-[#777] text-sm sm:text-base">Don&apos;t have an account? Please <Link href={"/register"} className="text-dark underline">Register</Link></p>
                            </form>
                        </div>
                        {/* col */}
                    </div>
                </div>
                {/* container */}
            </div>
        </Authlayout>
    )
}

export default Page