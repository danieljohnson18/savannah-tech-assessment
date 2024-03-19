import { DownArrowicon, LightIcon } from './icons'
import './App.css'
import { ActionCard, SideTab } from './component'
import { actionValues } from './constants'

function App () {
  return (
    <div className='flex flex-row gap-[30px]'>
      <SideTab />
      <div className='flex flex-col gap-6 items-start w-[800px] absolute inset-y-0 left-[18rem] m-10 overflow-y-scroll'>
        <div className='bg-[#373F68] pl-6 pr-4 py-[14px]  rounded-[10px] flex flex-row items-center w-full justify-between'>
          <div className='flex flex-row items-center'>
            <LightIcon />
            <span className='font-bold text-[18px] leading-[26.01px] text-white pl-4'>
              6 Suggestions
            </span>
            <div className='flex flex-row items-center ml-[38px] text-[14px] font-normal leading-[20.23px] text-white'>
              <div className='flex flex-row items-center'>
                Sort by :&nbsp;<h3 className='font-bold'> Most Upvotes</h3>
              </div>
              <DownArrowicon className='ml-2' />
            </div>
          </div>
          <div className='bg-[#AD1FEA] py-3 rounded-[10px] w-[158px] text-center font-bold text-[14px] leading-[20.23px] text-[#F2F4FE]'>
            + Add Feedback
          </div>
        </div>

        {actionValues.map(value => (
          <ActionCard key={value.id} {...value} />
        ))}
      </div>
    </div>
  )
}

export default App
