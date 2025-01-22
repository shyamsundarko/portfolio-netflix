'use client'
import React from 'react'
import '../styles/homePage.css'
import Image from 'next/image'
const Recommendation = ({title, src, handleRedirect}) => {
  return (
    <div className='recommendationContainer' onClick={handleRedirect}>
        <div className="recommendationImgContainer">
            <Image
                src={src}
                alt="recommendation image"
                fill
                priority={true}
                quality={75}
            />
        </div>
        <div className="recommendationTitle">
            {title}
        </div>
    </div>
  )
}

export default Recommendation