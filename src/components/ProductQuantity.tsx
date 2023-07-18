import { FC, useState } from "react";

const ProductQuantity:FC<{item: any}>=({item})=>{

    const[count,setCount] = useState(1);
    item.quantity = count;
    return(
        <div className="flex space-x-1">
            <button className="text-lg h-8 w-8 rounded-2xl bg-gray-200 flex justify-center items-center" onClick={()=>setCount(count-1)}>-</button>
            <input type="text" value={count} className="w-10 text-center border"/>
            <button className="text-lg h-8 w-8 rounded-2xl bg-gray-200 flex justify-center items-center" onClick={()=>setCount(count+1)}>+</button>
            </div>
    )
}

export default ProductQuantity