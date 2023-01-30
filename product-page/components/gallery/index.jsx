"use client"
import Image from "next/image";
import React,{useState} from "react";

function Gallery() {
  const [photo, setPhoto] = useState("/image-product-1.jpg")
  return (
    <>
      <div className="gallery">
        <div className="big-photo">
          <Image
            src={photo}
            fill
            alt="123"
          />
        </div>
        <div className="little-photo">
          <Image onClick={(e)=> setPhoto("/image-product-1.jpg")} src="/image-product-1.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto("/image-product-2.jpg")} src="/image-product-2.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto("/image-product-3.jpg")} src="/image-product-3.jpg" width={80} height={80} alt="123" />
          <Image onClick={(e)=> setPhoto("/image-product-4.jpg")} src="/image-product-4.jpg" width={80} height={80} alt="123" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
