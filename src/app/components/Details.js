import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const info = [
    {
        id: 1,
        img1: "/images/dine.png",
        img2: "",
        title: "DineSg",
        desc: "Full-fledged order taking, fullfillment and management system to streamline business workflow, reduce costs and drive profits.",
        website: "www.dine.sg",
        background: "",
        techStack: [
            {
                name: "Next.js",
                stackImg: "/images/stack/nextjs.png"
            },
            {
                name: "CSS3",
                stackImg: "/images/stack/css.png"
            },
            {
                name: "Firebase",
                stackImg: "/images/stack/firebase.png"
            },
            {
                name: "Git",
                stackImg: "/images/stack/git.png"
            }
        ],
        frontend: "frontend work",
        fullstack: "fullstack work",
        uiux: "ui-ux work"

    },
    {
        id: 2,
        img1: "",
        img2: "",
        title: "iWill",
        desc: "something",
        website: "https://link.springer.com/chapter/10.1007/978-3-031-35998-9_22",
        background: "",
        techStack: [
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
        ],
        frontend: "frontend work",
        fullstack: "fullstack work",
        uiux: "ui-ux work"

    },
    {
        id: 3,
        img1: "",
        img2: "",
        title: "Surgestrat",
        desc: "something",
        website: "https://github.com/shyamsundarko/surgestrat",
        background: "",
        techStack: [
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
            {
                name: "something",
                stackImg: ""
            },
        ],
        frontend: "frontend work",
        fullstack: "fullstack work",
        uiux: "ui-ux work"

    }
    
];

const Details = ({id, path}) => {
    //if path = frontend, or ui-ux or fullstack, show diff versions of the same content 

    const [current, setCurrent] = useState(null);

    useEffect(()=>{
        const current = info.find((curr)=>curr.id == id);
        setCurrent(current);
    },[])
    

  return (
    <div>
        <Navbar />
        <div>
            {current && current.title}
        </div>
    </div>
  )
}

export default Details