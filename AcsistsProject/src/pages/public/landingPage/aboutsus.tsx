import Abstract from '../../../assets/add-a-heading-4-1.png'

export const AboutUsPage = () => {
  return (
    <div className='flex gap-8 flex-nowrap'>
        <div>
            <h1 className='text-gradient font-[700] text-[60px]'>About ACSITS</h1>
            <div className='space-y-4 w-[643px]'>
            <p className='text-[20px] leading-[25px]'>The <strong>Association of Computer Science in Information Technology Students (ACSITS)</strong> is an organization under the School of Engineering, Information and Communications Technology Department at the Universidad de Zamboanga.</p>
            <p className='text-[20px] leading-[25px]'>The purpose of this organization is to serve students with a platform where they can explore their passions, develop essential skills, build genuine connections, and becoming an active members of the Association of Computer Science and Information Technology Students (ACSITS) organization.</p>
            <div className='text-[20px] leading-[25px]'>
                <strong>Vision</strong>
                <p>Vision To promote and encourage students pursuing paths in Computer Science and Information Technology by cultivating a thriving community of enthusiastic learners.</p>
            </div>
            <div className='text-[20px] leading-[25px]'>
                <strong>Mission</strong>
                <p>Mission We aim to motivate and educate Computer Science and Information Technology students to become leaders and innovators in the field of technology. ACSITS serves as a center of information, skills, and resources where students can thrive throughout their educational journey and develop into competent individuals .</p>
            </div>
            </div>
        </div>
        <div className='pt-12'>
            <img className='w-[669px] h-[571px]' src={Abstract} alt="" />
        </div>
    </div>
  )
}
