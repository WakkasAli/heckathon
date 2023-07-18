import Image from "next/image"
import React, { useEffect } from 'react'
import ProductCard from "@/components/productCard"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import { client } from "../../../sanity/lib/client"
import Product from "../../../sanity/Product"


export const getProducts = async ()=> {
  const res = await client.fetch('*[_type=="product"]{_id,price,pname,category,"image":image[].asset->url}')
  return res;
} 

interface IProduct{
  _id:string,
  pname:string,
  image:string,
  price:number,
  category:string
}

const getproductdetail = async () => {
  const data:IProduct[] = await getProducts()

  return(
    <div className="flex justify-evenly mt-16">
      {
        data.map((item: IProduct)=>
        <div>
          <div>
            <img src={item.image[0]} alt="" width={380} height={400}/>
          </div>
          <div className="text-lg"><b>{item.pname}</b></div>
          <div className="text-lg"> Price: ${item.price}</div>
        </div>
        )
      }
    </div>
  )
}

export default getproductdetail