"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header({ cart, setCart }) {
  const [cartToggle, setCartToggle] = useState(false);
  const [menu, setMenu] = useState("");
  return (
    <>
      <header>
        <div className="logo">
        <span className="menu"  onClick={()=> setMenu("flex")}><Image src="/icon-menu.svg" width={16}
              height={16}
              alt="cart"/></span>
          <Link href="/">
            <Image src="/logo.svg" width={120} height={24} alt="logo" />
          </Link>
        </div>
        <nav style={{display:`${menu}`}}>
          <ul>
            <li>
              <Link href="/">Collections</Link>
            </li>
            <li>
              <Link href="/">Men</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="xbox" style={{display:`${menu}`}} onClick={()=> setMenu("none")}></div>
        </nav>

        <div className="profile">
        
          <div className="cart">
            {cart > 0 && <span className="cart-quantity">{cart}</span>}
            <Image
              src="/icon-cart.svg"
              onClick={() => setCartToggle(!cartToggle)}
              width={16}
              height={16}
              alt="cart"
            />
            {cartToggle && (
              <>
              <div className="shadow-full" onClick={()=> setCartToggle(false)}></div>
              <div className="cart-contain" >
                <div className="cart-title">
                  <p>Cart</p>
                </div>
                { cart > 0 &&
                  <div className="cart-main">
                  <div className="cart-image">
                    <Image
                      src="/image-product-1.jpg"
                      width={24}
                      height={24}
                      alt="sa"
                    />
                  </div>
                  <div className="cart-product-name">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00</p><span> x {cart}</span>
                  </div>
                  <div className="cart-delete" onClick={()=> setCart(0)}>
                    <Image
                      src="/icon-delete.svg"
                      width={12}
                      height={12}
                      alt="sa"
                    />
                  </div>
                  <div className="cart-footer">
                    <button>Check out</button>
                  </div>
                </div>
                }
              </div>
              </>
              
            )}
          </div>
          <div className="photo">
            <Image
              src="/image-avatar.png"
              width={36}
              height={36}
              alt="profile"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
