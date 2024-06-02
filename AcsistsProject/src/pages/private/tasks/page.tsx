/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Addicon from '../../../assets/taskiconadd.png';
import ListIcon from '../../../assets/taskiconlist.png';
import CompletedIcon from '../../../assets/taskiconcomplete.png';
import useStore from '../../../zustand/store/store';
import { saveAllOfficers, saveAllTasks, selector } from '../../../zustand/store/store.provider';
import { DatePicker, Form, Input, Select, notification, List, Avatar, Badge, Button } from 'antd';
import CustomTextEditor from '../../../components/input/customEditor';
import { CustomButton } from '../../../components/button/customButton';
import { addData } from '../../../hooks/useAddData';
import { fetchData, fetchDataCondition } from '../../../hooks/useFetchData';
import { updateData } from '../../../hooks/useUpdateData';

const actionsTask = [
  {label:'Add Task', icon:Addicon,action:'add'},
  {label:'My Tasks', icon:ListIcon,action:'list'},
  {label:'Completed Tasks', icon:CompletedIcon,action:'complete'},
];

export const TaskPage = () => {
  const [form] = Form.useForm();
  const officer = useStore(selector('officer'));
  const [page, setPage] = useState('add');
  const [loading, setLoading] = useState(false);

  async function Fetch() {
    const user = await fetchData('doc_users');
    const res = await fetchDataCondition('doc_tasks', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    user.shift();
    saveAllTasks(res);
    saveAllOfficers(user);
  }

  useEffect(() => {
    Fetch();
  }, [page]);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      values.dueDate = values.dueDate.format('YYYY-MM-DD');
      values.status = 'Pending';
      const assignedTo = officer.officers?.find((v:any) => v.id === values.officerId)
      await addData('doc_tasks', values);
      const notifData = {
        officerSender: officer.info.id,
        officerReceiver: values.officerId,
        content: `${officer.info.fullName} assigned ${assignedTo.fullName} a task!`,
        date: new Date().toLocaleDateString(),
      }
      await addData('doc_notification',notifData)
      notification.success({ message: 'Task Added Successfully', description: 'Task Added Successfully', duration: 2 });
      form.resetFields();
      setLoading(false);
      Fetch();
    } catch (error: any) {
      notification.error({
        message: 'Error',
        description: error.message || 'Something went wrong. Please try again later',
      });
      setLoading(false);
    }
  };

  const markAsComplete = async (taskId: string) => {
    try {
      await updateData('doc_tasks', taskId, { status: 'Completed' });
      const notifData = {
        officerSender: officer.info.id,
        officerReceiver: '',
        content: `${officer.info.fullName} accomplished a task!`,
        date: new Date().toLocaleDateString(),
      }
      await addData('doc_notification',notifData)
      notification.success({ message: 'Task marked as completed', duration: 2 });
      Fetch();
    } catch (error: any) {
      notification.error({
        message: 'Error',
        description: error.message || 'Failed to update task status',
      });
    }
  };

  return (
    <div>
      <div className='flex flex-wrap gap-8 justify-center items-center my-8'>
        {actionsTask?.map((d: any) => (
          <div
            key={d.label}
            onClick={() => setPage(d.action)}
            className='w-[270px] cursor-pointer flex flex-col gap-4 justify-center items-center h-[140px] bg-gradient-to-b from-[#060E61] to-transparent shadow-[0px_8px_5px_0px_#a0aec0] p-4 rounded-lg'
          >
            <img className='w-[61px] h-[59px]' src={d.icon} alt="" />
            <p className='text-white font-[500]'>{d.label}</p>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center mt-16'>
        {page === 'add' ? (
          <div className='w-[80%] bg-white flex gap-4 flex-wrap p-8 rounded-lg shadow-[0px_8px_5px_0px_#a0aec0]'>
            <Form form={form} onFinish={onFinish} layout='vertical' className='flex gap-4 flex-wrap'>
              <div className='flex-1'>
                <Form.Item label="Task Title" name="tasktitle" rules={[{ required: true, message: 'Task title is required' }]}>
                  <Input placeholder='Task Title' className='w-[500px]' />
                </Form.Item>
                <Form.Item label="Due Date" name="dueDate" rules={[{ required: true, message: 'Due Date is required' }]}>
                  <DatePicker className='w-[500px]' />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Description is required' }]}>
                  <CustomTextEditor classes='w-[500px]' />
                </Form.Item>
              </div>
              <div className='w-[350px] h-full flex flex-col justify-between'>
                <Form.Item label='Assigned to' name='officerId' className='w-full' rules={[{ required: true, message: 'Please select user first!' }]}>
                  <Select
                    options={officer.officers?.map((d: any) => { return { label: d.fullName, value: d.id } })}
                    className='w-full'
                  />
                </Form.Item>
                <div className='flex justify-end items-end'>
                  <CustomButton
                    children='Add Task'
                    loading={loading}
                    htmlType='submit'
                  />
                </div>
              </div>
            </Form>
          </div>
        ) : page === 'list' ? (
          <div className='w-[80%] bg-white p-8 rounded-lg shadow-[0px_8px_5px_0px_#a0aec0]'>
            <h2 className='text-xl font-bold mb-4'>My Tasks</h2>
            <List
              itemLayout="horizontal"
              dataSource={officer.tasks?.filter((task: any) => task.status === 'Pending')}
              renderItem={(item: any) => {
                const details = officer.officers?.find((v: any) => v.id === item.officerId);
                return(
                <List.Item
                  actions={[
                    <Button type="primary" onClick={() => markAsComplete(item.id)}>Mark as Complete</Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar size={50} src={details.profile} />}
                    title={<div><p className='font-[500] '>{item.tasktitle}</p>
                    <div>
                      <p>Assigned to: {details.fullName}</p>
                      <p>Due: {item.dueDate}</p>
                    </div>
                    </div>}
                    description={<div className='text-black mt-4' dangerouslySetInnerHTML={{ __html: item.description }} />}
                  />
                </List.Item>
              )}}
            />
          </div>
        ) : (
          <div className='w-[80%] bg-white p-8 rounded-lg shadow-[0px_8px_5px_0px_#a0aec0]'>
            <h2 className='text-xl font-bold mb-4'>Completed Tasks</h2>
            <List
              itemLayout="horizontal"
              dataSource={officer.tasks?.filter((task: any) => task.status === 'Completed')}
              renderItem={(item: any) => {
                const details = officer.officers?.find((v: any) => v.id === item.officerId);
                return(
                <List.Item
                >
                  <List.Item.Meta
                    avatar={<Avatar size={50} src={details.profile} />}
                    title={<div><p className='font-[500] '>{item.tasktitle}</p>
                    <div>
                      <p>Assigned to: {details.fullName}</p>
                      <p>Due: {item.dueDate}</p>
                    </div>
                    </div>}
                    description={<div className='text-black mt-4' dangerouslySetInnerHTML={{ __html: item.description }} />}
                  />
                  <Badge status="success" text="Completed" />
                </List.Item>
              )}}
            />
          </div>
        )}
      </div>
    </div>
  );
};
