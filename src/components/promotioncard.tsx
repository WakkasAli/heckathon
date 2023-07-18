import Image,{StaticImageData} from "next/image"


function Promotionlist(props:{img:StaticImageData}) {
    return (
        <div >
            {/* <h3 className="font-bold text-lg mt-3">{props.title}</h3>
            <p className="font-bold text-lg">${props.price}</p> */}
            <div >
                <Image src={props.img} alt="Promotions" />
            </div>
        </div>
    )
}

export default Promotionlist
