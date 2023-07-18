
import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import React from "react"

const footer = ()=>{
    return(
        <footer>
            <div className="p-10 bg-white-800 text-white-200">
                <div className="max-w-7xl mx-auto">
                    <div className="sm:flex sm:flex-wrap sm:-mx4 md:py-4">
                        <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/3 ">
                            <Image src={logo} width={180} height={30} alt='logo' />
                            <p className="py-5">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                            <div className='icon-container'>
                                {/* <div><GrTwitter size={20} /></div>
                                <div><GrFacebookOption size={20} /></div>
                                <div><GrLinkedinOption size={20} /></div> */}
                            </div>
                        </div>

                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5 footer-links">
                        <h3 className="font-bold text-lg">Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5 ">
                        <h3 className="font-bold text-lg">Support</h3>
                        <ul>
                            <li>Support Carrer</li>
                            <li>24h Service</li>
                            <li>Quick Chat</li>
                        </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5 ">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <ul>
                            <li>Whatsapp</li>
                            <li>Support 24h</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <hr className=" h-1 mx-auto my-4 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" />
                <div className='copyright flex justify-between  gap-6 md:gap-10'>
                    <p>Copyright © 2022 Dine Market</p>
                    <p>Design by. <span>GitCodeHub</span></p>
                    <p>Code by. <span>factian on github</span></p>
                </div>
            </div>
        </footer>


//         <footer className="bg-indigo-900 py-5 px-12">

//         <div className='footer flex justify-between gap-6 md:gap-10'>
  
//           <div className='logo w-64'>
  
//             <Image src={logo} width={180} height={30} alt='logo' />
  
//             <p className="py-5">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
  
//             <div className='icon-container'>
  
//               {/* <div><GrTwitter size={20} /></div>
  
//               <div><GrFacebookOption size={20} /></div>
  
//               <div><GrLinkedinOption size={20} /></div>
//    */}
//             </div>
  
//           </div>
  
  
  
  
//           <div className='footer-links'>
  
//             <h3>Company</h3>
  
//             <ul>
  
//               <li>About</li>
  
//               <li>Terms of Use</li>
  
//               <li>Privacy Policy</li>
  
//               <li>How it Works</li>
  
//               <li>Contact Us</li>
  
//             </ul>
  
//           </div>
  
  
  
  
//           <div className='footer-links'>
  
//             <h3>Support</h3>
  
//             <ul>
  
//               <li>Support Carrer</li>
  
//               <li>24h Service</li>
  
//               <li>Quick Chat</li>
  
//             </ul>
  
//           </div>
  
  
  
  
//           <div className='footer-links'>
  
//             <h3>Contact</h3>
  
//             <ul>
  
//               <li>Whatsapp</li>
  
//               <li>Support 24h</li>
  
//             </ul>
  
//           </div>
  
//         </div>
  
  
  
  
//         <div className='copyright'>
  
//           <p>Copyright © 2022 Dine Market</p>
  
//           <p>Design by. <span>Weird Design Studio</span></p>
  
//           <p>Code by. <span>shabrina12 on github</span></p>
  
//         </div>
  
//       </footer>
    )
}

export default footer