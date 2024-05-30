import { Form, Input } from 'antd'
import MailIcon from '../../../assets/letter.png'
import { IoKeySharp } from "react-icons/io5";
import { CustomButton } from '../../../components/button/customButton';
import { RouterUrl } from '../../../routes';

export const Login = () => {
  return (
    <div className='flex-1 flex justify-start items-center'>
      <div className='w-[593px] px-16 py-8 h-[473px] rounded-lg bg-[#F5F5FA] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        <Form className='w-full h-full'>
          <div className='w-full h-full flex flex-col justify-around'>
          <h1 className='text-[40px] text-center font-[700]'>Login Your Account</h1>
          <div>
          <Form.Item>
            <Input className='h-[50px]' prefix={<img className='w-[28px]' src={MailIcon} />} placeholder='Email' />
          </Form.Item>
          <Form.Item>
            <Input.Password className='h-[50px]' prefix={<IoKeySharp size={28} color='gray' />} placeholder='Password' />
          </Form.Item>
          </div>
          <div className='space-y-4'>
          <div className='flex w-full items-center justify-center'>
            <CustomButton
            children='Login'
            classes='w-[290px] h-[51px] bg-[#060E61] text-white text-[20px] rounded-full'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <p>Don't have an Account? <a className='text-[#3C48C5]' href={RouterUrl.SIGNUPPAGE}>Sign up here</a></p>
          </div>
          </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
