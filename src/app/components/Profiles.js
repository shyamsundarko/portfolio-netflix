'use client'
import React from 'react'
import Profile from './Profile'
import '../styles/profilePage.css'
import { useRouter } from 'next/navigation'

const Profiles = ({profileData}) => {
    const router = useRouter();
    const handleNavigate = (desc) =>{
        router.push(`/${desc}`);
    }
  return (
    <div className="profilesContainer">
        {profileData.map((profile)=>{
            return <Profile key={profile.src} src={profile.src} alt={profile.alt} desc={profile.desc} handleNavigate={()=>handleNavigate(profile.desc)}/>
        })}
    </div>
  )
}

export default Profiles