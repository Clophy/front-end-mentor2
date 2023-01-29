"use client"
import React, {useEffect,useState} from "react";
import { Manrope } from "@next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"], weight: ["400","800"] });
const API_URL = "https://api.adviceslip.com/advice"

export default function Main() {
 const [joke,setJoke] = useState("A common regret in life is wishing one hadn't worked so hard.")
 const [id,setID] = useState("177")

 const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {setJoke(data.slip.advice)
    setID(data.slip.id)})
 }

 


  return (
    <main className={manrope.className}>
      <div className="container">
        <p>ADVICE #{id}</p>
        <h1>&quot;{joke}&quot;</h1>
        <div className="hr">
          <Image src="/pattern-divider-desktop.svg" fill alt="sa"/>
        </div>
        <div className="dice" onClick={generateJoke}>
         <Image src="icon-dice.svg" width={16} height={16} alt="as"/>
        </div>
      </div>
    </main>
  );
}
