/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axios";
import { Endpoints } from "./endpoint";

// POST
export const AdminLogin = {
    POST: (data:any) => axiosInstance.post(Endpoints.Login,data)
}
export const addScholarshipProg = {
    POST: (data:any) => axiosInstance.post(Endpoints.CREATE_SCHOLARSHIP,data)
}
export const addAcademicYear ={
    POST: (data:any) => axiosInstance.post(Endpoints.CREATE_ACARENEWAL,data)
}
export const addTomyTaskEvaluation ={
    POST: (data:any) => axiosInstance.post(Endpoints.ADDTOMYTASK,data)
}
export const addToAppointment ={
    POST: (data:any) => axiosInstance.post(Endpoints.ADDTOAPPOINTMENT,data)
}
export const addRequirements = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDREQUIREMENTS,data)
}
export const AllApplicantsRequirements = {
    POST: (data:any) => axiosInstance.post(Endpoints.APPLICANT_REQUIREMENTS,data)
}
export const CreateAppointmentSchedule = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDAPPOINTMENT,data)
}
export const SetNewScholars = {
    POST: (data:any) => axiosInstance.post(Endpoints.NEWSCHOLARADD,data)
}
export const AddSkOfficials = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDSK,data)
}
export const AddCityCouncils = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDCC,data)
}
export const AddNews = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDNEWS,data)
}
export const AddStaff = {
    POST: (data:any) => axiosInstance.post(Endpoints.ADDSTAFF,data)
}
export const AssingCashier = {
    POST: (data:any) => axiosInstance.post(Endpoints.ASSIGNCASHIER,data)
}
export const AssingSchedulePay = {
    POST: (data:any) => axiosInstance.post(Endpoints.ASSIGNSCHEDULE,data)
}


//GET
export const AllScholarshipProgram = {
    GET: () => axiosInstance.get(Endpoints.FETCH_SCHOPROG)
}
export const AllRenewalList = {
    GET:() => axiosInstance.get(Endpoints.FETCH_RENEWALLIST)
}
export const AllUserAccount = {
    GET:() => axiosInstance.get(Endpoints.ALL_USER)
}
export const AllMYDOstaff = {
    GET:() => axiosInstance.get(Endpoints.ALL_MYDO)
}
export const AllRequirements = {
    GET:() => axiosInstance.get(Endpoints.ALLREQUIREMENTS)
}
export const AllAppointment = {
    GET:() => axiosInstance.get(Endpoints.ALLAPPOINTMENT)
}
export const AllAppointmentListed = {
    GET:() => axiosInstance.get(Endpoints.ALLAPPOINTMENTLISTED)
}
export const SKOfficialsList = {
    GET:() => axiosInstance.get(Endpoints.SKLIST)
}
export const CityCouncilsList = {
    GET:() => axiosInstance.get(Endpoints.CCLIST)
}
export const NewsList = {
    GET:() => axiosInstance.get(Endpoints.NEWSLIST)
}
export const ALLuserBasedonInfo = {
    GET:(detailsFor:any) => axiosInstance.get(`${Endpoints.USERSLISTPARAMS}/${detailsFor}`)
}
export const ALLPayoutList = {
    GET:() => axiosInstance.get(Endpoints.PAYOUTLIST)
}


//UPDATE
export const editScholarshipProg = {
    UPDATE: (data:any) => axiosInstance.patch(Endpoints.UPDATE_SCHOLARSHIP,data)
}
export const checkApplicantRequirements = {
    UPDATE: (data:any) => axiosInstance.put(Endpoints.CHECKREQUIREMENTS,data)
}
export const updatePersonalInformation = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.UPDATE_USERPERSONA}/${data?.get('accountId')}`,data)
}
export const updateApplicantProgress = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.SETSCORING}/${data?.get('accountId')}`,data)
}
export const updateApplicantScoreProgress = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.UPDATE_USERSCORE}/${data?.get('accountId')}`,data)
}
export const updateSkOfficials = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.EDITSK}/${data?.get('id')}`,data)
}
export const updateCityCouncils = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.EDITCC}/${data?.get('id')}`,data)
}
export const updateNews = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.UPDATENEWS}/${data?.get('id')}`,data)
}
export const updateStaff = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.UPDATESTAFF}/${data?.get('id')}`,data)
}
export const SetReceived = {
    UPDATE: (data:any) => axiosInstance.put(`${Endpoints.SETRECEIVED}/${data?.get('accountId')}`,data)
}


//DELETE
export const deleteSKOfficials = {
    DELETE:(data:any)=>axiosInstance.delete(`${Endpoints.DELETESK}/${data?.get('id')}`,{data})
}
export const deleteCityCouncils = {
    DELETE:(data:any)=>axiosInstance.delete(`${Endpoints.DELETECC}/${data?.get('id')}`,{data})
}
export const deleteNews = {
    DELETE:(data:any)=>axiosInstance.delete(`${Endpoints.DELETENEWS}/${data?.get('id')}`,{data})
}
export const deleteStaff = {
    DELETE:(data:any)=>axiosInstance.delete(`${Endpoints.DELETESTAFF}/${data?.get('id')}`,{data})
}