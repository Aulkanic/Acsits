/* eslint-disable @typescript-eslint/no-explicit-any */
import useStore from "./store";
const selector = (key:string) => (state:any) => state[key];
const storeProvider = useStore.getState();
export const{
    saveOfficerInfo,
    saveAllOfficers,
    saveAllAnnouncements,
    saveAllTasks
} = storeProvider

export { selector, storeProvider };