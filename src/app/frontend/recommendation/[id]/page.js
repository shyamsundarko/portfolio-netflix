'use client'
import React, { useEffect, useState } from 'react'
import Details from '@/app/components/Details'
import { usePathname } from 'next/navigation';
import DineDetails from '@/app/components/DineDetails';
import IWillDetails from '@/app/components/IWillDetails';
import SurgestratDetails from '@/app/components/SurgestratDetails';

const page = ({params}) => {
    const pathname = usePathname();
    const [basePath, setBasePath] = useState("");
    useEffect(()=>{
        const path = pathname.split('/')[1];
        setBasePath(path);
    },[])
    
    const unwrappedParams = React.use(params);
    const { id } = unwrappedParams;

  return (
    <div>
      {
        id==1 && <DineDetails path={basePath} />
      }
      {
        id==2 && <IWillDetails path={basePath} />
      }

      {
        id==3 && <SurgestratDetails path={basePath} />
      }
        
    </div>
  )
}

export default page