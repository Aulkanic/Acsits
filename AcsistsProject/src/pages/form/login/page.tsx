/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, notification } from 'antd'
import MailIcon from '../../../assets/letter.png'
import { IoKeySharp } from "react-icons/io5";
import { CustomButton } from '../../../components/button/customButton';
import { RouterUrl } from '../../../routes';
import { useNavigate } from 'react-router-dom';
import useStore from '../../../zustand/store/store';
import { saveAllOfficers, saveOfficerInfo, selector } from '../../../zustand/store/store.provider';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../hooks/useFetchData';
import { updateData } from '../../../hooks/useUpdateData';

export const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const user = useStore(selector('officer'))
  const [loading,setLoading] = useState(false)

  async function Fetch(){
    const user = await fetchData('doc_users')
    user.shift()
    saveAllOfficers(user)
  }

  useEffect(() =>{
    Fetch()
  },[])

  const onFinish = async(values:any) =>{
    try {
      setLoading(true)
      const isExist = user.officers?.find((item:any) => item.email === values.email && item.password === values.password);
      if(isExist){
        saveOfficerInfo(isExist)
        await updateData('doc_users',isExist.id,{isOnline:true})
        notification.success({
          message: 'Login Success',
        })
        setTimeout(() =>{
          navigate(RouterUrl.HOME);
        },2000)
      }else{
        notification.error({
          message: 'Login Failed',
          description: 'Invalid email or password'
        })
        setLoading(false)
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      })
      setLoading(false)
    }
  }
  return (
    <div className='flex-1 flex justify-start items-center'>
      <div className='w-[593px] px-16 py-8 h-[473px] rounded-lg bg-[#F5F5FA] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        <Form form={form} onFinish={onFinish} className='w-full h-full'>
          <div className='w-full h-full flex flex-col justify-around'>
          <h1 className='text-[40px] text-center font-[700]'>Login Your Account</h1>
          <div>
          <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' },{ type: 'email', message: 'The input is not valid E-mail!' }]}>
            <Input className='h-[50px]' prefix={<img className='w-[28px]' src={MailIcon} />} placeholder='Email' />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password className='h-[50px]' prefix={<IoKeySharp size={28} color='gray' />} placeholder='Password' />
          </Form.Item>
          </div>
          <div className='space-y-4'>
          <div className='flex w-full items-center justify-center'>
            <CustomButton
            children='Login'
            classes='w-[290px] h-[51px] bg-[#060E61] text-white text-[20px] rounded-full'
            htmlType='submit'
            loading={loading}
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
