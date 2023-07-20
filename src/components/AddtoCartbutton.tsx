
import {BsCartCheck} from "react-icons/bs";
import {Button} from "@/components/ui/button"
import { FC } from "react";
import ProductQuantity from "./ProductQuantity";



const AddtoCartbutton:FC<{item: any}>=({item})=>{

    const handleAddToCart= async ()=> {
                
        const res = fetch("/api/cart", {
            method:"POST",
            cache: 'no-store',
            body:JSON.stringify({
                product_id:item._id,
                quantity:item.quantity
            })
        })

        const result = await (await res).json()
        console.log(result);    
    }

    return(
        
        <Button onClick={()=> handleAddToCart()}>
            <BsCartCheck className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
    )
}

export default AddtoCartbutton