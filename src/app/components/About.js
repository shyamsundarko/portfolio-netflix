import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className="name">Hi, I'm Shyam</div>
        <div className="smallAbout">I'm a developer, designer, entrepreneur and professional photographer</div>
        <div className="contactContainer">
            <Link href="https://github.com/shyamsundarko" target="_blank" rel="noopener noreferrer" className="iconWrapper">
                <Image
                    src="/images/github.png"
                    alt='github logo'
                    width={24}
                    height={24}
                    quality={90}
                    priority={true}
                    className='contact-logo'
                />
            </Link>
            <Link href="https://www.linkedin.com/in/shyam-s-208166137/" target="_blank" rel="noopener noreferrer" className="iconWrapper">
                <Image
                    src="/images/linkedin.png"
                    alt='linkedin logo'
                    width={24}
                    height={24}
                    quality={90}
                    priority={true}
                    className='contact-logo'
                />
            </Link>
            <Link href="https://instagram.com/byamiloboy" target="_blank" rel="noopener noreferrer" className="iconWrapper">
                <Image
                    src="/images/instagram.png"
                    alt='ig logo'
                    width={24}
                    height={24}
                    quality={90}
                    priority={true}
                    className='contact-logo'
                />
            </Link>
            <Link href="mailto:shyamsundarko@gmail.com" className="iconWrapper">
                <Image
                    src="/images/gmail.png"
                    alt='gmail logo'
                    width={24}
                    height={24}
                    quality={90}
                    priority={true}
                    className='contact-logo'
                />
            </Link>
        </div>
        <div className="myPicContainer">
            <Image
                src="/images/profilePic.jpg"
                alt='profile pic img'
                fill
                quality={90}
                priority={true}
            />
        </div>
    </div>
  )
}

export default About