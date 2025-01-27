'use client'
import React, {useState, useEffect} from 'react'
import '../styles/navbar.css'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [imageSrc, setImageSrc] = useState('/images/frontend.png');
  const [basePath, setBasePath] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className={`navbarContainer ${hasScrolled ? 'scrolled' : ''}`}>
      <Link href={`${basePath}`} className="logo">S</Link>
      <ul className="links">
      <li>
          <Link href={`${basePath}/about`} className="navLink about">About</Link>
        </li>
        <li>
          <Link href={`${basePath}/education`} className="navLink">Education</Link>
        </li>
        <li>
          <Link href={`${basePath}/experience`} className="navLink">Experience</Link>
        </li>    
      </ul>
      <div className="profileIconContainer">
        <Link href="/select-profile">
          <Image
            src={imageSrc}
            alt="profile icon"
            fill
            priority={true}
            quality={75}
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar