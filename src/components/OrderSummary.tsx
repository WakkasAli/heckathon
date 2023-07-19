"use client"
import * as React  from 'react'
import ProductCard from "@/components/productCard"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import Link from "next/link"
import ProductQuantity from '@/components/ProductQuantity'
import AddtoCartbutton from '@/components/AddtoCartbutton'
import { client } from '../../sanity/lib/client'


export const getProductsbyId = async (productId:any)=> {
    
  const res = await client.fetch('*[_type=="product" &&  _id == $productId]{_id,price,pname,pdetail,pcare,category,"image":image[].asset->url}',{productId:productId})
  
  return res;
} 

interface IProduct{
  _id:string,
  pname:string,
  pdetail: string,
  pcare: string,
  image:string,
  price:number,
  category:string,
  quantity:number
}

const getproductdetail = async(params:any) => {
  
  const data:IProduct[] = await getProductsbyId(params.item)

  let sum = 0;

  data.map((item:IProduct)=>
    {sum+=item.price}
  )

  return(
    <div className="">
      {
        <div className="flex justify-between">
          <p >Sub Total</p>
          <p >{sum}</p>
        </div>
      }
    </div>
  )
}
  

export default getproductdetail