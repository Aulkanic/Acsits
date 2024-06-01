import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { 
    createOfficerState
 } from '../slices';
import { type OfficerSlice } from '../slices/officer';


type TAppSlices = OfficerSlice
const useStore = create<TAppSlices>()(
    devtools(
        persist(
            (...args) => ({
                ...createOfficerState(...args),
            }),
            {
                name:'acsists'
            }
        )
    )
)

export default useStore