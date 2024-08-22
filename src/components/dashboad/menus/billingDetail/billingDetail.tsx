import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import useAxios from "../../../../services/axiosConfig/axiosConfig";
import { endPoints } from "../../../../services/constants/endPoint";

const BillingDetail = () => {
  const [billingData, setBillingData] = useState<any>(null);
  const axiosInstance=useAxios();

  useEffect(() => {
    // Function to fetch pricing data from the API
    fetchBillingData();
  }, []);

  const fetchBillingData = async () => {
    try {
      const response = await axiosInstance.get(endPoints.billing);

      if(response?.data){
       const data = response?.data.paymentMethods[0];
       setBillingData(data);
      }
    } catch (error) {
    }
  };

  if (!billingData) {
    return <div>Loading...</div>;
  }


   return (
      <>
         <div className="m-12 ">
            <p className="text-[38px] mb-2">My BIlling</p>
            <p className="text-[18px] mb-6">Payment Methods</p>
            <div className=" border border-[#FB8A2E] border-b-[30px] w-[60%] !z-50 rounded-xl h-96">
              <div className="bg-black h-[360px] !z-0 rounded-xl p-12">
                  <div>
                      <p className="text-[#BBBBBB] text-[22px]">Card Ending in {billingData.card.last4}</p>
                      <p className=" text-[14px] mt-1">Expires: {billingData.card.exp_month+'/'+billingData.card.exp_year}</p>
                  </div>
                  <div className="mt-8">
                      <p className="text-[#BBBBBB] text-[22px]">Name on card</p>
                      <p className=" text-[14px] mt-1">{billingData.billing_details.name}</p>
                  </div>
                  <div className="mt-8">
                      <p className="text-[#BBBBBB] text-[22px]">Billing Address</p>
                      <p className=" text-[14px]">{billingData.billing_details.address.postal_code}</p>
                  </div>
                   
              </div>
            </div>

            <Button className="!bg-[#FB8A2E] !text-white !h-[52px] !mt-8 !rounded-md">Add New Payment Method</Button>
         </div>
      </>
   );
};

export default BillingDetail;
