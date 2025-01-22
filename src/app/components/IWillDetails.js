'use client'
import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import '../styles/details.css'
import Image from 'next/image'

const IWillDetails = ({path}) => {
  return (
    <div className='detailsPage'>
        <Navbar />
        <div className="detailsContainer">
            <div className="mainImgContainer">
                <Image
                    src="/images/publication.png"
                    alt="iwill image"
                    fill
                    priority={true}
                    quality={75}
                />
            </div>
            <div className="textContent">
                <div className="title">iWill</div>
                <div className="desc">This is a real-time mobile application to expedite first-aid and reduce casualties. Towards the end of my project, I was sponsored by my University - Nanyang Technological University, Singapore to publish my work in Springer. Furthermore, my work was featured in the HCI International Conference 2023.</div>
                <a className="visitBtn" href='https://link.springer.com/chapter/10.1007/978-3-031-35998-9_22' target='_blank'>View publication</a>


                <div className="secondaryImgContainer hci">
                    <Image
                        src="/images/hci.png"
                        alt="hci image"
                        fill
                        priority={true}
                        quality={75}
                    />
                </div>

                <div className="secondaryTitle">Background</div>
                <div className="secDesc">
                    Singapore was riddled with Out-Of-Hospital Cardiac arrests despite the government's best efforts to tackle it. The aim of the research and the eventual development of the application is to better deal with the problem.
                
                </div>
                <div className="secondaryTitle">Application Overview</div>
                <div className="secDesc">
                iWILL is a mobile emergency response application designed to provide prompt and efficient assistance to individuals experiencing emergencies. The application enables users to quickly seek help in times of emergencies, which then creates an alert that is broadcasted to nearby CPR-trained users who are also registered with the application. These trained users can then navigate to the incident location using the application to provide expedited first-aid measures before the professional medical services arrive. <br/> <br/> In addition, the application displays a map indicating the nearby Automated External Defibrillators (AEDs), which users can navigate to in case of a cardiac emergency. The application aims to expedite emergency response times, potentially saving lives in critical situations.
                </div>

                <div className="secondaryTitle">Contributions</div>
                <div className="secDesc">
                    {path==="frontend" &&
                    <>
                    Implemented the Flutter frontend that retrieves and displays users&apos; locations in real time, along with nearby AEDs. <br/><br/> Ensured seamless map rendering and interactive markers so CPR-trained responders can navigate to the incident site quickly.
                    </>
                    }
                    {path==="fullstack" &&
                    <>
                    Designed and implemented the complete emergency workflow. From the moment a user presses the emergency button, the request is handled server-side to identify and notify the nearest CPR-trained individuals, all integrated with the Flutter client. <br/><br/> Leveraged cloud-based database - Firebase to store and retrieve user data, including geo-coordinates of CPR-trained responders and AED locations. <br/><br/> Implemented a secure authentication system that differentiates between standard users and CPR-trained responders, ensuring only verified responders receive emergency alerts.
                    </>
                    
                    }
                    {path==="ui-ux" &&
                    <>
                        Spearheaded the design of a life-critical mobile application focusing on rapid emergency response, prioritizing quick access to emergency features while maintaining a clear, anxiety-reducing interface
                        <br /><br />
                        Conducted extensive user research and usability testing focusing on emergency scenarios, resulting in an interface optimized for high-stress situations
                        <br /><br />
                        Designed an intuitive one-tap emergency alert system with clear visual feedback, ensuring users can quickly request help even in distressed conditions
                        <br /><br />
                        Incorporated user feedback through multiple iterations to optimize the map interface for quick AED location identification and navigation
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

export default IWillDetails