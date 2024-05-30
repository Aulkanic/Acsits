/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Img1 from '../../../assets/image-10.png'
import Img2 from '../../../assets/image-11.png'
import Abstract from '../../../assets/add-a-heading-4-1.png'
import { Image } from 'antd'

export const AchievementsPage = () => {

    const achievements = [
        {
            content:`<p>4th-year IT students participated in the <strong>“IEC Campaign on the Philippine Electric Power Industry”</strong></p>`,
            image: Img1
        },
        {
            content:`<p>IT students participated in the <strong>Hack4Gov Challenge 2023</strong> for <strong>Region IX</strong>, hosted by <strong>DICT</strong>.</p>`,
            image: Img2
        }
    ]
  return (
    <div className='flex gap-8 flex-nowrap'>
        <div>
            <h1 className='text-gradient font-[700] text-[60px]'>ACSITS Achievements</h1>
            <div className='space-y-4'>
            {achievements?.map((data:any) =>(
                <div>
                    <Image width={632} height={211} src={data.image} />
                    <div className='text-black text-[20px] leading-[25px] w-[643px]' dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            ))}
            </div>
        </div>
        <div className='pt-12'>
            <img className='w-[669px] h-[571px]' src={Abstract} alt="" />
        </div>
    </div>
  )
}
