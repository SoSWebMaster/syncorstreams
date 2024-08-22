import { Button } from "@mui/material";
import { endPoints } from "../../../../services/constants/endPoint";
import axiosInstance from "../../../../services/axiosConfig/axiosConfigSimple";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const UpdatePlan = () => {

    const [pricingData, setPricingData] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Function to fetch pricing data from the API
        fetchPricingData();
      }, []);

      const fetchPricingData = async () => {
        try {
          const response = await axiosInstance.get(endPoints.pricing);
  
          console.log(response.data);
          if(response?.data){
           const data = response?.data.data;
           setPricingData(data);
          }
        } catch (error) {
  
        }
      };

   return (
      <>
         <div className="m-12">
            <p className="text-[28px]">My Plan</p>
            <p className="text-[24px] mt-6">Choose Plan</p>
            {pricingData.length > 0 &&
                    pricingData?.map((item, index) => (
            <div className="flex justify-between border gap-7 w-full border-[#FB8A2E] h-32 mt-8 rounded-3xl p-7 justify-between items-center">
                <div className="flex justify-between w-full">
                    <div>
                        <p className="text-[28px] font-semibold">{item?.plan_name}</p>
                        <p className="text-[18px] ">{item?.sub_heading}</p>
                    </div>
                    <div>
                        <p className="text-[28px] font-semibold">{"$"+item?.month_price+"/ month"}</p>
                        <p className="text-[18px] text-[#BBBBBB]">{`or billed at $${item?.year_price}/yearly ( 1 Free Month )`}</p>
                    </div>
                    </div>
                <div>
                        <Button className="!bg-[#FB8A2E] !text-white !w-48 !h-12 !rounded-3xl">Select</Button>
                </div>
                </div>
                    ))}
            {/* </div> */}
           
         </div>
      </>
   );
};

export default UpdatePlan;