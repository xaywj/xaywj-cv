import Link from 'next/link'
import React, { ReactNode } from 'react'

export const Layout = (props:{children:ReactNode}) => {
  return (
    <div>
        <div className="sidebar flex justify-center">
            <ul className='flex gap-2 mx-auto my-5'>
                <li><Link className='p-2 bg-orange-500 rounded text-white' href={"user"}>Manage User</Link></li>
                <li><Link className='p-2 bg-orange-500 rounded text-white' href={"customer"}>Manage Customer</Link></li>
                <li><Link className='p-2 bg-orange-500 rounded text-white' href={"supplier"}>Manage Supplier</Link></li>
                <li><Link className='p-2 bg-orange-500 rounded text-white' href={"gold"}>Manage gold</Link></li>
            </ul> 
        </div>
        <hr />
        <div className='container px-3'>
                {props.children}
            </div>
    </div>
  )
}
