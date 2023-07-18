import Image,{StaticImageData} from "next/image"


function Productlist(props:{title:string,price:number,img:StaticImageData}) {
    return (
        <div>
        <Image src={props.img} alt="Product" />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        </div>
    )
}
// const Productlist:FC =() =>{
//     return (
//         <div>
//         <Image src={P1} alt="Product" />
//         <h3 className="font-bold text-lg mt-3">Flex Sweater</h3>
//         <p className="font-bold text-lg">$150</p>
//         </div>
//     )
// }
export default Productlist
