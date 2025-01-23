import React from 'react'
import Image from 'next/image'
import '../styles/education.css'
const Education = () => {
  return (
    <div className='educationContainer'>
        <div className="masthead">I have been shaped by these remarkable institutions</div>
        <hr className='divider' />
        <div className="ntuContainer">
            <div className="status completed">Completed</div>
            <div className="brief">I completed my undergraduate degree from a prestigious university in Singapore - World #15</div>
            
            <div className="uniImgContainer">
                <Image
                    src="/images/ntu.png"
                    priority={true}
                    quality={75}
                    alt='ntu logo'
                    fill
                />
            </div>
            <div className="degree">Bachelor of Engineering in Computer Science</div>
            <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">My final year at university involved me creating a final year project which then went on to being published in Springer and featured at the HCI International 2023.</div>
        </div>
        <div className="neuContainer">
            <div className="status inprogress">In-progress</div>
            <div className="brief">Following my undergraduate program, I decided to further my studies at Northeastern University in Boston.</div>
            
            <div className="uniImgContainer">
                <Image
                    src="/images/neu.png"
                    priority={true}
                    quality={75}
                    alt='neu logo'
                    fill
                />
            </div>
            <div className="degree">Master of Science in Software Engineering Systems</div>
            <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">I built a startup in Singapore during the time I was in my master&apos;s program and ultimately registered the company in May 2024.</div>
        </div>
    </div>
  )
}

export default Education