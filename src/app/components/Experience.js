import React from 'react'
import Image from 'next/image'
import '../styles/experience.css'
const Experience = () => {
  return (
    <div className='experienceContainer'>
        <div className="masthead">From internships to building my own startup, I&apos;m a curious engineer</div>

        <div className="workContainer">
            <div className="date present">Jan 2024 - Present</div>
            <div className="workImgContainer">
                <Image
                    src="/images/dine-dark.png"
                    priority={true}
                    quality={75}
                    alt='dine logo'
                    fill
                />
            </div>
            <div className="imgSub">Self-made startup - full-fledged order taking, fullfillment and management system to streamline business workflow</div>

            {/* <div className="brief">This is a full-fledged order taking, fullfillment and management system to streamline business workflow, reduce costs and drive profits.</div> */}
            
            
            {/* <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">My final year at university involved me creating a final year project which then went on to being published in Springer and featured at the HCI International 2023.</div> */}
        </div>
        <div className="workContainer">
            <div className="date past">May 2024 - July 2024</div>
            <div className="workImgContainer">
                <Image
                    src="/images/leadrpro.png"
                    priority={true}
                    quality={75}
                    alt='leadrpro logo'
                    fill
                />
            </div>
            <div className="imgSub">Software Engineering internship where I mainly worked with Next.js - company blog creation and optimization</div>

            {/* <div className="brief">This is a full-fledged order taking, fullfillment and management system to streamline business workflow, reduce costs and drive profits.</div> */}
            
            
            {/* <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">My final year at university involved me creating a final year project which then went on to being published in Springer and featured at the HCI International 2023.</div> */}
        </div>
        <div className="workContainer">
            <div className="date past">June 2022 - Jan 2023</div>
            <div className="workImgContainer">
                <Image
                    src="/images/accenture.png"
                    priority={true}
                    quality={75}
                    alt='accenture logo'
                    fill
                />
            </div>
            <div className="imgSub">Range of responsibilities assigned to me as an intern across the stack</div>

            {/* <div className="brief">This is a full-fledged order taking, fullfillment and management system to streamline business workflow, reduce costs and drive profits.</div> */}
            
            
            {/* <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">My final year at university involved me creating a final year project which then went on to being published in Springer and featured at the HCI International 2023.</div> */}
        </div>
        {/* <div className="neuContainer">
            <div className="status inprogress">In-progress</div>
            <div className="brief">Following my undergraduate program, I decided to further my studies at Northeastern University in Boston.</div>
            
            <div className="uniImgContainer">
                <Image
                    src="/images/neu.png"
                    priority={true}
                    quality={75}
                    alt='ntu logo'
                    fill
                />
            </div>
            <div className="degree">Master of Science in Software Engineering Systems</div>
            <div className="secTitle">Something I&apos;m proud of</div>
            <div className="secText">I built a startup in Singapore during the time I was in my master&apos;s program and ultimately registered the company in May 2024.</div>
        </div> */}
    </div>
  )
}

export default Experience