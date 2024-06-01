/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Select, notification } from 'antd'
import MailIcon from '../../../assets/letter.png'
import { IoKeySharp } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { FaStreetView,FaTransgender, FaMars, FaVenus } from "react-icons/fa";
import { GiAges } from "react-icons/gi";
import FullNameIcon from '../../../assets/identification-documents.png'
import { CustomButton } from '../../../components/button/customButton';
import { RouterUrl } from '../../../routes';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../hooks/useFetchData';
import { saveAllOfficers, selector } from '../../../zustand/store/store.provider';
import useStore from '../../../zustand/store/store';
import { addData } from '../../../hooks/useAddData';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
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
      const isEmailUser = user?.officers.find((item: { email: any; }) => item.email === values.email);
      if(isEmailUser){
          notification.error({
              message:'Email already used',
              description: 'Failed to submit form. Please use other email.',
          })
          return
      }
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {confirmPassword,...details} = values
      await addData('doc_users',details)
      notification.success({
        message:'Success',
        description: 'Successfully submitted form.',
      })
      setLoading(false)
      form.resetFields();
      setTimeout(() =>{
          navigate(RouterUrl.LOGIN)
      },2000)
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      })
      setLoading(false)
    }
  }

  console.log(user)

  return (
    <div className='flex-1 flex justify-start items-center'>
      <div className='w-[593px] h-max px-16 py-8 rounded-lg bg-[#F5F5FA] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        <Form onFinish={onFinish} form={form} className='w-full h-full'>
          <div className='w-full h-full flex flex-col justify-around'>
          <h1 className='text-[40px] text-center font-[700] mb-8'>Create New Account</h1>
          <div>
          <Form.Item name='fullName' rules={[{ required: true, message: 'Please input your full name!' }]}>
            <Input className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><img className='w-[43px]' src={FullNameIcon} /></div>} placeholder='Full Name' />
          </Form.Item>
          <Form.Item name='age' rules={[{ required: true, message: 'Please input your age!' }]}>
            <Input min={0} type='number' className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><GiAges size={28}  color='gray' /></div>} placeholder='Age' />
          </Form.Item>
          <Form.Item name='gender' rules={[{ required: true, message: 'Please select your gender!' }]}>
              <Select
                placeholder={<p className='flex items-center gap-4 w-full'><FaTransgender size={28} className='ml-2' color='gray' /> Gender</p>}
                style={{height:'50px'}}
                options={[
                  { value: 'Male', label: <div className='flex items-center gap-5 w-full'><FaMars size={28}  color='gray' /> Male</div> },
                  { value: 'Female', label: <div className='flex items-center gap-5 w-full'><FaVenus size={28}  color='gray' /> Female</div> },
                ]}
              />
          </Form.Item>
          <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' },{ type: 'email', message: 'The input is not valid E-mail!' }]}>
            <Input className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><img className='w-[28px]' src={MailIcon} /></div>} placeholder='Email' />
          </Form.Item>
          <Form.Item name='position' rules={[{ required: true, message: 'Please input your position!' }]}>
            <Input className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><FaStreetView size={28}  color='gray'/></div>} placeholder='Position' />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><IoKeySharp size={28} color='gray' /></div>} placeholder='Password' />
          </Form.Item>
          <Form.Item name='confirmPassword'
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
          >
            <Input.Password className='h-[50px]' prefix={<div className='w-[47px] items-center flex justify-center'><MdOutlinePassword size={28} color='gray' /></div>} placeholder='Confirm Password' />
          </Form.Item>
          </div>
          <div className='space-y-4'>
          <div className='flex w-full items-center justify-center'>
            <CustomButton
            children='Sign up'
            classes='w-[290px] h-[51px] bg-[#060E61] text-white text-[20px] rounded-full'
            loading={loading}
            htmlType='submit'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <p>Already have an Account? <a className='text-[#3C48C5]' href={RouterUrl.SIGNUPPAGE}>Login here</a></p>
          </div>
          </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
