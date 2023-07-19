import React from 'react'
import { client } from "../../../../sanity/lib/client"
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { InferModel, eq, sql } from 'drizzle-orm'
import { integer, pgTable, serial, text, timestamp,varchar } from 'drizzle-orm/pg-core'
import { Pool } from 'pg'
import { VercelPool, VercelPostgresClientConfig } from '@vercel/postgres'
import { cartTable } from '@/lib/drizzle'
import { cookies } from 'next/headers'
import CartItems from '@/components/CartItems'
import OrderSummary from '@/components/OrderSummary'

const pool = new Pool({
  connectionString: 'postgres://default:gvQ6ZW7aBenV@ep-orange-art-033162.us-east-1.postgres.vercel-storage.com:5432/verceldb',
  ssl:true,
});

const db = drizzle(pool as VercelPool);

export const getProducts = async ()=> {
  //const res = await client.fetch('*[_type=="product"]{_id,price,pname,category,"image":image[].asset->url}')
  // const res = await fetch('http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}')
  const uid = cookies().get("user_id")?.value;
  
  const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid as string));
  
  return res
} 

async function oncheckout() {
  console.log("checkout")
  const response = await fetch('/api/checkout',{
    method:"POST",
    body: null
  })
  const data = await response.json()
  // const result = await redirectToCheckout(data.id)
  // if(result?.error){
  //   console.error(result)
  // }
}

interface ICart{
  id:number,
  user_id:string,
  product_id:string,
  quantity:number
}


const checkout = async ({params}:any) => {

  const data:ICart[] = await getProducts()
  oncheckout()
console.log(data.length)

  return(
    <div className="mt-8">
      {
        
        data.map((item: ICart)=>
        <div>
          
        
          <div className="flex md:py-4">
            <div className="px-4 sm:w-1/5 md:w-1/5 xl:w-1/5">
            </div>
            
            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/2">
            <div className='h1 text-1lg font-bold'>
            Pay with card
            </div>
            {/* <div className="text-lg"> Price: ${item.product_id}</div> */}
            {/* <CartItems item={item.product_id} /> */}
            </div>

          </div>
        </div>
        )
        
      }
    </div>
  )
}

export default checkout