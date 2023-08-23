"use client"
import React, { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Stripe, loadStripe } from '@stripe/stripe-js';
import getStripe from '@/lib/publicStripe';
import {usePathname} from "next/navigation"
import publicStripe from "@/lib/publicStripe"
import { useDispatch } from 'react-redux';

const stripe = publicStripe;

async function oncheckout() {

  const {formattedTotalPrice ="220", totalPrice = "100", cartDetails,cartCount, redirectToCheckout} =  useShoppingCart()
  
  const response: any = await  fetch(`http://localhost:3000/api/checkout`,{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "product_id": "9bd30f90-594a-44cb-87db-ea56125b42ac",
      "price": 175
    })
  }).then(async function(result){
    
   const data = await (result).json()
   useEffect(() => {
    if(redirectToCheckout){
      redirectToCheckout();
    }
   },[redirectToCheckout])

  })
 
}

interface ICart{
  id:number,
  user_id:string,
  product_id:string,
  quantity:number
}


const Checkout = async () => {

  oncheckout()

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

export default Checkout

