import LPBG from '../assets/acsits-1.png'
import { Outlet } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Abstract from '../assets/add-a-heading-3-1.png'
import Circle2 from '../assets/circle2.png'

export default function Form() {
  return (
    <>
    <div  className='h-screen flex flex-nowrap w-full bg-center relative bg-no-repeat bg-cover overflow-hidden' style={{ backgroundImage: `url(${LPBG})` }}>
        <div className='w-[50%] relative flex flex-col items-center'>
        <img className='w-[214px]' src={Logo} alt="" />
        <p className='text-[60px] font-[700]'>Nice to meet you!</p>
        <img className='absolute z-50 w-[450px] h-[355px] left-36 top-80' src={Abstract} alt="" />
        <img className='absolute h-[345px] left-0 bottom-0' src={Circle2} alt="" />
        <div className='absolute w-[135px] h-[133px] bottom-52 right-8 bg-gradient-to-b from-[#060E61] to-[#0087FF] z-40 rounded-full'></div>
        </div>
        <Outlet />
    </div>
    </>
  )
}
