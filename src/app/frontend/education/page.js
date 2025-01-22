'use client'
import React from 'react'
import Education from '@/app/components/Education'
import Navbar from '@/app/components/Navbar'
import '../../styles/education.css'
import BottomNav from '@/app/components/BottomNav'

const page = () => {
  return (
    <div className='educationPage'>
        <Navbar />
        <div className="education">
            <Education />
        </div>
        <BottomNav />
    </div>
  )
}

export default page