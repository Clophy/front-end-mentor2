import Image from 'next/image'
import React from 'react'
import Styles from './footer.module.css'
import {GrFacebook} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram, BsPinterest} from 'react-icons/bs'

function Footer() {
  return (
    <>
        <footer className={Styles.contain}>
            <div className={Styles.header}>
                <Image src="/logo.svg" alt="asd" width={128} height={128} />
            </div>
            <div className={Styles.main}>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </div>
            <div className={Styles.footer}>
            <GrFacebook/>
            <AiOutlineTwitter/>
            <BsInstagram/>
            <BsPinterest/>
            </div>
        </footer>
    </>
  )
}

export default Footer