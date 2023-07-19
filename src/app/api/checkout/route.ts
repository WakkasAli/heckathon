import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request:Request) {
    const cartDetails = await request.json()
    //const lineItems = validateCartItems(inventory, cartDetails)
    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode:"payment",
        payment_method_types:['card'],
        //line_items:lineItems
        shipping_address_collection:{
            allowed_countries:['US']
        },
        shipping_options:[{
            shipping_rate:"shr_1NVXcVKh09EZksuZWJgxFLbt"
        }],
        billing_address_collection:"auto",
        success_url:`${origin}/`,
        cancel_url:``
    })
    
    return NextResponse.json(session)
}
