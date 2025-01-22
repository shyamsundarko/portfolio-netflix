import React from 'react'
import Profiles from '../components/Profiles'
import '../styles/profilePage.css'


const page = () => {
    const profiles = [
        {
            src: "/images/frontend.png",
            alt: "frontend profile image",
            desc: "frontend"
        }, 
        {
            src: "/images/fullstack.png",
            alt: "fullstack profile image",
            desc: "fullstack"
        },
        {
            src: "/images/ui-ux.png",
            alt: "uiux profile image",
            desc: "ui-ux"
        }
    ];
  return (
    <div className="profileSelectionPage">
        <div className="groupedTitle">
            <div className="profilePageTitle">What are you looking for?</div>
            <div className="profilePageSubTitle">select from one of the profiles</div>
        </div>
        <Profiles profileData={profiles} />
    </div>
  )
}

export default page