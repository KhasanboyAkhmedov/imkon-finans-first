import Carousel from "@/components/carousel"
import "../app/globals.css"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen mx-auto xl:px-0 mt-[71.28px]">
      <section className="flex flex-col space-y-1.5">
        {/* <Carousel/> */}
        <div className="h-screen fixed w-[15%] bg-[#851926]">Sidebar</div>
        <div className="mt-3 px-4 min-h-[90vh] flex flex-row w-[85%] ">
          <div className="flex relative min-h-[300px] w-full items-center justify-center">
            <Image 
            src={'/about_box.jpg'}
            alt='logo'
            fill
            className="object-contain " />
            <h2 className="text-[42px] text-white tracking-[1px] font-bold leading-[1.45px] ">Nima Uchun 
              <span className="text-[#851926] font-bold ml-4  leading-[1.45px]">Imkon Finans?</span>
            </h2>
          </div>
        </div>
        <h1 className="font-bold text-center">Home Page</h1>
      </section>
    </main>
  )
}
