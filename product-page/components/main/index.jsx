import Image from 'next/image'
import React,{useState} from 'react'
import Gallery from '../gallery'
import Prices from '../prices'

function Main({cart, setCart}) {
  const [photo, setPhoto] = useState(1)
  const [showPhoto, setShowPhoto] = useState(false)

  if(photo === 5){
    setPhoto(1)
  }
  else if(photo === 0){
    setPhoto(4)
  }

  return (
    <>
    <section>
    <Gallery showPhoto={showPhoto} setShowPhoto={setShowPhoto} photo={photo} setPhoto={setPhoto}/>
    <Prices cart={cart} setCart={setCart} />
    {showPhoto && <div className="photograph">
        
        <div className="shadow-gallery">
        <span className='close-button' onClick={()=> setShowPhoto(false)}>
          <Image src="/icon-close.svg" width={24} height={24} alt="sa"/>
        </span>
        <div className="big-photo">
        <div className='before' onClick={()=> setPhoto(photo-1)}></div>
        <div className='after'  onClick={()=> setPhoto(photo+1)}></div>
          <Image
            src={`/image-product-${photo}.jpg`}
            fill
            alt="123"
          />
        </div>
        
        <div className="little-photo">
          <Image onClick={(e)=> setPhoto(1)} src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto(2)} src="/image-product-2-thumbnail.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto(3)} src="/image-product-3-thumbnail.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto(4)} src="/image-product-4-thumbnail.jpg" width={80} height={80} alt="123" />
        </div>
      </div>
      </div>}
    </section>

    </>
  )
}

export default Main