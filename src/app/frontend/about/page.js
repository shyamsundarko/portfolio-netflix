'use client'
import React from 'react'
import About from '@/app/components/About'
import Navbar from '@/app/components/Navbar'
import '../../styles/about.css'
import BottomNav from '@/app/components/BottomNav'

const page = () => {
  return (
    <div className='aboutPage'>
        <Navbar />
        <div className="about">
            <About />
        </div>
        <BottomNav />
    </div>
  )
}

export default page