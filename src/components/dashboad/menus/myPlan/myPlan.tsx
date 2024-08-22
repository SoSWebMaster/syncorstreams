import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { updateSideBar } from "../../../../store/music-store";
import { endPoints } from "../../../../services/constants/endPoint";
import useAxios from "../../../../services/axiosConfig/axiosConfig";

const MyPlan = () => {
    const dispatch=useDispatch();
    const [planData, setPlanData] = useState<any>(null);
    const axiosInstance=useAxios();

    useEffect(() => {
      // Function to fetch pricing data from the API
      fetchPlanData();
    }, []);
  
    const fetchPlanData = async () => {
      try {
        const response = await axiosInstance.get(endPoints.current_plan);
  
        if(response?.data){
         const data = response?.data.data[0];
         
         if (typeof data.features === 'string') {
            try {
                data.features = JSON.parse(data.features);
            } catch (error) {
                console.error('Error parsing features JSON:', error);
                data.features = [];
            }
        }
         setPlanData(data);
        }
      } catch (error) {
      }
    };

    const stripHtmlTags = (htmlString) => {
      const div = document.createElement('div');
      div.innerHTML = htmlString;
      return div.textContent || div.innerText || '';
    };
  
    if (!planData) {
      return <div>Loading...</div>;
    }
  
    const features = Array.isArray(planData?.features) ? planData.features : [];
   
    return (
      <>
         <div className="m-12">
            <p className="text-[28px]">My Plan</p>
            <p className="text-[24px] mt-8">{planData.plan_name}</p>
            
            {features.length > 0 ? (
                features.map((item, index) => (
                    <div key={index} className="flex items-center mt-5">
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="cursor-pointer text-[#FB8A2E] w-3"
                        />
                        <p className="ml-2 !text-[#BBBBBB]" dangerouslySetInnerHTML={{ __html: stripHtmlTags(item) }}></p>
                    </div>
                ))
            ) : (
                <p>No features available.</p>
            )}
       <div>
        <p className="text-[20px] font-extrabold mt-4">
          Canceled on: <span className="text-[#FB8A2E]">August 29, 2024</span>
        </p>
      </div>

            <Button className="!bg-[#FB8A2E] !text-white !rounded-md !mt-5 !w-60 !h-11 !font-bold" onClick={()=>dispatch(updateSideBar('update-plan'))}>Update Plan</Button>
         </div>
      </>
   );
};

export default MyPlan;
