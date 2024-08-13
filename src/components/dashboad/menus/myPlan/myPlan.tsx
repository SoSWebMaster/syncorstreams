import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateSideBar } from "../../../../store/music-store";
const MyPlan = () => {
    const dispatch=useDispatch();
   return (
      <>
         <div className="m-12">
            <p className="text-[28px]">My Plan</p>
            <p className="text-[24px] mt-8">Content Creator</p>
            <div className="flex items-center mt-5">
               <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-[#FB8A2E] w-3 "
               />
               <p className="ml-2 !text-[#BBBBBB]">Unlock SFX library</p>
            </div>
            <div className="flex items-center mt-5">
               <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-[#FB8A2E] w-3 "
               />
               <p className="ml-2 !text-[#BBBBBB]">Unlimited downloads of music and SFX</p>
            </div>
            <div className="flex items-center mt-5">
               <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-[#FB8A2E] w-3 "
               />
               <p className="ml-2 !text-[#BBBBBB]">Personal-Use license for unlimited personal projects</p>
            </div>
            <div className="flex items-center mt-5">
               <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-[#FB8A2E] w-3 "
               />
               <p className="ml-2 !text-[#BBBBBB]">20% off custom music requests</p>
            </div>
            <div>
                <p className="text-[20px] font-extrabold mt-4">Canceled on: <span className="text-[#FB8A2E]"> August 29, 2024</span></p>
            </div>

            <Button className="!bg-[#FB8A2E] !text-white !rounded-md !mt-5 !w-60 !h-11 !font-bold" onClick={()=>dispatch(updateSideBar('update-plan'))}>Update Plan</Button>
         </div>
      </>
   );
};

export default MyPlan;
