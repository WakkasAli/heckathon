"use client"
import * as React  from 'react'
import ProductCard from "@/components/productCard"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import { client } from "../../../../sanity/lib/client"
import Link from "next/link"
import ProductQuantity from '@/components/ProductQuantity'
import AddtoCartbutton from '@/components/AddtoCartbutton'


const getProductsbyId = async (productId:any)=> {
    
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

const getproductdetail = async({params}:any) => {
    
  const data:IProduct[] = await getProductsbyId(params.id)


  return(
    <div className="flex justify-evenly mt-8">
      {
        data.map((item: IProduct)=>
        <div>
        <div className="sm:flex sm:flex-wrap sm:-mx4 md:py-4">
          
            <div className='px-4 sm:w-1/7 md:w-1/7 xl:w-1/7'> </div>
            <div className="px-4 sm:w-1/7 md:w-1/7 xl:w-1/7 ">
                <img src={item.image[0]} width={180} height={100} alt='' />
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/2">
                <img src={item.image[0]} alt="" width={580} height={620}/>
            </div>
            <div className="px-4 sm:w-1/4 md:w-1/4 xl:w-1/4 ">
            
          <div className="text-lg"><b>{item.pname}</b></div>
          <div className="text-gray-500"><b>{item.category}</b></div>

            <div className='py-4'>
                <p>Select Size</p>
            </div>
            <div>
                <ul className='flex space-x-1'>
                    <li className='text-lg h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center'>XS</li>
                    <li className='text-lg h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center'>S</li>
                    <li className='text-lg h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center'>M</li>
                    <li className='text-lg h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center'>L</li>
                    <li className='text-lg h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center'>XL</li>
                </ul>
            </div>

            <div className='py-4'>
                <p>Quantity</p>
            </div>
            <ProductQuantity item={item} />

            <div className='py-4 text-xl justify-center'>
                <AddtoCartbutton item={item} /><span className='px-3'> <b>${item.price}.00</b></span>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-wrap sm:-mx4 md:py-4">
            <h2><b>Product Detail:  </b></h2>
          <div className="">{item.pdetail}</div>
        </div>
        <div className="sm:flex sm:flex-wrap sm:-mx4 md:py-4">
            <h2><b>Product Care:    </b></h2>
          <div className="">{item.pcare}</div>
        </div>
        </div>
        )
      }
    </div>
  )
}
  

export default getproductdetail