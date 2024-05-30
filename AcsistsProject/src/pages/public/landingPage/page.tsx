import { Button } from 'antd'
import CircleAbstract from '../../../assets/circle.png'
import UntitleAbstract from '../../../assets/untitled-design-1-1.png'

export const LandingPage = () => {
  return (
    <div className='pt-20 space-y-8 h-full relative'>
       <h1 className='text-[60px] font-sans font-[700] mb'>Welcome to <span className='text-gradient'>ACSITS</span></h1> 
       <span className='text-sky-700 font-sans font-[700] text-[60px] -pt-12'>Workspace</span>
       <p className='w-[500px] font-[400] text-[28px] leading-[35px]'>This is your BSIT virtual workspace for success. Explore, connect, and thrive. Join us today!</p>
       <Button className='text-[25px] h-max w-[196px] rounded-full bg-[#060E61] text-white'>
        JOIN NOW
       </Button>
       <div className='absolute w-[135px] h-[133px] bottom-2 right-[400px] bg-custom-gradient z-40 rounded-full'></div>
       <img className='-rotate-8 h-[610px] w-[733px] absolute right-12 -top-12 z-50' src={UntitleAbstract} alt="" />
       <img className='absolute right-0 bottom-0 w-[369px] h-[385px]' src={CircleAbstract} alt="" />
    </div>
  )
}
