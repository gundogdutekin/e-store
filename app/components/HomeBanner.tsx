import Image from "next/image"

type Props = {}

const HomeBanner = (props: Props) => {
  return (
    <div className=" relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-evenly gap-2">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className=" text-4xl font-bold text-white md:text-6xl mb-4 ">Summer Sale !</h1>
          <p className=" text-slate-200 text-lg md:text-xls mb-2">Enjoy discounts on selected items</p>
          <p className=" text-yellow-400 text-2xl md:text-5xl  font-bold">GET %50 OFF</p>
        </div>
        <div className="w-1/3 aspect-video relative">
          <Image
            src="/banner-image.png"
            fill
            alt="banner image"
            className="object-contain "
          />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner