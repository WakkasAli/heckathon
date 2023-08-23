"use client"
import React, { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Stripe, loadStripe } from '@stripe/stripe-js';
import getStripe from '@/lib/publicStripe';
import {usePathname} from "next/navigation"
import publicStripe from "@/lib/publicStripe"
import { useDispatch } from 'react-redux';

    oncheckout();

async function oncheckout(apiId:any) {
  console.log("checkout Method with apiId:  ", apiId)

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

    //await redirectToCheckout(data)

  })
  
  //  const data = await (response).json()
  //   const url = data.url
    

  // const stripe = await getStripe();
  // const {error} = await stripe!.redirectToCheckout({
  //   sessionId:data.id,
  // });
  
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
        <div className="cart-wrapper" >
            <h2>Shopping Cart</h2>
        </div>
    )
}

export default checkout

function userRouter() {
  throw new Error('Function not implemented.');
}
