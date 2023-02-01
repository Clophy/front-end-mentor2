import Image from 'next/image'
import React from 'react'
import Styles from './header.module.css'

function Header() {
  return (
    <>
    <header className={Styles.header}>
        <div className={Styles.title}>
            <div className={Styles.logo}>
            <Image src="/logo.svg" width={120} height={48} alt="123"></Image>
            </div>
            <nav className={Styles.nav}>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li className={Styles.contact}>Contact</li>
                </ul>
            </nav>
        </div>
        <h1 className={Styles.h1}>  We are creatives</h1>
        <div className={Styles.arrow}>
        <Image src="/icon-arrow-down.svg" width={24} height={72} alt="123"></Image>
        </div>
    </header>
    </>
  )
}

export default Header