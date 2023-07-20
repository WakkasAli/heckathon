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
  console.log(res)
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
  console.log("Params")
  const data:IProduct[] = await getProductsbyId(params.item)


  return(
    <div className="flex mt-4">
      {
        data.map((item: IProduct)=>
        <div className="flex">
          
            <div className="px-4 sm:w-1/7 md:w-1/7 xl:w-1/7 ">
                <img src={item.image[0]} width={180} height={100} alt='' />
            </div>

          <div className="px-4 sm:w-full md:w-full xl:w-full ">
            
            <div className="text-lg"><b>{item.pname}</b></div>
            <div className="text-gray-500"><b>{item.category}</b></div>

              <div className='py-4'>
                  <b>Delevery Estimation</b>
              </div>
              <div className='text-yellow-500'>
                  <b>5 Working Days</b>
              </div>

              <div className='flex justify-between py-4 text-xl'>
                  <span className='px-3'> <b>${item.price}.00</b></span>
                  <span className=''>
                  <ProductQuantity item={item} />
                  </span>
              </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
  

export default getproductdetail