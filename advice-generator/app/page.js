import Main from "@/components/main";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400","800"] });

export default async function Home() {


  return (
    <>
      <Main/>
    </>
  );
}
