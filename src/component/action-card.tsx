import { MessageIcon, UpArrowicon } from 'icons'


type Props =  {
    upVoteCount: number;
    headerText: string;
    descriptionText: string;
    tagText: string;
    messageCount: number
}
const ActionCard = (props:Props) => {
    const {upVoteCount, headerText, descriptionText, tagText, messageCount} = props
  return (
    <div className='py-7 px-8 bg-white flex flex-row items-center w-full justify-between rounded-[10px]'>
      <div className='flex flex-row items-baseline'>
        <div className='flex flex-col p-2 h-[53px] w-[40px] px-[9px] bg-[#F2F4FE] items-center justify-between rounded-[10px]'>
          <UpArrowicon />
          <span className='font-bold text-[13px] text-[#3A4374]'>{upVoteCount} </span>
        </div>
        <div className='flex flex-col ml-10'>
          <h3 className='font-bold text-[18px] leading-[26.01px] text-[#3A4374]'>
            {headerText}
          </h3>
          <p className='text-[#647196] text-sm font-normal leading-[23.12px]'>
            {descriptionText}
          </p>
          <span
            className={`text-center text-[13px] leading-[18.79px] font-semibold w-fit bg-[#F2F4FF] px-4 py-[5px] rounded-[10px] text-[#4661E6] mt-3`}
          >
            {tagText}
          </span>
        </div>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <MessageIcon/>
        <span className={`text-sm font-bold leading-[23.12px] ${messageCount > 0 ? "text-[#3A4374]" : "text-[#3A4374 opacity-30"} `}>{messageCount}</span>
      </div>
    </div>
  )
}

export default ActionCard
