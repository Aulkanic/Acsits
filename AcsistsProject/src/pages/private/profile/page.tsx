/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Image, Input, Button, Upload, message, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import useStore from '../../../zustand/store/store';
import { saveOfficerInfo, selector, signOut } from '../../../zustand/store/store.provider';
import { updateData } from '../../../hooks/useUpdateData'; 
import { uploadImageToStorage } from '../../../hooks/uploadFile';
import { UploadFile } from 'antd/es/upload/interface';
import { CustomButton } from '../../../components/button/customButton';
import { useNavigate } from 'react-router-dom';
import { RouterUrl } from '../../../routes';

export const ProfilePage = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const officer = useStore(selector('officer'));
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(officer.info.profile);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading,setLoading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    form.setFieldsValue(officer.info);
  }, [form, officer.info]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      setLoading(true)
      const values = await form.validateFields();
      if (fileList.length > 0) {
        const uploading = fileList.map(async (file: UploadFile) => {
          const filePath = `profile/${file.name}_${officer.info.id}`;
          const upload = await uploadImageToStorage(file.originFileObj as File, filePath);
          return upload;
        });
        values.profile = await Promise.all(uploading);
        values.profile = values.profile[0]; // Assuming only one file is uploaded
      } else {
        values.profile = profileImage;
      }
      values.officerId = officer.info.id;
      await updateData('doc_users', officer.info.id, values);
      notification.success({
        message: 'Success',
        description: 'Profile updated successfully',
      })
      setIsEditing(false);
      saveOfficerInfo(values);
      setProfileImage(values.profile);
      setPreviewImage(undefined);
      setLoading(false)
    } catch (error) {
      console.error("Error updating profile: ", error);
      message.error("Failed to update profile");
    }
  };

  const handleUploadChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1); // Keep only the latest file
    setFileList(fileList);

    if (fileList.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(fileList[0].originFileObj as Blob);
    } else {
      setPreviewImage(undefined);
    }
  };
  const handleSignout = () =>{
     setTimeout(() =>{
      signOut()
      navigate(RouterUrl.LOGIN)
     },1000)
  }

  return (
    <div className='flex w-full min-h-screen justify-center items-top py-24'>
      <div className='flex flex-col gap-8 w-[60%] h-max bg-white shadow-[0px_8px_5px_0px_#a0aec0] p-12 rounded-lg'>
        <div className='flex gap-4 items-center justify-top flex-col'>
          <Image src={previewImage || profileImage} width={150} height={150} className='rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' />
          {isEditing && (
            <Upload
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleUploadChange}
            >
              <Button icon={<UploadOutlined />}>Change Profile Picture</Button>
            </Upload>
          )}
        </div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 24 }} form={form} className='w-full'>
          <Form.Item label="Name" name="fullName" rules={[{ required: true }]}>
            <Input disabled={!isEditing} />
          </Form.Item>
          <Form.Item label="Age" name="age" rules={[{ required: true }]}>
            <Input disabled={!isEditing} />
          </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
            <Input disabled={!isEditing} />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input disabled={!isEditing} />
          </Form.Item>
          <Form.Item label="Position" name="position" rules={[{ required: true }]}>
            <Input disabled={!isEditing} />
          </Form.Item>
          <div className='flex gap-4 justify-end items-end'>
          {isEditing ? (
            <Button loading={loading} type="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button type="default" onClick={handleEdit}>
              Edit
            </Button>
          )}
          <CustomButton
            children='Sign out'
            onClick={() => handleSignout()}
          />
          </div>

        </Form>
      </div>
    </div>
  );
};
