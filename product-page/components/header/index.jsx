import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header({cart,setCart}) {
  return (
    <>
    <header>
      <div className='logo'>
        <Link href="/"><Image src="/logo.svg" width={120} height={24} alt="logo"/></Link>
      </div>
      <nav>
        <ul>
        <li><Link href="/">Collections</Link></li>
        <li><Link href="/">Men</Link></li>
        <li><Link href="/">Women</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      <div className='profile'>
        <div className='cart'>
        {cart > 0 && <span className='cart-quantity'>{cart}</span>}
        <Image src="/icon-cart.svg" width={16} height={16} alt="cart"/>
        </div>
        <div className='photo'>
        <Image src="/image-avatar.png" width={36} height={36} alt="profile"/>
        </div>
      </div>
    </header>
    
    </>
  )
}

export default Header