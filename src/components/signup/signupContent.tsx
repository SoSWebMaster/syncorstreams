

import { Button } from "@mui/material";
import Google from "/static/images/google 1.png";
import Facebook from "/static/images/facebook 1.png";
import SignUpTextFieldsComponent from "./textFields";
// import TextFieldsComponent from "./textFields";
const SignUpContent = () => {
   return (
      <>
         <div className="mt-5 ">
            <h1 className=" text-[26px] font-bold flex justify-center">Get Started With MAKER</h1>
            <p className=" text-[18px] text-[#7E7E7E] font-normal flex justify-center">Getting started is easy</p>

            <div className="flex justify-center mt-10">
               <Button className="w-[126px] !bg-white !text-black text-[12px] !mr-4 h-[43px]">
                  <span className="pr-1">
                     <img src={Google} />
                  </span>
                  Google
               </Button>
               <Button className="w-[126px] !bg-white !text-black text-[12px] h-[43px]">
                  <span className="pr-1">
                     <img src={Facebook} />
                  </span>
                  Facebook
               </Button>
            </div>
            <div className="flex justify-center mt-5">
               <div className="flex ">
                  <p className="relative text-white border-white bottom-2 right-2">
                  
                     ________________
                  </p>
                  <p>Or continue with</p>
                  <p className="relative text-white border-white bottom-2 left-2">
                 
                     ________________
                  </p>
               </div>
            </div>
            <div className="items-center ">
                <SignUpTextFieldsComponent />
            </div>
              
         </div>
      </>
   );
};

export default SignUpContent;
