/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect,useState } from 'react'
import { Calendar, Modal, Form, Input, DatePicker, Button, Badge, Tooltip } from 'antd';
import { fetchDataCondition } from '../../../hooks/useFetchData';
import useStore from '../../../zustand/store/store';
import { saveAllEvents, selector } from '../../../zustand/store/store.provider';
import { addData } from '../../../hooks/useAddData';
import dayjs, { Dayjs } from 'dayjs';

export const PlansPage = () => {
  const officer = useStore(selector('officer'))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading,setLoading] = useState(false)
  const [form] = Form.useForm();

  const fetchEvents = async() => {
    const res = await fetchDataCondition('doc_events', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    saveAllEvents(res)
   
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleOk = async () => {
    try {
      setLoading(true)
      const values = await form.validateFields();
      values.officerId = officer.info.id
      values.date = new Date(values.date).toLocaleDateString()
      await addData('doc_events',values)
      const notifData = {
        officerSender: officer.info.id,
        officerReceiver: '',
        content: 'posted a new plan',
        date: new Date().toLocaleDateString(),
      }
      await addData('doc_notification',notifData)
      form.resetFields();
      fetchEvents()
      setLoading(false)
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const cellRender = (current: Dayjs, info: { originNode: any; type: string }) => {
    if (info.type === 'date') {
      const listData = officer.events?.filter((event: any) => dayjs(event.date).isSame(current, 'day'));
      return (
        <div className="events">
          {listData.map((item: any) => {
            const status = dayjs(item.date).isBefore(dayjs(), 'day') ? 'error' : 'success';
            return <Badge className='bg-[#060E613B] flex items-center p-4 w-full h-full rounded-lg' key={item.id} status={status}
             text={<p className='text-[#060E61] line-clamp-2'><Tooltip placement="bottom" title={item.title}><p>{item.title}</p></Tooltip></p>} />;
          })}
        </div>
      );
    }
    return info.originNode;
  };
  console.log(officer)

  return (
    <div className='px-16 py-12'>
     <div className='flex justify-end items-end'>
     <Button className='my-4' type="primary" onClick={() => setIsModalVisible(true)}>Add Event</Button>
     </div>
      <Calendar cellRender={cellRender} className='p-4 rounded-lg shadow-[0px_8px_5px_0px_#a0aec0]' />
      <Modal confirmLoading={loading} title="Add Event" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title of the event!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select the date of the event!' }]}>
            <DatePicker className='w-full' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
