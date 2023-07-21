
import React from 'react'
import { client } from "../../../sanity/lib/client"
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { InferModel, eq, sql } from 'drizzle-orm'
import { integer, pgTable, serial, text, timestamp,varchar } from 'drizzle-orm/pg-core'
import { Pool } from 'pg'
import { VercelPool, VercelPostgresClientConfig } from '@vercel/postgres'
import { cartTable } from '@/lib/drizzle'
import CartItems from '@/components/CartItems'
import OrderSummary from '@/components/OrderSummary'
import Link from 'next/link'
import { getStripe } from '@/lib/strip'
import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import CartSummary from '@/components/CartSummary'


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
  console.log(res)
  return res
} 

interface ICart{
  id:number,
  user_id:string,
  product_id:string,
  quantity:number
}

// const handleCheckout = async () =>{
//   console.log("Cart Summary Page: ");
//   const stripe = await getStripe();

//   const response = await  fetch(`http://localhost:3000/api/checkout`,{
//   method:"POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     "product_id": "9bd30f90-594a-44cb-87db-ea56125b42ac",
//     "price": 175
//   })
// })

// if(response.status ===500) return;

// const data = await response.json()
// stripe.redirectToCheckout({sessionId: data.id})

  
// }


const getallCart = async () => {
  const data:ICart[] = await getProducts()
  
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
            Shopping Cart
            </div>
            {/* <div className="text-lg"> Price: ${item.product_id}</div> */}
            <CartItems item={item.product_id} />
            </div>

            <div className="px-4 sm:w-1/4 md:w-1/4 xl:w-1/4  bg-gray-50">
              <div className="text-lg mt-4"><b>Order Summary</b></div>
              <div className='flex justify-between mt-4'>
                <p>Quantity</p>
                <p>{data.length} Products</p>
              </div>
              <div className='mt-4'>
                <OrderSummary item={item.product_id} />
              </div>
              <div className='py-4 text-xl bg-black text-white justify-center mt-8'>
              <CartSummary item={item} />
              {/* <Button className='btn' type='button' onClick={()=>handleCheckout()}>
                <span className='px-3 mr-2 h-4 w-4 justify-center'>Process to Checkout </span>
              </Button> */}
            </div>
            </div>
          </div>
        </div>
        )
        
      }
    </div>
  )
}

export default getallCart