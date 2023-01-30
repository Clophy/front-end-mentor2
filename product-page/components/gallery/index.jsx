"use client"
import Image from "next/image";
import React from "react";

function Gallery({showPhoto,setShowPhoto, photo,setPhoto}) {
  
  return (
    <>
      <div className="gallery">
        <div className="big-photo">
          <Image
            onClick={()=> setShowPhoto(!showPhoto)}
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

      
    </>
  );
}

export default Gallery;
