"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import Styles from './header.module.css'

function Header({francues}) {
  const [menu, setMenu] = useState(false)
  return (
    <>
    <header className={Styles.header}>
        <div className={Styles.title}>
            <div className={Styles.logo}>
            <Image src="/logo.svg" width={120} height={48} alt="123"></Image>
            </div>
            <nav className={Styles.nav}>
                
                  <ul className={`${menu ? "block" : "hidden"}`}>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li className={`${Styles.contact} ${francues.className}`}>Contact</li>
                </ul> 
                
                <Image onClick={()=> setMenu(!menu)} src="/icon-hamburger.svg" width={24} height={24} alt="sa"/>
            </nav>
        </div>
        <h1 className={`${Styles.h1} ${francues.className}`}>  We are creatives</h1>
        <div className={Styles.arrow}>
        <Image src="/icon-arrow-down.svg" width={48} height={48} alt="123"></Image>
        </div>
    </header>
    </>
  )
}

export default Header