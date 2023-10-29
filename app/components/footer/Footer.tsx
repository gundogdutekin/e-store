import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"
import { MdFacebook } from "react-icons/md"
import { RiTwitterXLine } from "react-icons/ri"
import { GrInstagram } from "react-icons/gr"
import { TfiYoutube } from "react-icons/tfi"

const Footer = () => {
  return (
    <footer className=" bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2 tracking-widest">Shop Categories</h3>
            <Link href='#'>Phones</Link>
            <Link href='#'>Laptops</Link>
            <Link href='#'>Desktops</Link>
            <Link href='#'>Watches</Link>
            <Link href='#'>Tvs</Link>
            <Link href='#'>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className=" text-base font-bold mb-2 tracking-widest">Customer Services</h3>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Shipping Policy</Link>
            <Link href='#'>Returns & Exchanges</Link>
            <Link href='#'>Watches</Link>
            <Link href='#'>FAQs</Link>

          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className=" text-base font-bold mb-2 tracking-widest">About Us</h3>
            <p className="mb-2 max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit quis quod adipisci quaerat exercitationem beatae illo similique, vel voluptatibus voluptate! Possimus, reprehenderit id ipsam dolore corporis dolor amet laudantium doloremque, explicabo vero consequatur illo ratione ullam optio consequuntur velit.</p>
            <p>@{new Date().getFullYear()} E-Shop.All rights Reserved</p>
          </div>
          <FooterList>
            <h3 className=" text-base font-bold mb-2 tracking-widest">Follow Us</h3>
            <p className="flex gap-4">
              <Link href='#'><MdFacebook size="24" /></Link>
              <Link href='#'><RiTwitterXLine size="24" /></Link>
              <Link href='#'><GrInstagram size="24" /></Link>
              <Link href='#'><TfiYoutube size="24" /></Link>
            </p>
          </FooterList>

        </div>

      </Container>
    </footer>
  )
}

export default Footer