import Logo from '../assets/logo.png'
import LPBG from '../assets/acsits-1.png'
import { IoNotificationsSharp } from "react-icons/io5";
import { Badge } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { RouterUrl } from '../routes';

export default function Private() {
  const navigate = useNavigate()
  const location = useLocation()

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#060E61]' : 'text-white';
  }

  return (
    <div className='min-h-screen w-full bg-center relative bg-no-repeat bg-cover overflow-hidden' style={{ backgroundImage: `url(${LPBG})` }}>
      <header className='fixed top-0 flex items-center p-8 justify-between h-[111px] bg-[#060E613B] w-full'>
        <div className='flex items-center gap-16'>
          <img className='w-32 h-full object-fill' src={Logo} alt="" />
          <ul className='flex gap-8'>
            <li
              className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.HOME)}`}
              onClick={() => navigate(RouterUrl.HOME)}
            >HOME</li>
            <li
              className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.ANNOUNCMENT)}`}
              onClick={() => navigate(RouterUrl.ANNOUNCMENT)}
            >ANNOUNCEMENTS</li>
          </ul>
        </div>
        <ul className='flex gap-8 items-center'>
          <li
            className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.TASK)}`}
            onClick={() => navigate(RouterUrl.TASK)}
          >TASKS</li>
          <li
            className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.PLANS)}`}
            onClick={() => navigate(RouterUrl.PLANS)}
          >PLANS</li>
          <li
            className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.MERCHANDISE)}`}
            onClick={() => navigate(RouterUrl.MERCHANDISE)}
          >MERCH</li>
          <li><Badge offset={[-5, 25]} showZero count={0}><IoNotificationsSharp color='white' size={36} className='rotate-45' /></Badge></li>
          <li
            className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.PROFILE)}`}
            onClick={() => navigate(RouterUrl.PROFILE)}
          >PROFILE</li>
        </ul>
      </header>
      <main className='pt-[111px] h-full'>
        <Outlet />
      </main>
    </div>
  )
}
