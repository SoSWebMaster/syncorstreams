import PlayListCard from "./playListCards";

const PlayListContent=()=>{
    return (
        <>
            <div className="flex items-center justify-between mb-10">
                <p className="text-[24px] font-semibold">Your PlayLists</p>
                <button className="w-[232px] h-[54px] text-white bg-primary-blue rounded-xl">Add Now</button>
            </div>
            <PlayListCard/>
        </>
    )
}

export default PlayListContent;