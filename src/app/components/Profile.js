import React from 'react'
import Image from 'next/image'
import '../styles/profilePage.css'

const Profile = ({src, alt, desc, handleNavigate}) => {
  return (
    <div className="profileContainer" onClick={handleNavigate}>
        <div className="profileImgContainer">
            <Image
                src={src}
                alt={alt}
                fill
                priority={true}
                quality={75}
            />
        </div>
        
        <div className="imageDesc">{desc}</div>
    </div>
  )
}

export default Profile