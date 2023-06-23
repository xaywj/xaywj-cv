"use client"
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter,usePathname } from 'next/navigation';
export const Layout = (props:{children:ReactNode}) => {
  const router = useRouter();
  const pathname=usePathname();
  return (
    <div>
        <div className="sidebar flex justify-center">
            <ul className='flex gap-2 mx-auto my-5'>
                <li><Link className={`p-2 rounded text-white  ${pathname== "/" ? "bg-pink-500" : "bg-orange-500"}`} href={"/"}>Home</Link></li>
                <li><Link className={`p-2 rounded text-white  ${pathname== "/portfolio" ? "bg-pink-500" : "bg-orange-500"}`} href={"portfolio"}>Portfolio</Link></li>
                <li><Link className={`p-2 rounded text-white  ${pathname== "/about" ? "bg-pink-500" : "bg-orange-500"}`} href={"about"}>About Us</Link></li> 
            </ul> 
        </div>
        <hr />
        <div className='container px-3'>
                {props.children}
        </div>
    </div>
  )
} 
