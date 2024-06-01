/* eslint-disable @typescript-eslint/no-explicit-any */

import { type StateCreator } from "zustand/vanilla";
import { T_USER } from "../../../types";


interface OfficerState {
    loading?: boolean;
    info?: T_USER | null;
    officers: any;
    announcements?:any;
    tasks?:any;
    error?: string | null;
}

export interface OfficerSlice {
    officer: OfficerState;
    saveOfficerInfo: (payload:any) => void;
    saveAllOfficers: (payload:any) => void;
    saveAllAnnouncements: (payload:any) => void;
    saveAllTasks: (payload:any) => void;
}

const initialState: OfficerState = {
    loading: false,
    info: null,
    officers: [],
    error: null
}

const createOfficerState: StateCreator<OfficerSlice> = (set) =>({
    officer: initialState,
    saveOfficerInfo: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                info: payload,
                loading: false
            },
        }));
    },
    saveAllOfficers: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                officers: payload,
                loading: false
            },
        }));
    },
    saveAllAnnouncements: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                announcements: payload,
                loading: false
            },
        }));
    },
    saveAllTasks: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                tasks: payload,
                loading: false
            },
        }));
    },
})

export default createOfficerState