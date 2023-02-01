import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./cards.module.css";

function Cards() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.contain}>
          <div className={Styles.textbox}>
            <h2> Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Link href="#">Learn More</Link>
          </div>
          <div className={Styles.imgbox}>
            <Image src="/desktop/image-transform.jpg" fill alt="resim" />
          </div>
        </div>
        <div className={Styles.contain}>
          <div className={Styles.textbox}>
            <h2> Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <Link href="#">Learn More</Link>
          </div>
          <div className={Styles.imgbox}>
            <Image src="/desktop/image-stand-out.jpg" fill alt="resim" />
          </div>
        </div>
        <div className={Styles.contain}>
          <div className={Styles.imgbox}>
            <Image src="/desktop/image-graphic-design.jpg" fill alt="resim" />
            <div className={Styles.imgtext}>
              <h3>Graphic design</h3>
              <p>
                {" "}
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className={Styles.imgbox}>
            <Image src="/desktop/image-photography.jpg" fill alt="resim" />
            <div className={Styles.imgtext}>
              <h3>Photography</h3>
              <p>
                {" "}
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
