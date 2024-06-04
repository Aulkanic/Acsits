/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { fetchData, fetchDataCondition } from '../../../hooks/useFetchData';
import useStore from '../../../zustand/store/store';
import { saveAllAnnouncements, saveAllEvents, saveAllMerchandise, saveAllOfficers, saveAllTasks, selector } from '../../../zustand/store/store.provider';

export const HomePage = () => {
  const officer = useStore(selector('officer'))
  
  async function Fetch() {
    const user = await fetchData('doc_users');
    const announcement = await fetchData('doc_announcements');
    const merchandise = await fetchData('doc_merchandise');
    const task = await fetchDataCondition('doc_tasks', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    const plans = await fetchDataCondition('doc_events', [{ field: "officerId", operator: "==", value: officer.info?.id }]);
    user.shift()
    announcement.shift()
    merchandise.shift()
    saveAllMerchandise(merchandise)
    saveAllOfficers(user)
    saveAllAnnouncements(announcement)
    saveAllTasks(task)
    saveAllEvents(plans)

  }

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div>
      <div>
        <div>
          {/*All announcements displayin swiper slide - used variable officer.announcements*/}
        </div>
        <div>
            {/*All merchandise displayin swiper slide - used variable officer.merchandise*/}
        </div>
        </div>
      <div>
        <div>
          {/*list of plans - used variable officer.events*/}
        </div>
      </div>
      <div>
        <div>
          {/*List of assigned task - used variable officer.tasks*/}
        </div>
        <div>
          {/*list of contact - used variable officer.officers*/}
        </div>
      </div>
    </div>
  )
}
