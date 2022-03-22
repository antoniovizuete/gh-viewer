import React from 'react'
import { Link } from 'react-router-dom'

type PageNavbarProps = {
  children?: React.ReactNode
  to?: string
}

export default function PageNavbar({ children, to }: PageNavbarProps) {
  return (
    <nav className='fixed top-0 m-2 mt-24 h-12 pb-4 z-50 flex gap-1 sm:gap-2 items-center container border-b border-slate-300 text-xl backdrop-blur-sm bg-slate-100/80'>
      <div>
        {to && 
          <Link to={to} className="rounded-md bg-blue-500 p-2 text-white text-xs text-center sm:text-sm block">Go back</Link>
        }
      </div>
      {children}
    </nav>
  )
}
