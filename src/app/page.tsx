import Link from "next/link"
import { createClient } from "next-sanity"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import Hero from "@/components/sections/hero"
import heroImage from "/public/header.webp"
import ProductList from "@/components/sections/productlist"
import Promotions  from "@/components/sections/promotions"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotions/> 
      <ProductList/>
      <Footer />
    </div>
    
  )
}
