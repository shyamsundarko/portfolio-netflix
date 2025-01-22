'use client'
import React from 'react'
import Experience from '@/app/components/Experience'
import Navbar from '@/app/components/Navbar'
import '../../styles/education.css'
import BottomNav from '@/app/components/BottomNav'

const page = () => {
  return (
    <div className='experiencePage'>
        <Navbar />
        <div className="experience">
            <Experience />
        </div>
        <BottomNav />
    </div>
  )
}

export default page