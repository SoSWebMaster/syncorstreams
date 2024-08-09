import CircleLogo from "/static/images/Circle_Button_NB.png";
import { Divider } from "@mui/material";
import {musicSFXLinks,productLinks,socialLinks,footerContent} from './footerContent'

const FooterComponent = () => {
   return (
      <>
         <footer>
            <div className="      h-[499px] flex items-center  bg-[url('/static/images/Website-Background.png')]">
               <div className="flex justify-between !w-full 2xl:px-60 xl:px-32 lg:px-10">
                  <div>
                     <img src={CircleLogo} className="w-[480px] h-[280px]" />
                  </div>
                  <div>
                     <h1 className="text-[18px] font-bold mb-5">MUSIC/SFX</h1>
                     {musicSFXLinks.map((link, index) => (
                        <p
                           key={index}
                           className="text-[16px] text-[#7A7A7A] mb-5"
                        >
                           {link}
                        </p>
                     ))}
                  </div>
                  <div>
                     <h1 className="text-[18px] font-bold mb-5">Product</h1>
                     {productLinks.map((link, index) => (
                        <p
                           key={index}
                           className="text-[16px] text-[#7A7A7A] mb-5"
                        >
                           {link}
                        </p>
                     ))}
                  </div>
                  <div>
                     <h1 className="text-[18px] font-bold mb-5">Get Socials</h1>
                     <p className="text-[16px] text-[#7A7A7A] mb-5" dangerouslySetInnerHTML={{ __html: footerContent }}>
                     </p>
                     <div className="flex ">
                        {socialLinks.map((link, index) => (
                           <img
                              key={index}
                              src={link.src}
                              alt={link.alt}
                              className="pr-3"
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div className="!mx-[380px]">
               <Divider className=" bg-[#7A7A7A]  opacity-30" />
               <div className="relative flex justify-between top-14">
                  <p className=" text-[#7A7A7A] ">
                     Copyright @2023 Aspire. All Rights Reserved.
                  </p>
                  <p className=" text-[#7A7A7A] ">
                     Terms & Conditions ~ Privacy Policy
                  </p>
               </div>
            </div>
         </footer>
      </>
   );
};

export default FooterComponent;
