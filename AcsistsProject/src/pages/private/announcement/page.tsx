/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import CustomTextEditor from '../../../components/input/customEditor';
import { Avatar, Dropdown, MenuProps, notification } from 'antd';
import useStore from '../../../zustand/store/store';
import { saveAllAnnouncements, saveAllOfficers, selector } from '../../../zustand/store/store.provider';
import { CustomButton } from '../../../components/button/customButton';
import { addData } from '../../../hooks/useAddData';
import { fetchData, fetchDataCondition } from '../../../hooks/useFetchData';
import { SlOptions } from "react-icons/sl";
import { updateData } from '../../../hooks/useUpdateData';
import { deleteData } from '../../../hooks/useDeleteData';
import Swal from 'sweetalert2';

export const AnnouncementPage = () => {
  const officer = useStore(selector('officer'));
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  async function Fetch() {
    const user = await fetchData('doc_users');
    const res = await fetchDataCondition('doc_announcements', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    user.shift()
    saveAllOfficers(user)
    saveAllAnnouncements(res);
  }

  useEffect(() => {
    Fetch();
  }, []);

  const handleAddAnnouncement = async () => {
    try {
      setLoading(true);
      if (!content) {
        notification.error({ message: 'Please fill the content!' });
        setLoading(false);
        return;
      }
      const dataToSend = {
        content: content,
        officerId: officer.info?.id,
        date: new Date().toLocaleDateString(),
      };
      const notifData = {
        officerSender: officer.info.id,
        officerReceiver: '',
        content: 'posted an announcement',
        date: new Date().toLocaleDateString(),
      }
      await addData('doc_announcements', dataToSend);
      await addData('doc_notification',notifData)
      notification.success({ message: 'Announcement added successfully!' });
      setLoading(false);
      setContent('');
      Fetch();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      });
      setLoading(false);
    }
  };

  const handleEditAnnouncement = async () => {
    try {
      setLoading(true);
      if (!editContent) {
        notification.error({ message: 'Please fill the content!' });
        setLoading(false);
        return;
      }
      const dataToUpdate = {
        content: editContent,
        date: new Date().toLocaleDateString(),
      };
      if (editId) {
        await updateData('doc_announcements', editId, dataToUpdate);
      }
      notification.success({ message: 'Announcement updated successfully!' });
      setLoading(false);
      setEditId(null);
      setEditContent('');
      Fetch();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      });
      setLoading(false);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    try {
      await deleteData('doc_announcements', id);
      notification.success({ message: 'Announcement deleted successfully!' });
      Fetch();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again later',
      });
    }
  };

  const showDeleteConfirmation = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteAnnouncement(id);
      }
    });
  };

  const handleEditClick = (id: string, content: string) => {
    setEditId(id);
    setEditContent(content);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditContent('');
  };

  const items = (id: string, content: string): MenuProps['items'] => [
    {
      key: '1',
      label: <p onClick={() => handleEditClick(id, content)}>Edit</p>,
    },
    {
      key: '2',
      label: <p onClick={() => showDeleteConfirmation(id)}>Delete</p>,
    },
  ];
  console.log(officer)
  return (
    <div className='flex flex-col gap-16 items-center justify-top my-12 h-full'>
      <div className='flex gap-8 w-[60%] bg-white shadow-[0px_8px_5px_0px_#a0aec0] p-12 rounded-lg'>
        <div className='w-[150px]'>
          <Avatar src={officer.info?.profile || ''} size={150} />
        </div>
        <div>
          <div className='w-full flex justify-between items-center mb-4'>
            <p className='font-[500]'>{officer.info?.fullName} - {officer.info?.position}</p>
            <CustomButton
              children='Post'
              onClick={handleAddAnnouncement}
              loading={loading}
            />
          </div>
          <CustomTextEditor
            value={content}
            onChange={(value: any) => setContent(value)}
            classes='h-[150px] mb-12'
            placeholder='Write an important announcement here...'
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-8'>
        {officer.announcements?.length > 0 ? 
          officer.announcements?.map((data: any) => {
            const details = officer.officers?.find((v: any) => v.id === data.officerId);
            console.log(details)
            return details ? (
              <div key={data.id} className='w-[400px] bg-white min-h-[300px] shadow-[0px_8px_5px_0px_#a0aec0] p-4 rounded-lg'>
                <div className='flex items-center justify-between pr-4'>
                  <div className='flex items-center gap-4'>
                    <Avatar src={details.profile || ''} size={60} />
                    <p className='font-[500] line-clamp-2'>{details.fullName} - {details.position}</p>
                  </div>
                  <Dropdown trigger={['click']} className='cursor-pointer' menu={{ items: items(data.id, data.content) }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <SlOptions />
                  </Dropdown>
                </div>
                {editId === data.id ? (
                  <div className='mt-4'>
                    <CustomTextEditor
                      value={editContent}
                      onChange={(value: any) => setEditContent(value)}
                      placeholder='Edit your announcement here...'
                    />
                    <div className='flex justify-end gap-2 mt-2'>
                      <CustomButton
                        children='Save'
                        onClick={handleEditAnnouncement}
                        loading={loading}
                      />
                      <CustomButton
                        children='Cancel'
                        onClick={handleCancelEdit}
                      />
                    </div>
                  </div>
                ) : (
                  <div className='text-black mt-4' dangerouslySetInnerHTML={{ __html: data.content }} />
                )}
              </div>
            ) : null;
          })
          :
          <p>No Announcements been made</p>
        }
      </div>
    </div>
  );
};
