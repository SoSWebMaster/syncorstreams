import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuitCase from '/static/images/suitcase.png'
const PricingCards = () => {
   const List = {
      streamer: [
         "Unlimited streaming",
         "Create playlists & favorite tracks",
         "Qualified for promotions and giveaways",
         "10% off custom music requests",
      ],
      Creator:['Unlock SFX library','Unlimited downloads of music and SFX','Personal-Use license for unlimited personal projects','20% off custom music requests'],
      Freelancer:['MP3 and WAV downloads','Ability to download stems','Commercial-Use license for client work and broadcast','25% off custom music requests'],
      Business:['Dedicated customer service representative and contact information','Access to exclusive, unreleased tracks','Playlists tailored to your requests/briefs','Custom music requests and custom SFX/foley/sound design services']
   };
   return (
      <>
         <div className="relative flex justify-between bottom-32">
            <div className=" group w-[340px] h-auto bg-black py-8 px-6 rounded-2xl hover:!bg-background-gradient hover:!scale-110 transition-transform duration-500 mr-3">
               <p className="text-[20px] font-medium">Streamer</p>
               <p className="text-[36px] font-bold flex items-center">
                  $6{" "}
                  <span className="text-[16px] text-[#848199] ml-2 ">
                     / month
                  </span>
               </p>
               <p className="text-[#848199] text-[12px] pt-1">
                  For the creative that lives to go live.
               </p>
               <div className="flex justify-center mt-3">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[12px] font-semibold text-center mt-1">
                  $66/year (one free month)
               </p>
               <div className="flex justify-center ">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[16px] font-normal  mt-10">
                  This Plan Includes
               </p>
               {List?.streamer?.map((item, index) => (
                  <div
                     className="flex items-center "
                     key={`${index} + ${item}`}
                  >
                     <div className="w-5 h-5 bg-[#282828] group-hover:!bg-[#4E3D32] rounded-full flex items-center justify-center p-2 mt-3">
                        <FontAwesomeIcon
                           icon={faCheck}
                           className="cursor-pointer text-[#FB8A2E] w-3 "
                        />
                     </div>
                     <p className="text-[#A8A8A8] text-[10px] ml-5 mt-3">
                        {item}
                     </p>
                  </div>
               ))}
               <button className="w-full h-[54px] !bg-[#0714BD] group-hover:!bg-[#FB8A2E]   text-white rounded-lg mt-5">
                  Free Trial
               </button>
            </div>
            {/* Second Cards */}
            <div className=" group w-[340px] h-auto bg-black py-8 px-6 rounded-2xl hover:!bg-background-gradient hover:!scale-110 transition-transform duration-500 mr-3">
               <p className="text-[20px] font-medium">Content Creator</p>
               <p className="text-[24px] font-bold flex items-center">
                  $10
                  <span className="text-[16px] text-[#848199] ml-2 ">
                     / month
                  </span>
               </p>
               <p className="text-[#848199] text-[12px] pt-1">
               Filmmakers, YouTubers, and creators who need a little bit more.
               </p>
               <div className="flex justify-center mt-3">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[12px] font-semibold text-center mt-1">
               $100/year (two free months)
               </p>
               <div className="flex justify-center ">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[16px] font-normal  mt-8">
                  This Plan Includes
               </p>
               {List?.Creator?.map((item, index) => (
                  <div
                     className="flex items-center "
                     key={`${index} + ${item}`}
                  >
                     <div className="w-5 h-5 bg-[#282828] group-hover:!bg-[#4E3D32] rounded-full flex items-center justify-center p-2 mt-3">
                        <FontAwesomeIcon
                           icon={faCheck}
                           className="cursor-pointer text-[#FB8A2E] w-3 "
                        />
                     </div>
                     <p className="text-[#A8A8A8] text-[10px] ml-5 mt-3">
                        {item}
                     </p>
                  </div>
               ))}
               <button className="w-full h-[54px] !bg-[#0714BD] group-hover:!bg-[#FB8A2E]   text-white rounded-lg mt-5">
                  Free Trial
               </button>
            </div>

            {/* THird Card */}
            <div className=" group w-[340px] h-auto bg-black py-8 px-6 rounded-2xl hover:!bg-background-gradient hover:!scale-110 transition-transform duration-500 mr-3">
               <p className="text-[20px] font-medium">Freelancer</p>
               <p className="text-[24px] font-bold flex items-center">
                  $20
                  <span className="text-[16px] text-[#848199] ml-2 ">
                     / month
                  </span>
               </p>
               <p className="text-[#848199] text-[12px] pt-1">
               Got clients? All the audio and licenses you'll ever need.
               </p>
               <div className="flex justify-center mt-3">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[12px] font-semibold text-center mt-1">
               $180/year (one free month)
               </p>
               <div className="flex justify-center ">
                  <p className="relative bottom-1">__________</p>
                  <p className="mx-3 text-center text-[#848199]">or</p>
                  <p className="relative bottom-1">__________</p>
               </div>
               <p className="text-[16px] font-normal  mt-8">
                  This Plan Includes
               </p>
               {List?.Freelancer?.map((item, index) => (
                  <div
                     className="flex items-center "
                     key={`${index} + ${item}`}
                  >
                     <div className="w-5 h-5 bg-[#282828] group-hover:!bg-[#4E3D32] rounded-full flex items-center justify-center p-2 mt-3">
                        <FontAwesomeIcon
                           icon={faCheck}
                           className="cursor-pointer text-[#FB8A2E] w-3 "
                        />
                     </div>
                     <p className="text-[#A8A8A8] text-[10px] ml-5 mt-3">
                        {item}
                     </p>
                  </div>
               ))}
               <button className="w-full h-[54px] !bg-[#0714BD] group-hover:!bg-[#FB8A2E]   text-white rounded-lg mt-5">
                  Free Trial
               </button>
            </div>

            {/* Fourth Card */}

            <div className=" group w-[340px] h-auto bg-black py-8 px-6 rounded-2xl hover:!bg-background-gradient hover:!scale-110 transition-transform duration-500">
               <p className="text-[20px] font-medium">Business/Enterprise</p>
               <p className="text-[36px] font-bold flex items-center">
                  <img src={SuitCase} className="my-5"/>
               </p>
               <p className="text-[#848199] text-[12px]">
               Your business needs the best audio for ads, television, branding, and more. Let us do the work.
               </p>
          
               <p className="text-[16px] font-normal  mt-12">
                  This Plan Includes
               </p>
               {List?.Business?.map((item, index) => (
                  <div
                     className="flex items-center "
                     key={`${index} + ${item}`}
                  >
                     <div className="w-5 h-5 bg-[#282828] group-hover:!bg-[#4E3D32] rounded-full flex items-center justify-center p-2 mt-3">
                        <FontAwesomeIcon
                           icon={faCheck}
                           className="cursor-pointer text-[#FB8A2E] w-3 "
                        />
                     </div>
                     <p className="text-[#A8A8A8] text-[10px] ml-5 mt-3">
                        {item}
                     </p>
                  </div>
               ))}
               <button className="w-full h-[54px] !bg-[#0714BD] group-hover:!bg-[#FB8A2E]   text-white rounded-lg mt-5">
                  Free Trial
               </button>
            </div>
         </div>
      </>
   );
};

export default PricingCards;
