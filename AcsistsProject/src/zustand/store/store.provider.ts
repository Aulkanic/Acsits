/* eslint-disable @typescript-eslint/no-explicit-any */
import useStore from "./store";
const selector = (key:string) => (state:any) => state[key];
const storeProvider = useStore.getState();
export const{
    saveOfficerInfo,
    saveAllOfficers,
    saveAllAnnouncements,
    saveAllTasks,
    saveAllEvents,
    saveAllNotification,
    signOut
} = storeProvider

export { selector, storeProvider };