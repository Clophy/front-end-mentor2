"use client"
import Header from "@/components/header";
import Main from "@/components/main";
import React,{ useState } from "react";

export default function Home() {
  const [cart,setCart] = useState("")
  return (
    <>
    <Header cart={cart} setCart={setCart} />
    <Main cart={cart} setCart={setCart} />
    </>
  )
}
