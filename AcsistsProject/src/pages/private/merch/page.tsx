/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Input, Modal, Form, InputNumber, Button,Upload, message, Dropdown, MenuProps, Badge, UploadFile } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { CustomButton } from '../../../components/button/customButton';
import { deleteData } from '../../../hooks/useDeleteData';
import { updateData } from '../../../hooks/useUpdateData';
import { addData } from '../../../hooks/useAddData';
import { fetchData } from '../../../hooks/useFetchData';
import { saveAllMerchandise, selector } from '../../../zustand/store/store.provider';
import useStore from '../../../zustand/store/store';
import CustomTextEditor from '../../../components/input/customEditor';
import { uploadImageToStorage } from '../../../hooks/uploadFile';
import { SlOptions } from 'react-icons/sl';
import { currencyFormat } from '../../../config/utils/utils';

const { Search } = Input;

export const MerchandisePage = () => {
  const officer = useStore(selector('officer'))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [merchImg,setMerchImg] = useState(null)
  const [form] = Form.useForm();

  useEffect(() => {
    fetchMerchandise();
  }, []);

  const fetchMerchandise = async () => {
    const querySnapshot = await fetchData('doc_merchandise')
    querySnapshot.shift()
    saveAllMerchandise(querySnapshot)
  };

  const handleAdd = () => {
    form.resetFields();
    setEditingItem(null);
    setIsModalVisible(true);
  };

  const handleEdit = (item:any) => {
    form.setFieldsValue(item);
    setEditingItem(item.id);
    setMerchImg(item.image)
    setIsModalVisible(true);
  };

  const handleDelete = async (id:any) => {
    await deleteData('doc_merchandise',id)
    fetchMerchandise();
    message.success('Merchandise deleted successfully');
  };
    const normFile = (e: any) => {
      if (Array.isArray(e)) {
          console.log(e)
        return e;
      }
      return e?.fileList;
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const file = values.image
      if (file.length > 0) {
        const uploading = file.map(async (file: UploadFile) => {
          const currentDatetime = new Date().toISOString().replace(/[-:.]/g, '');
          const filePath = `merchandise/${file.name}_${officer.info.id}${currentDatetime}`;
          const upload = await uploadImageToStorage(file.originFileObj as File, filePath);
          return upload;
        });
        values.image = await Promise.all(uploading);
        values.image = values.image[0]; // Assuming only one file is uploaded
      } else {
        values.image = merchImg;
      }
      if (editingItem) {
        await updateData('doc_merchandise',editingItem,values)
        message.success('Merchandise updated successfully');
      } else {
        await addData('doc_merchandise',values)
        message.success('Merchandise added successfully');
      }
      fetchMerchandise();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding/updating merchandise: ", error);
      message.error('Error adding/updating merchandise');
    }
  };
  const items = (item: any): MenuProps['items'] => [
    {
      key: '1',
      label: <p onClick={() => handleEdit(item)}>Edit</p>,
    },
    {
      key: '2',
      label: <p onClick={() => handleDelete(item.id)}>Delete</p>,
    },
  ];
  return (
    <div>
      <div className='m-8 flex flex-wrap justify-between items-center'>
        <Search placeholder='Search here...' className='w-[40%]' />
        <CustomButton icon={<PlusOutlined />} onClick={handleAdd}>Add Merchandise</CustomButton>
      </div>
      <div className='flex flex-wrap gap-4 px-12'>
        {officer.merchandise.map((item: any) => (
          <Badge.Ribbon className='text-[14px] p-2 -mt-3' placement='end' text={`Year-${item.schoolYear}`}>
          <div className='bg-white rounded-xl'>
            <div className='relative'>
            <Dropdown trigger={['click']} className='cursor-pointer absolute top-2 left-4' menu={{ items: items(item) }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
              <SlOptions size={30} />
            </Dropdown>
            <p className='absolute bottom-2 right-4 text-[18px] text-[#060E61] font-[700]'>{currencyFormat(item.price)}</p>
              <img className='w-[442px] h-[375px]' src={item.image || ''} alt="" />
            </div>
            <div className='w-full pt-4 text-[25px] font-[700] text-white min-h-[72px] bg-[#060E61] flex justify-center items-top rounded-b-xl'>
              {item.itemName}
            </div>
          </div>
          </Badge.Ribbon>
        ))}
      </div>
      <Modal
        title={editingItem ? 'Edit Merchandise' : 'Add Merchandise'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="itemName" label="Item Name" rules={[{ required: true, message: 'Please input the item name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <CustomTextEditor />
          </Form.Item>
          <div className='flex flex-nowrap gap-4'>
          <Form.Item className='flex-1' name="price" label="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
            <InputNumber className='w-full' min={0} />
          </Form.Item>
          <Form.Item className='flex-1' name="stock" label="Stock" rules={[{ required: true, message: 'Please input the stock!' }]}>
            <InputNumber className='w-full' min={0} />
          </Form.Item>
          </div>
          <Form.Item name="schoolYear" label="School Year" rules={[{ required: true, message: 'Please input the school year!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
            accept="image/*"
            beforeUpload={() => false} 
            listType="picture" 
            maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

