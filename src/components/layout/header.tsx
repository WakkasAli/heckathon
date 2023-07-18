
import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import {ShoppingCart} from "lucide-react"

const Header =() => {
    return(
        <div className="flex justify-around items-center py-6 px-8 bg-red-400">
            <Image className="w-50" src={logo} alt="logo" />
            <ul className="flex gap-x-10">
                <li className="text-lg"><Link href={"/"}>Female</Link></li>
                <li className="text-lg"><Link href={"/"}>Male</Link></li>
                <li className="text-lg"><Link href={"/"}>Kids</Link></li>
                <li className="text-lg"><Link href={"/"}>All Products</Link></li>
            </ul>
            <input></input>
            <Link href={`/ProductCart`}>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
                <ShoppingCart className="h-6 w-6" />
            </div>
            </Link>
    </div>
       
    )
}

export default Header