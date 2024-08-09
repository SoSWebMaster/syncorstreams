import { Divider } from "@mui/material";
import Songs from "../../song/Songs";
import { useState } from "react";
import { useAppSelector } from "../../../store";
import { useAppDispatch } from "../../../store";
import { updatePlayListFilter } from "../../../store/music-store";
const SinglePlayList=()=>{
    const {playLists,playListFilter }=useAppSelector(state=>state.music)
    const [active,isActive]=useState(playListFilter)
    const dispatch=useAppDispatch();
    return (
        <>
            <div className="flex">
                <div className=" w-[20%] mx-5">
                    <p className="font-medium">Currently On</p>
                    <Divider className="!bg-[#555555] !mt-5 "/>
                    <div className="flex flex-col items-center mt-8">
                        {/* @ts-ignore */}
                        {playLists?.length>0 && (
                            playLists?.map((item,index)=>(
                                <p className={`w-full h-[40px] ${active===item?.name ?'bg-[#FB8A2E]': 'bg-none' } cursor-pointer rounded-lg  mb-3 flex items-center justify-center`} key={`${index} + ${item?.name}`}  onClick={()=>{isActive(item?.name); dispatch(updatePlayListFilter(item?.name))}}>{item?.name}</p>
                            ))
                        )}
                    </div>
                </div>
                <div className="w-[80%]"> <Songs/></div>
            </div>
          
        </>
    )
}

export default SinglePlayList;