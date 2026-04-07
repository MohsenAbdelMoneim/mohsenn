import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './App.css'

const NavBar = () => {
  return (
    <div className='bg-black/90 backdrop-blur-md text-white h-[70px] flex items-center fixed w-full z-[100] border-b border-white/5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>

        {/* Logo Section */}
        <div className='text-2xl font-black tracking-tighter'>
          <HashLink to="/#home" className="hover:opacity-80 transition">
            <span className='text-white'>MOHSEN</span>
            <span className='text-[#E63946]'>.DEV</span>
          </HashLink>
        </div>

        {/* Links Section */}
        <div className='hidden md:flex items-center gap-2'>
          <HashLink
            to="/#home"
            className="px-4 py-2 text-white bg-[#E63946] rounded-full text-sm font-bold transition duration-300 shadow-lg shadow-[#E63946]/20"
          >
            Home
          </HashLink>

          <HashLink
            to="/#about"
            className="px-4 py-2 text-gray-300 hover:text-[#E63946] hover:bg-white/5 rounded-full text-sm font-medium transition duration-300"
          >
            About
          </HashLink>

          <HashLink
            to="/#projectss"
            className="px-4 py-2 text-gray-300 hover:text-[#E63946] hover:bg-white/5 rounded-full text-sm font-medium transition duration-300"
          >
            Projects
          </HashLink>

          <HashLink
            to="/#skills"
            className="px-4 py-2 text-gray-300 hover:text-[#E63946] hover:bg-white/5 rounded-full text-sm font-medium transition duration-300"
          >
            Skills
          </HashLink>

          <HashLink
            to="/#contact"
            className="px-4 py-2 text-gray-300 hover:text-[#E63946] hover:bg-white/5 rounded-full text-sm font-medium transition duration-300"
          >
            Contact
          </HashLink>
        </div>

        {/* Mobile Menu Icon (Placeholder for now) */}
        <div className='md:hidden text-[#E63946]'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </div>

      </nav>
    </div>
  )
}

export default NavBar