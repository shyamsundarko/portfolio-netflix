'use client'
import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import '../styles/details.css'
import Image from 'next/image'

const DineDetails = ({path}) => {
  return (
    <div className='detailsPage'>
        <Navbar />
        <div className="detailsContainer">
            <div className="mainImgContainer">
                <Image
                    src="/images/landing.png"
                    alt="dine image"
                    fill
                    priority={true}
                    quality={75}
                />
            </div>
            <div className="textContent">
                <div className="title">DineSg</div>
                <div className="desc">Full-fledged order taking, fullfillment and management system to streamline business workflow, reduce costs and drive profits.</div>
                <a className="visitBtn" href='https://www.dine.sg/' target='_blank'>Visit site</a>

                <div className="secondaryTitle">Background</div>
                <div className="secDesc">
                    This is self-made startup based in Singapore developed to help reduce restaurant inefficiencies and enable them to stay afloat.
                    <br /> <br />
                    Renumeration accounts for at least 1/3rd of a restaurant's revenue and this product was built to cut those costs significantly.
                </div>

                <div className="secondaryTitle">Contributions</div>
                <div className="secDesc">
                    {path==="frontend" &&
                    <>
                    Implemented dynamic data fetching and server-side logic through Next.js API routes, optimized performance through code-splitting, lazy-loading, delivering a lightning-fast and responsive UX <br /><br /> Incorporated dynamic components for real-time cart updates and order status tracking, enhancing user experience - minimizing load times between steps and reducing user drop-off rates
                    </>
                    }
                    {path==="fullstack" &&
                    <>
                    Engineered custom solutions to complex restaurant-specific challenges, seamlessly integrating real-time inventory management, order placement and processing, upselling features, and EOD balance sheet settlement.  <br /><br /> Incorporated dynamic components for real-time cart updates and order status tracking, enhancing user experience - minimizing load times between steps and reducing user drop-off rates
                    </>
                    
                    }
                    {path==="ui-ux" &&
                    "This is what i did as a ui/ux engineer"
                    }
                </div>

                {/* <div className="secondaryTitle">Tech Stack</div> */}
                <div className="secondaryImgContainer qr">
                <Image
                    src="/images/dine-qr.png"
                    alt="dine qr image"
                    fill
                    priority={true}
                    quality={75}
                />
                
                </div>
                <div className="btnContainer">
                <a className="tryBtn" href='https://app.dine.sg/dev' target='_blank'>Try it out</a>
                </div>
                

            </div>
            
        </div>
        <BottomNav></BottomNav>
    </div>
  )
}

export default DineDetails