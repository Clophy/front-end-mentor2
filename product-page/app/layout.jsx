import '@/styles/reset.css'
import '@/styles/global.css'
import {Kumbh_Sans} from "@next/font/google"

const kumbh = Kumbh_Sans({subsets:["latin"],weight:["400","700"]})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head />
      <body className={kumbh.className}>
      {children}
      </body>
    </html>
  )
}
