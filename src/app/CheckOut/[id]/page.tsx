
import { getStripe } from "@/lib/strip";
import { useShoppingCart } from "use-shopping-cart";


const checkout = async ({params}:any) =>{
    console.log("Cart Summary Page: ");
    const stripe = await getStripe();

    oncheckout();

  async function oncheckout() {
        
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
        <div className="cart-wrapper" >
            <h2>Shopping Cart</h2>
        </div>
    )
}

export default checkout