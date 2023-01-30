import React from 'react'
import Gallery from '../gallery'
import Prices from '../prices'

function Main({cart, setCart}) {


  return (
    <>
    <section>
    <Gallery/>
    <Prices cart={cart} setCart={setCart} />
    </section>

    </>
  )
}

export default Main