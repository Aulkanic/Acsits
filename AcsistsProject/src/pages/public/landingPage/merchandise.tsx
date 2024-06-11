/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchData } from "../../../hooks/useFetchData";
import { saveAllMerchandise, selector } from "../../../zustand/store/store.provider";
import useStore from "../../../zustand/store/store";
import Abstract from '../../../assets/add-a-heading-4-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { currencyFormat } from "../../../config/utils/utils";

export const LMerchandisePage = () => {
    const officer = useStore(selector('officer'))
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchMerchandise();
      }, []);
    
      const fetchMerchandise = async () => {
        const querySnapshot = await fetchData('doc_merchandise');
        querySnapshot.shift();
        saveAllMerchandise(querySnapshot);
        setLoading(false)
      };
  return (
    <div className='flex gap-8 flex-nowrap'>
        <div>
            <h1 className='text-gradient font-[700] text-[60px] text-nowrap'>ACSITS MERCHANDISE</h1>
            {loading ? (
            <Skeleton active paragraph={{ rows: 4 }} className="px-16 py-12 w-[600px] h-[385px] bg-white rounded-xl shadow-[0px_8px_5px_0px_#a0aec0]" />
          ) : (
            <Swiper
              effect={'fade'}
              navigation={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="w-[700px] h-[485px] bg-white rounded-xl shadow-[0px_8px_5px_0px_#a0aec0]"
            >
              {officer.merchandise?.map((h: any, idx: number) => {
                return (
                  <SwiperSlide key={idx} className='px-16 py-8 bg-cover'>
                    <div className='bg-white rounded-xl'>
                      <div className='relative'>
                        <p className='absolute bottom-2 right-4 text-[18px] text-[#060E61] bg-white px-2  font-[700]'>{currencyFormat(h.price)}</p>
                        <img className='w-full h-[375px]' src={h.image || ''} alt="" />
                      </div>
                      <div className='w-full pt-4 text-[25px] font-[700] text-white min-h-[72px] bg-[#060E61] flex justify-center items-top rounded-b-xl'>
                        {h.itemName}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
        </div>
        <div className='hidden sm:block pt-12'>
            <img className='w-[669px] h-[571px]' src={Abstract} alt="" />
        </div>
    </div>
  )
}
