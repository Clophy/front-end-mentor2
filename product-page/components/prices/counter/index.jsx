"use client"
import Image from 'next/image'

function Counter({quantity,setQuantity}) {
  if(quantity === -1){
    setQuantity(0)
  }

  return (
    <div className="counter">
            <div>
              <Image onClick={()=> setQuantity(quantity - 1)}  src="/icon-minus.svg" width={24} height={12} alt="sa" />
            </div>
            <p>{quantity}</p>
            <div>
              <Image onClick={()=> setQuantity(quantity +1)} src="/icon-plus.svg" width={24} height={24} alt="sa" />
            </div>
          </div>
  )
}

export default Counter