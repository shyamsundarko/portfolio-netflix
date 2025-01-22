'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import PictureCard from '../components/PictureCard'
import '../styles/pictureCard.css'
import Recommendation from '../components/Recommendation'
import { useRouter } from 'next/navigation'
import BottomNav from '../components/BottomNav'

const page = () => {
  const router = useRouter();
  const recommendations = [
    {
      id: 1,
      title: "DineSg", 
      src: "/images/dine.png"
    },
    {
      id: 2,
      title: "iWill: publication",
      src: "/images/publication.png"
    },
    {
      id: 3,
      title: "Surgestrat",
      src: "/images/surgestrat.png"
    }
  ];
  const handleRedirect =(id) => {
    router.push("/ui-ux/recommendation/"+id);
  }

  return (
    <div className='fullStackPage'>
       <Navbar  />
       <div className='fullStackContainer'>
        <div className='pictureContainer'>
          <PictureCard role="Full-Stack" />
        </div>
        <ul className='characteristics'>
          <li className='characteristic'>resourceful</li>
          <li className='characteristic'>hardworking</li>
          <li className='characteristic'>team-player</li>
          <li className='characteristic'>good communicator</li>
        </ul>
        <div className="recommendedContainer">
          <div className="recommendedTitle">Recommended for you</div>
          <div className="recommendations">
            {recommendations.length>0 && 
              recommendations.map((recommendation)=> (
                <Recommendation key={recommendation.id} title={recommendation.title} src={recommendation.src} handleRedirect={()=>handleRedirect(recommendation.id)} />
              ))
            }
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}

export default page