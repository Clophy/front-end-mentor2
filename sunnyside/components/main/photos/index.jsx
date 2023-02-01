import Image from 'next/image'
import React from 'react'
import Styles from './photos.module.css'

function Photos() {
  return (
    <>
    <div className={Styles.contain}>
    <div className={Styles.imgbox}>
        <Image src="/desktop/image-gallery-milkbottles.jpg" fill alt="sa"/>
    </div>
    <div className={Styles.imgbox}>
        <Image src="/desktop/image-gallery-orange.jpg" fill alt="sa"/>
    </div>
    <div className={Styles.imgbox}>
        <Image src="/desktop/image-gallery-cone.jpg" fill alt="sa"/>
    </div>
    <div className={Styles.imgbox}>
        <Image src="/desktop/image-gallery-sugarcubes.jpg" fill alt="sa"/>
    </div>

    </div>
    </>
  )
}

export default Photos