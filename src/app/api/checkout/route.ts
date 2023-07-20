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
            price:"price_1NVpLaKh09EZksuZJ0YuE7SP",
            quantity:1
        }],
        shipping_address_collection:{
            allowed_countries:['US']
        },
        shipping_options:[{
            shipping_rate:"shr_1NVXcVKh09EZksuZWJgxFLbt"
        }],
        billing_address_collection:"auto",
        success_url:`https://www.google.com`,
        cancel_url:`https://www.facebook.com/`
    })
    
    console.log("Session: ", session)
    return NextResponse.json(session)
}
