import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '../styles/bottomNav.css'
import { usePathname, useRouter } from 'next/navigation'

const BottomNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [basePath, setBasePath] = useState("");

    const [imageSrc, setImageSrc] = useState('/images/frontend.png');


  useEffect(() => {
    const path = pathname.split('/')[1];
    setBasePath(`/${path}`);
    
    switch (path) {
      case 'frontend':
        setImageSrc('/images/frontend.png');
        break;
      case 'fullstack':
        setImageSrc('/images/fullstack.png');
        break;
      case 'ui-ux':
        setImageSrc('/images/ui-ux.png');
        break;
    }
  }, [pathname]);

    useEffect(()=>{
        const path = pathname.split('/')[1];
        setBasePath(path);
    },[])
  return (
    <div className='bottomNavContainer'>
        <div className="icons">
            <div className="bottomNavIcon" onClick={()=>router.push(`/${basePath}/about`)}>
                <Image
                src="/images/info.png"
                alt="info icon"
                fill
                priority={true}
                quality={75}
                />
            </div>
            <div className="bottomNavIcon" onClick={()=>router.push(`/${basePath}/experience`)}>
                <Image
                src="/images/workexp.png"
                alt="work exp icon"
                fill
                priority={true}
                quality={75}
                />
            </div>
            <div className="bottomNavIcon" onClick={()=>router.push(`/${basePath}`)}>
                <Image
                src="/images/home.png"
                alt="home icon"
                fill
                priority={true}
                quality={75}
                />
            </div>
            <div className="bottomNavIcon" onClick={()=>router.push(`/${basePath}/education`)} >
                <Image
                src="/images/education.png"
                alt="education icon"
                fill
                priority={true}
                quality={75}
                />
            </div>
            <div className="bottomNavIcon profile" onClick={()=>router.push('/select-profile')}>
                <Image
                src={imageSrc}
                alt="profile icon"
                fill
                priority={true}
                quality={75}
                />
            </div>
        </div>
    </div>
  )
}

export default BottomNav