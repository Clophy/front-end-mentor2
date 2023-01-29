import React from 'react'
import '@/styles/reset.css'
import '@/styles/global.css'
import { Manrope } from "@next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["400","800"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={manrope.className}>
      {children}
      </body>
    </html>
  )
}
