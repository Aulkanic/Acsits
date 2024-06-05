/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { fetchData, fetchDataCondition } from '../../../hooks/useFetchData';
import useStore from '../../../zustand/store/store';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { saveAllAnnouncements, saveAllEvents, saveAllMerchandise, saveAllOfficers, saveAllTasks, selector } from '../../../zustand/store/store.provider';
import { Avatar } from 'antd';
import { GoDotFill } from "react-icons/go";
import { currencyFormat, dateFormatter } from '../../../config/utils/utils';

export const HomePage = () => {
  const officer = useStore(selector('officer'))
  
  async function Fetch() {
    const user = await fetchData('doc_users');
    const announcement = await fetchData('doc_announcements');
    const merchandise = await fetchData('doc_merchandise');
    const task = await fetchDataCondition('doc_tasks', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    const plans = await fetchDataCondition('doc_events', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    user.shift()
    announcement.shift()
    merchandise.shift()
    saveAllMerchandise(merchandise)
    saveAllOfficers(user)
    saveAllAnnouncements(announcement)
    saveAllTasks(task)
    saveAllEvents(plans)

  }

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div className='flex gap-4 p-8'>
      <div className='flex flex-col gap-8'>
        <div className='relative'>
        <p className='absolute -top-4 left-[29%] z-50 w-[267px] h-[38px] text-[20px] font-[500] bg-[#060E61] text-white flex justify-center items-center p-4 rounded-full'>ANNOUNCEMENTS</p>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="w-[600px] h-[285px] bg-white rounded-xl shadow-[0px_8px_5px_0px_#a0aec0]"
      >
        {officer.announcements?.map((h:any,idx:number) =>{
           const details = officer.officers?.find((v: any) => v.id === h.officerId);
          return !details ? null : (
          <SwiperSlide key={idx} className='px-16 py-8'>
              <div className='flex flex-col'>
                <div className='flex gap-4'>
                  <div>
                    <Avatar size={50} src={details.profile} />
                  </div>
                  <div>
                  <p className='font-[500] line-clamp-2'>{details.fullName} - {details.position}</p>
                  <p>{dateFormatter(h.date)}</p>
                  </div>
                </div>
                <div className='text-black mt-4 line-clamp-6' dangerouslySetInnerHTML={{ __html: h.content }} />
              </div>
              </SwiperSlide>
            )})}
        </Swiper>
        </div>
        <div className='relative'>
        <p className='absolute -top-4 left-[29%] z-50 w-[267px] h-[38px] text-[20px] font-[500] bg-[#060E61] text-white flex justify-center items-center p-4 rounded-full'>MERCHANDISE</p>
        <Swiper
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="w-[600px] h-[385px] bg-white rounded-xl shadow-[0px_8px_5px_0px_#a0aec0]"
      >
        {officer.merchandise?.map((h:any,idx:number) =>{
          return(
          <SwiperSlide key={idx} className='px-16 py-8 bg-cover'>
              <div className='bg-white rounded-xl'>
                <div className='relative'>
                  <p className='absolute bottom-2 right-4 text-[18px] text-[#060E61] font-[700]'>{currencyFormat(h.price)}</p>
                  <img className='w-[442px] h-[275px]' src={h.image || ''} alt="" />
                </div>
                <div className='w-full pt-4 text-[25px] font-[700] text-white min-h-[72px] bg-[#060E61] flex justify-center items-top rounded-b-xl'>
                  {h.itemName}
                </div>
              </div>
              </SwiperSlide>
            )})}
        </Swiper>
        </div>
      </div>
      <div className='relative'>
      <p className='absolute -top-4 left-[22%] z-50 w-[162px] h-[38px] text-[20px] font-[500] bg-[#060E61] text-white flex justify-center items-center p-4 rounded-full'>PLANS</p>
        <div className='w-[268px] h-full pt-8 pb-4 overflow-y-auto flex flex-col gap-8 bg-white shadow-[0px_8px_5px_0px_#a0aec0] rounded-xl'>
          {officer.events?.map((g:any,idx:number) =>{
            
            return(
              <div key={idx} className='flex flex-col gap-2 px-8'>
                <p className='font-[700] text-[18px] leading-[22.68px]'>{dateFormatter(g.date)}</p>
                <p className='font-[400] text-[14px] leading-[17.68px]'>{g.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-8 flex-wrap'>
      <div className='relative'>
      <p className='absolute -top-4 left-[15%] z-50 w-[198px] h-[38px] text-[20px] font-[500] bg-[#060E61] text-white flex justify-center items-center p-4 rounded-full'>ASSIGNED</p>
        <div className='w-[268px] h-[256px] pt-8 pb-4 overflow-y-auto flex flex-col gap-8 bg-white shadow-[0px_8px_5px_0px_#a0aec0] rounded-xl'>
          {officer.tasks?.map((g:any,idx:number) =>{
            const details = officer.officers?.find((v: any) => v.id === g.officerId);
            return(
              <div key={idx} className='flex items-center gap-2 px-8'>
                <div>
                  <Avatar src={details.profile} />
                </div>
                <p className='font-[400] text-[14px] leading-[17.68px]'>{g.tasktitle}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='relative flex-1'>
      <p className='absolute -top-4 left-[15%] z-50 w-[198px] h-[38px] text-[20px] font-[500] bg-[#060E61] text-white flex justify-center items-center p-4 rounded-full'>CONTACTS</p>
        <div className='w-[268px] h-full pt-8 pb-4 overflow-y-auto flex flex-col gap-8 bg-white shadow-[0px_8px_5px_0px_#a0aec0] rounded-xl'>
          {officer.officers?.map((g:any,idx:number) =>{
            return g.id === officer.info.id ? null : (
              <div key={idx} className='flex items-center gap-2 px-4'>
                <div className='flex justify-start gap-2'>
                <div>
                  <Avatar size={50} src={g.profile} />
                </div>
                </div>
                <div className='w-full flex flex-col justify-start'>
                  <p className='font-[600] text-[14px] leading-[17.68px]'>{g.fullName}</p>
                  <div className='flex gap-1 items-center justify-start'>
                  <GoDotFill color={g.isOnline ? 'green' : 'red'} />
                  <p className='text-xs'>{g.isOnline ? 'Active now' : 'Idle'}</p>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  )
}
