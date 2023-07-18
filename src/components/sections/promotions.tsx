
import Promotionlist from "@/components/promotioncard"
import Proevent1 from "/public/event1.webp"
import Proevent2 from "/public/event2.webp"
import Proevent3 from "/public/event3.webp"
import { Button } from "@/components/ui/button"
export const Promotions = () => {
    return (
     <div className="justify-evenly">
        <small className="flex justify-center text-sm font-semibold leading-none 222222022222222220022 text-blue-800">Promotions</small>
        <h2 className="flex justify-center scroll-m-20 mb-5 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Our Promotions Events
        </h2>
        
        <div className="justify-evenly grid grid-rows-3 grid-flow-col gap-3">
            <div className="grid grid-flow-col  col-span-2 bg-slate-300" >
                <h3 className="scroll-m-20 text-4xl font-extrabold  lg:text-4xl px-8 mt-8 text-gray-700 tracking-widest">
                    Get Up to <br/>60% Off
                    <p className="tracking-tight text-2xl font-normal mt-5">For the summer <br/>season</p>
                </h3 >
                <span className="mt-5"><Promotionlist  img={Proevent1}/></span>
            </div>
            <div className="row-span-1 col-span-2 bg-black">
            <h3 className="text-center snap-center  scroll-m-20 text-4xl font-extrabold  lg:text-4xl px-8 py-8 mt-8 text-white tracking-wider">
                GET 30% Off
                <p className="tracking-tight text-sm  mt-5">USE PROMO CODE</p>
                <Button className="bg-gray-800  tracking-[.15em] lg:text-2xl px-10">DINEWEEKENDSALE</Button>
            </h3>
            </div>
            <div className="row-span-2 bg-orange-200 ">
            <p className="tracking-tight py-5 px-5 mt-3 mb-6 text-4xl lg:text-2xl">Flex Sweatshirt <br/>
            <span className="text-lg font-semibold "><s>$100.00</s> $75.00</span>
            </p>
           
                <Promotionlist  img={Proevent2}/>
            </div>
            <div className="row-span-2 bg-slate-300">
            <p className="tracking-tight py-5 px-5 mt-3 mb-6 text-4xl lg:text-2xl">Flex Push Button Bomber <br/>
            <span className="text-lg font-semibold "><s>$225.00</s> $190.00</span>
            </p>
                <Promotionlist img={Proevent3}/></div>
          
        </div>
      </div>
  
    )
  }
  export default Promotions
  