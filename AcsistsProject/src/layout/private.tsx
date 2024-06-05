/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '../assets/logo.png'
import LPBG from '../assets/acsits-1.png'
import { IoNotificationsSharp } from "react-icons/io5";
import { Avatar, Badge, Popover } from 'antd';
import { Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { RouterUrl } from '../routes';
import { useEffect, useState } from 'react';
import { fetchData } from '../hooks/useFetchData';
import { saveAllNotification, selector } from '../zustand/store/store.provider';
import useStore from '../zustand/store/store';

export default function Private() {
  const officer = useStore(selector('officer'))
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false);

  async function Fetch() {
    const notif = await fetchData('doc_notification');
    notif.shift()
    saveAllNotification(notif)
  }

  useEffect(() => {
    Fetch();
  }, [officer]);
  
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#060E61]' : 'text-white';
  }

  const content = (
    <div className='w-[350px]'>
      <h1 className='font-[700] text-[20px]'>Notifications</h1>
      <div className='flex flex-col gap-4 my-4'>
      {officer.notification?.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime())?.map((v:any,idx:number) =>{
         const details = officer.officers?.find((y:any) => y.id === v.officerSender)
        return details ? (
        <div key={idx} className='flex gap-4 items-top pb-4 flex-nowrap'>
          <div className='w-[60px]'>
          <Avatar className='border-2 border-gray-200' size={50} src={details.profile || ''} />
          </div>
          <p className='text-left flex-1'>{details.fullName} {v.content}</p>
        </div>
      ) : null})}
      </div>
    </div>
  );
  return officer.info ? (
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
          <li>
            <Popover 
            placement="bottomRight" 
            content={content}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            >
            <Badge offset={[-5, 25]} showZero count={officer.notification.length || 0}>
              <IoNotificationsSharp color='white' size={36} className='rotate-45 cursor-pointer' />
            </Badge>
            </Popover>
          </li>
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
  ) : (
    <Navigate replace to={RouterUrl.LOGIN} />
  )
}
