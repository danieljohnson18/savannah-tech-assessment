import { roadmaps ,tags } from "../constants"
import { useState } from "react"


const SideTab = () => {
    const [selectedTag, setSelectedTag] = useState(tags[0])

    const handleSelectedTag = (selected: string) => {
        setSelectedTag(selected)
    }
    return (
        <aside className="flex flex-col gap-6 fixed inset-y-0 left-0 w-1/5 m-10">
            <div className="bg-smooth-gradient w-[255px] h-[137px] flex flex-col justify-end items-start px-6 py-6 rounded-[10px]">
                <h3 className="font-bold text-[20px] text-white leading-[28.9px]">Frontend Mentor</h3>
                <span className="font-medium text-[15px] leading-[21.68px] text-white opacity-70">Feedback Board</span>
            </div>
            <div className="p-6 w-[255px] h-[166px] bg-white rounded-[10px]">
                <div className="flex flex-wrap gap-x-2 gap-y-[14px]">
                    {
                        tags.map((tag, index) => {
                            const activeTag = selectedTag === tag ? "bg-[#4661E6] px-4 py-[5px] rounded-[10px] text-white" : "bg-[#F2F4FF] px-4 py-[5px] rounded-[10px] text-[#4661E6]"
                            return (
                                <span className={`${activeTag} text-center text-[13px] leading-[18.79px] font-semibold cursor-pointer`} key={index} onClick={() => handleSelectedTag(tag)}>{tag}</span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="p-6 w-[255px] h-[178px] bg-white rounded-[10px] flex flex-col justify-end">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="font-bold text-[18px] leading-[26.01px] text-[#3A4374]">Roadmap</h3>
                        <span className="underline text-[#4661E6] text-[13px] font-semibold leading-[18.79px]">View</span>
                    </div>
                    {
                        roadmaps.map(({ id, title, tagColor, count }) => {
                            return (
                                <div key={id} className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row gap-4 items-center"><div className={`${tagColor} h-[8px] w-[8px] rounded-full`} /> <span className="text-[#647196] text-sm font-normal leading-[23.12px]">{title}</span></div>
                                    <span className="text-sm font-bold text-[#647196] leading-[23.12px]">{count}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </aside>
    )
}

export default SideTab

