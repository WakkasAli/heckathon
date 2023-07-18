import React from 'react'
import { client } from "../../../sanity/lib/client"


export const getProducts = async ()=> {
  //const res = await client.fetch('*[_type=="product"]{_id,price,pname,category,"image":image[].asset->url}')
  
  const res = await fetch('http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}')
  return res.json()
} 

interface ICart{
  ID:string,
  USER_ID:string,
  PRODUCT_ID:string,
  quantity:number
}

const getallCart = async () => {
  const data = await getProducts()
console.log("cart")
  return(
    <div className="flex justify-evenly mt-16">
      {
        // data.map((item: ICart)=>
        // <div>
        //   <div>
        //     {item.ID}
        //   </div>
        //   <div className="text-lg"><b>{item.USER_ID}</b></div>
        //   <div className="text-lg"> Price: ${item.PRODUCT_ID}</div>
        // </div>
        //)
        <h1>Working</h1>
      }
    </div>
  )
}

export default getallCart