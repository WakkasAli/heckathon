"use client"
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Stripe, loadStripe } from '@stripe/stripe-js';
import getStripe from '@/lib/publicStripe';



async function oncheckout(apiId:any) {
  console.log("checkout Method with apiId:  ", apiId)
  
  const response: any = await  fetch(`http://localhost:3000/api/checkout`,{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "product_id": "9bd30f90-594a-44cb-87db-ea56125b42ac",
      "price": 175
    })
  })
  
   const data = await (response).json()

   console.log("Response Data:  ",data)
  const stripe = await getStripe();
  const {error} = await stripe!.redirectToCheckout({
    sessionId:data.id,
  });
  
// const {redirectToCheckout} = useShoppingCart();
  
//   console.log("Api Response:  ",response.url)

//   let {data} = await (await response).json()
//   console.log("SessionId: ",data)
//   const result = await redirectToCheckout(data.id)
  
}

interface ICart{
  id:number,
  user_id:string,
  product_id:string,
  quantity:number
}


const checkout = async ({params}:any) => {

  oncheckout(params)

  return(
    <div className="mt-8">
      {
        
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
        
        
      }
    </div>
  )
}

export default checkout