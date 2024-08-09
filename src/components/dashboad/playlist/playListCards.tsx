import imag1 from '/static/images/Rectangle 44866.png'
import imag2 from '/static/images/Rectangle 44866 (1).png'
import imag3 from '/static/images/Rectangle 44866 (2).png'
import imag4 from '/static/images/Rectangle 44866 (3).png'
import { updatePlayListFilter, updatePlayLists } from '../../../store/music-store'
import { useAppDispatch } from '../../../store'
import { toast } from 'react-toastify'
import useAxios from '../../../services/axiosConfig/axiosConfig'
import { endPoints } from '../../../services/constants/endPoint'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store'
const Tracks=[imag1, imag2, imag3, imag4]

   

interface PlayListTypes {
    id?:number,
    user_id?:number,
    name?:string,
    tcount?:number
}
// const recordsss=[1,1,1,1,1,1,1,1]
const PlayListCard = () => {
    const dispatch=useAppDispatch();
    const {search}=useAppSelector(state=>state.music)
    const axiosInstance = useAxios();
    const [records,setRecords]=useState<PlayListTypes[]>();
    useEffect   (()=>{
        fetchPlayList();
    },[search])
    const fetchPlayList=async()=>{
        try{
            const response= await axiosInstance.post(endPoints?.fetch_playlist2, {search:search})
            if(response?.data){
                dispatch(updatePlayLists(response?.data));
                setRecords(response?.data);
            }
        }catch(err){
            toast.error("SOmething wrong");
        }
    }   
   return (
      <>
         <div className="flex flex-wrap mx-5 gap-x-5 gap-y-5 " >
            {records?.map((item,index)=>(
                         <div className='cursor-pointer' onClick={()=>dispatch(updatePlayListFilter(item?.name))} >
                         <img src={Tracks[index%Tracks?.length]}/>
                         <div className='p-3'>
                             <p className='text-[20px] font-semibold '>{item?.name}</p>
                             <p className='text-[#9898A6] text-[12px]'>{item?.tcount} Track</p>
                         </div>  
                     </div>
            ))}
       

         </div>
      </>
   );
};
export default PlayListCard;
