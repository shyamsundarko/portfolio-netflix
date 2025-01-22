'use client'
import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import '../styles/details.css'
import Image from 'next/image'

const SurgestratDetails = ({path}) => {
  return (
    <div className='detailsPage'>
        <Navbar />
        <div className="detailsContainer">
            <div className="mainImgContainer">
                <Image
                    src="/images/surgestrat.png"
                    alt="iwill image"
                    fill
                    priority={true}
                    quality={75}
                />
            </div>
            <div className="textContent">
                <div className="title">Surgestrat</div>
                <div className="desc">This is a marketing product that I am currently building. It will encompass email marketing and social media marketing. It is aimed at enabling non-marketers to be able to market for their clients in a way that is at par with industry standards.</div>
                {/* <a className="visitBtn" href='https://link.springer.com/chapter/10.1007/978-3-031-35998-9_22' target='_blank'>View publication</a> */}


                <div className="secondaryImgContainer audienceList">
                    <Image
                        src="/images/audience.png"
                        alt="audience list image"
                        fill
                        priority={true}
                        quality={75}
                    />
                </div>

                <div className="secondaryTitle">Background</div>
                <div className="secDesc">
                    This product is part of a broader plan to start a marketing company without any traditional marketing personnel.
                
                </div>
                
                <div className="secondaryTitle">Contributions</div>
                <div className="secDesc">
                    {path==="frontend" &&
                    <>
                    Architected and implemented a responsive email campaign builder using Next.js, enabling marketers to create multi-sequence email campaigns with real-time preview functionality
                    <br /> <br />
                    Built a robust file upload system handling bulk recipient imports from Excel files, with built-in validation and error handling
                    <br /> <br />
                    Engineered a live email preview system with mobile/desktop toggle views, ensuring consistent rendering across different email clients
                    <br /><br />
                    Implemented real-time analytics displaying campaign metrics like open rates, click-through rates, and unsubscribe statistics
                    </>
                    }
                    {path==="fullstack" &&
                    <>
                    Designed and implemented end-to-end email campaign automation system using Next.js and Firebase, supporting multiple campaign sequences and bulk sending capabilities
                    <br /> <br />
                    Integrated SendGrid API for reliable email delivery, including custom tracking pixel implementation for open rate monitoring
                    <br /><br />
                    Developed custom GPT integration for AI-powered email content generation, implementing proper error handling
                    <br /><br />
                    Engineered a live email preview system with mobile/desktop toggle views, ensuring consistent rendering across different email clients
                    </>
                    
                    }
                    {path==="ui-ux" &&
                    <>
                    Led the end-to-end design process for email marketing automation platform using Figma, conducting user research and creating detailed user personas
                    <br /><br />
                    Designed intuitive workflow for campaign creation process, reducing learning curve for new users and improving task completion rates
                    <br /><br />
                    Created comprehensive design system including component library, color palette, and typography guidelines ensuring consistent user experience
                    <br /><br />
                    Conducted usability testing sessions, gathering feedback to iterate and improve the campaign creation workflow
                    <br /><br />
                    Designed responsive email templates optimized for various screen sizes and email clients
                    <br /><br />
                    Created user-friendly interface for managing recipient lists and campaign sequences, incorporating bulk actions and filtering capabilities
                    </>
                    }
                </div>

                {/* <div className="secondaryTitle">Tech Stack</div> */}
                
                {/* <div className="btnContainer">
                <a className="tryBtn" href='https://app.dine.sg/dev' target='_blank'>Try it out</a>
                </div> */}
                

            </div>
            
        </div>
        <BottomNav></BottomNav>
    </div>
  )
}

export default SurgestratDetails