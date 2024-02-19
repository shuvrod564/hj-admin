'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react' 
import { BiSolidDashboard } from "react-icons/bi";
import styles from "../styles/Sidebar.module.css"
import { usePathname } from 'next/navigation';


export function SideBar() {
    const [collapsed_menu, setCollapsedMenu] = useState(false)  
    const router = usePathname();
  
    // set responsive view for small screen
    const handleResponsiveViewDesign = () => {
        const sc_width = window.innerWidth;
  
        if (sc_width < 1270) {
            setCollapsedMenu(!collapsed_menu)
        } else {
            setCollapsedMenu(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResponsiveViewDesign)
        handleResponsiveViewDesign();
 
        return(()=> {
            window.removeEventListener('resize', handleResponsiveViewDesign)
        })
    }, [])

    return (
        <>
            <nav className={`
                bg-white min-h-[calc(100vh-32px)] rounded-lg py-3 pl-3 transition-all duration-300 overflow-hidden
                ${collapsed_menu ? 'w-[70px]' : 'w-[240px]'} 
            `}>
                <div className={`
                    mb-7 flex items-center pe-3 transition-all duration-300 h-14
                    ${collapsed_menu ? "justify-center" : "justify-between"}
                `}> 
                {
                    !collapsed_menu && ( 
                        <div className="col">
                            <Image
                                src={"/images/logo.png"} 
                                width={120} height={35}
                                alt="House Journey" 
                            /> 
                        </div>  
                    )
                }
                    <button  
                        type="button"
                        onClick={()=>setCollapsedMenu(!collapsed_menu)}
                        className="p-0 w-10 h-10 bg-[#f5f5f5] rounded-full inline-flex items-center justify-center"
                    > 
                        <svg className={`${collapsed_menu ? 'rotate-180' : null} transition-all duration-300`} xmlns="http://www.w3.org/2000/svg" width="1.45em" height="1.45em" viewBox="0 0 24 24"><g fill="none" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"></path><path d="M7.25 10L5.5 12l1.75 2m2.25 7V3"></path></g></svg>    
                    </button>  
                </div>
                <ul className={`flex flex-col gap-2 ${styles.link__list} ${collapsed_menu ? styles.collapsed : null}`}>
                    <li>
                        <Link href={"/"} className={`
                            flex items-center gap-2 text-base lg:text-lg font-medium !text-nav-color min-w-[260px] p-3 rounded-tl-3xl rounded-bl-3xl
                            ${router == '/' ? 'bg-[#f5f5f5]' : null}
                        `}>
                            <figure className="w-7 "> 
                                <BiSolidDashboard className="text-xl" />
                            </figure>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/house-builders"} className={`
                            flex items-center gap-2 text-base lg:text-lg font-medium !text-nav-color min-w-[260px] p-3 rounded-tl-3xl rounded-bl-3xl
                            ${router == '/house-builders' ? 'bg-[#f5f5f5]' : null}
                        `}>
                            <BiSolidDashboard className="text-xl" />
                            <span>House Builders</span>
                        </Link>
                    </li>
                </ul>
            </nav>   
        </>
    )
}
