/* eslint-disable @typescript-eslint/no-explicit-any */

import { type StateCreator } from "zustand/vanilla";
import { T_USER } from "../../../types";


interface OfficerState {
    loading?: boolean;
    info?: T_USER | null;
    officers: any;
    announcements?:any;
    tasks?:any;
    events?:any;
    notification?:any;
    merchandise?:any;
    error?: string | null;
}

export interface OfficerSlice {
    officer: OfficerState;
    saveOfficerInfo: (payload:any) => void;
    saveAllOfficers: (payload:any) => void;
    saveAllAnnouncements: (payload:any) => void;
    saveAllTasks: (payload:any) => void;
    saveAllEvents: (payload:any) => void;
    saveAllNotification: (payload:any) => void;
    saveAllMerchandise: (payload:any) => void;
    signOut: () => void;
}

const initialState: OfficerState = {
    loading: false,
    info: null,
    officers: [],
    events:[],
    tasks:[],
    notification:[],
    announcements:[],
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
    saveAllEvents: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                events: payload,
                loading: false
            },
        }));
    },
    saveAllNotification: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                notification: payload,
                loading: false
            },
        }));
    },
    saveAllMerchandise: (payload:any) =>{
        set((state) => ({
            ...state,
            officer: {
                ...state.officer,
                merchandise: payload,
                loading: false
            },
        }));
    },
    signOut:() =>{
        set({ officer: initialState });
    }
})

export default createOfficerState