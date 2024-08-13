import { Button } from "@mui/material";

const BillingDetail = () => {
   return (
      <>
         <div className="m-12 ">
            <p className="text-[38px] mb-2">My BIlling</p>
            <p className="text-[18px] mb-6">Payment Methods</p>
            <div className=" border border-[#FB8A2E] border-b-[30px] w-[60%] !z-50 rounded-xl h-96">
              <div className="bg-black h-[360px] !z-0 rounded-xl p-12">
                  <div>
                      <p className="text-[#BBBBBB] text-[22px]">Card Ending in 7290</p>
                      <p className=" text-[14px] mt-1">Expires: 8/2027</p>
                  </div>
                  <div className="mt-8">
                      <p className="text-[#BBBBBB] text-[22px]">Name on card</p>
                      <p className=" text-[14px] mt-1">Brandon Rivera</p>
                  </div>
                  <div className="mt-8">
                      <p className="text-[#BBBBBB] text-[22px]">Billing Address</p>
                      <p className=" text-[14px]">92804</p>
                  </div>
                   
              </div>
            </div>

            <Button className="!bg-[#FB8A2E] !text-white !h-[52px] !mt-8 !rounded-md">Add New Payment Method</Button>
         </div>
      </>
   );
};

export default BillingDetail;
