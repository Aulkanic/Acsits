/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';
import { Input, Modal, Form, InputNumber, Button, Upload, message, Dropdown, MenuProps, Badge, UploadFile, Image, notification, Spin } from 'antd';
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
import { currencyFormat, useDebounce } from '../../../config/utils/utils';
import Swal from 'sweetalert2';

const { Search } = Input;

export const MerchandisePage = () => {
  const officer = useStore(selector('officer'));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading,setLoading] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null);
  const [merchImg, setMerchImg] = useState<UploadFile[]>([]);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [oldImg,setOldImg] = useState('')
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const [form] = Form.useForm();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchMerchandise();
  }, []);

  const fetchMerchandise = async () => {
    const querySnapshot = await fetchData('doc_merchandise');
    querySnapshot.shift();
    saveAllMerchandise(querySnapshot);
  };

  const handleAdd = () => {
    form.resetFields();
    setEditingItem(null)
    setIsModalVisible(true);
  };

  const handleEdit = (item: any) => {
    form.setFieldsValue(item);
    setEditingItem(item.id);
    setOldImg(item.image);
    setIsModalVisible(true);
  };

  const handleDelete = async (data: any) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete this Merchandise? ${data.itemName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setDeleteLoading(true);
          await deleteData('doc_merchandise', data.id);
          fetchMerchandise();
          message.success('Merchandise deleted successfully');
        } catch (error) {
          console.log(error)
          Swal.fire('Error!', 'Failed to delete.', 'error');
        } finally {
          setDeleteLoading(false);
        }
      }else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Delete was cancelled :)",
          icon: "error"
        });
      }
    });

  };

  const handleOk = async () => {
    try {
      console.log(merchImg)
      setLoading(true)
      const values = await form.validateFields();
      const fileList = merchImg;
      console.log(fileList[0].originFileObj)
      if (fileList && fileList.length > 0 && fileList[0].originFileObj) {
        const currentDatetime = new Date().toISOString().replace(/[-:.]/g, '');
        const filePath = `merchandise/${fileList[0].name}_${officer.info.id}${currentDatetime}`;
        const upload = await uploadImageToStorage(fileList[0].originFileObj as File, filePath);
        values.image = upload;
      }else if(oldImg) {
        values.image = oldImg;
      }else{
        notification.error({
          message:'Please upload image'
        })
        setLoading(false)
        return
      }
      if (editingItem) {
        await updateData('doc_merchandise', editingItem, values);
        message.success('Merchandise updated successfully');
        setLoading(false)
      } else {
        await addData('doc_merchandise', values);
        message.success('Merchandise added successfully');
        setLoading(false)
      }
      fetchMerchandise();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding/updating merchandise: ", error);
      message.error('Error adding/updating merchandise');
      setLoading(false)
    }
  };

  const items = (item: any): MenuProps['items'] => [
    {
      key: '1',
      label: <p onClick={() => handleEdit(item)}>Edit</p>,
    },
    {
      key: '2',
      label: <p onClick={() => handleDelete(item)}>Delete</p>,
    },
    
  ];
  const handleUploadChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1); // Keep only the latest file
    setMerchImg(fileList);

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

  const onSetFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {  value } = e.target;
    setSearchQuery(value);
  }, []);

  const onModalClose = () =>{
    form.resetFields()
    setMerchImg([])
    setOldImg('')
    setPreviewImage(undefined)
    setIsModalVisible(false)
  }
  const filterData = officer.merchandise?.filter((k:any) =>{
    const isName = !searchQuery || k.itemName.toLowerCase( ).includes( searchQuery.toLowerCase());
    return isName
  })
  return (
    <div>
      <div className='m-8 flex flex-wrap justify-between items-center'>
        <Search placeholder='Search here...' className='w-[40%]' onChange={useDebounce(onSetFilter)} />
        <CustomButton icon={<PlusOutlined />} onClick={handleAdd}>Add Merchandise</CustomButton>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 px-12'>
      {deleteLoading ? <Spin size="large" /> : (
          filterData?.map((item: any) => (
            <Badge.Ribbon className='text-[14px] p-2 -mt-3' placement='end' text={`Year: ${item.schoolYear}`} key={item.id}>
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
          ))
        )}
      </div>
      <Modal
        title={editingItem ? 'Edit Merchandise' : 'Add Merchandise'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => onModalClose()}
        confirmLoading={loading}
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
          <Form.Item name="image" label="Image" >
            <div className='flex flex-col justify-center items-center gap-4'>
            <Image src={previewImage || oldImg || 'https://via.placeholder.com/150'} width={150} height={150} className='rounded-lg' />
            <Upload
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false}
              fileList={merchImg}
              onChange={handleUploadChange}
            >
              <Button icon={<UploadOutlined />}>Change Merchandise Picture</Button>
            </Upload>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
