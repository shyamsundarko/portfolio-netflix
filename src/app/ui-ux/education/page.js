'use client'
import React from 'react'
import Education from '@/app/components/Education'
import Navbar from '@/app/components/Navbar'
import BottomNav from '@/app/components/BottomNav'
import '../../styles/education.css'

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