'use client'
import { getStripe } from "@/lib/strip";


import {Button} from "@/components/ui/button"
import { FC } from "react";



const CartSummary:FC<{item: any}>=({item})=>{

    const handleCheckout = async () =>{
        console.log("Cart Summary Page: ");
        const stripe = await getStripe();
      
        const response = await  fetch(`http://localhost:3000/api/checkout`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "product_id": "9bd30f90-594a-44cb-87db-ea56125b42ac",
          "price": 175
        })
      })
      
      if(response.status ===500) return;
      
      const data = await response.json()
      stripe.redirectToCheckout({sessionId: data.id})
      
        
      }

      return(
        
        <Button onClick={ ()=> handleCheckout()}>
            Process to Checkout
        </Button>
    )
}

export default CartSummary