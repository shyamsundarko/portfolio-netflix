'use client'
import React, { useEffect, useState } from 'react'
import '../styles/pictureCard.css'
import Image from 'next/image'

const PictureCard = ({role}) => {
  const [resumeLink, setResumeLink] = useState("https://drive.google.com/file/d/1O_v4rJCuLR2j3FGIX9EAm_uE5mcnFUJ3/view?usp=drive_link");
  useEffect(()=>{
    if(role==="Frontend") setResumeLink("https://drive.google.com/drive/folders/12JuQS0UDOSUA0Ex7TaaV8VC1kDYiFhZT?usp=drive_link");
    else if(role==="Full-Stack") setResumeLink("https://drive.google.com/drive/folders/18qTOWM-VayMReb2DQyoKI2HWhgz0w-HF?usp=drive_link")
    else setResumeLink("https://drive.google.com/drive/folders/1St2GZzkbTSw9ACRjrMlU2bwt8raVUMzF?usp=drive_link")
  })
  return (
    <div className='pictureCardContainer'>
        <Image
          src="/images/profilePic.jpg"
          alt='profile picture'
          fill
          priority={true}
          quality={75}
        />
        <div className="textContainer">
          <div className="nameCard">Hi, I'm Shyam</div>
          <div className="descriptorText">{role} Engineer based in Boston, MA</div>
        </div>
        <div className="buttonsContainer">
          <a className="resume" href={resumeLink} target='_blank'>
            <div className="btnIcon">
                <Image
                  src="/images/play.png"
                  alt='play icon'
                  fill
                  priority={true}
                  quality={75}
                />
            </div>
            <div className="btnText">Resume</div>
          </a>
          <a className="linkedin" href='https://www.linkedin.com/in/shyam-s-208166137/' target='_blank'>
            <div className="btnIcon">
              <Image
                  src="/images/info.png"
                  alt='info icon'
                  fill
                  priority={true}
                  quality={75}
                />
            </div>
            <div className="btnText">Linkedin</div>
          </a>
        </div>
        
    </div>
  )
}

export default PictureCard