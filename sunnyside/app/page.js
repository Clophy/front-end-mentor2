import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { Inter,Barlow,Fraunces} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const barlow = Barlow({ subsets: ['latin'], weight:["600"] })
const francues = Fraunces({ subsets: ['latin'], weight:["700","900"] })

export default function Home() {
  return (
    <>
    <main className={barlow.className}>
    <Header/>
    <Main/>
    <Footer/>
    </main>
    </>
  )
}
