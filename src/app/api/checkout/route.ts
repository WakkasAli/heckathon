import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const POST = async (request:Request) => {

    console.log("api/checkout reached")
    
    const cartDetails = await request.json()
    //const lineItems = validateCartItems(inventory, cartDetails)
    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode:"payment",
        payment_method_types:['card'],
        line_items:[{
            price:"price_1NW2CAL0iWxuD9W8PXaMzF9r",
            quantity:1
        }],
        shipping_address_collection:{
            allowed_countries:['US']
        },
        shipping_options:[{
            shipping_rate:"shr_1NW2J3L0iWxuD9W8Vhua2D4h"
        }],
        billing_address_collection:"auto",
        success_url:`http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`http://localhost:3000/cart`
    })
    
    //console.log("Session: ", session)

    
    return NextResponse.json(session)
}
