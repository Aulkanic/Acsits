const Endpoints = {
    Login: 'admin/login',
    FetchUsers:'Reports/UserAccounts',
    FETCH_SCHOPROG: 'scholar/schoCat',
    CREATE_SCHOLARSHIP:"scholar/createScho",
    UPDATE_SCHOLARSHIP: 'scholar/UpdateStatus',
    FETCH_RENEWALLIST:'RenewalForm/All',
    CREATE_ACARENEWAL: 'RenewalForm/academicRenewal',
    ALL_USER: 'personalinfo/allUserAccount',
    UPDATE_USERPERSONA: 'personalinfo/update/personal',
    UPDATE_USERSCORE: 'personalinfo/update/score',
    ALL_MYDO: 'admin/MYDO',
    ADDTOMYTASK: 'userProf/Evaluation/AddtomyTask',
    ADDTOAPPOINTMENT: 'Requirements/Assessment/add',
    ALLREQUIREMENTS:'Requirements/fetchAll',
    ADDREQUIREMENTS:'Requirements/add',
    CHECKREQUIREMENTS:'Requirements/check',
    APPLICANT_REQUIREMENTS: 'Requirements/submitted/byApplicant',
    ADDAPPOINTMENT: 'Appointment/Create',
    ALLAPPOINTMENT: 'Appointment/all',
    ALLAPPOINTMENTLISTED: 'Appointment/all/list',
    SETSCORING: 'Appointment/status/applicant',
    NEWSCHOLARADD: 'BMCCScholar/newScholar/add',
    SKLIST: 'admin/SKOfficials',
    ADDSK: 'admin/SKOfficials/add',
    EDITSK: 'admin/SKOfficials/edit',
    DELETESK: 'admin/SKOfficials/delete',
    CCLIST: 'admin/CityCouncils',
    ADDCC: 'admin/CityCouncils/add',
    EDITCC: 'admin/CityCouncils/edit',
    DELETECC: 'admin/CityCouncils/delete',
    ADDNEWS: 'news/create',
    NEWSLIST: 'news/all',
    UPDATENEWS: 'news/update',
    DELETENEWS: 'news/delete',
    ADDSTAFF: 'admin/Staff/add',
    UPDATESTAFF: 'admin/Staff/edit',
    DELETESTAFF: 'admin/Staff/delete',
    USERSLISTPARAMS:'userProf/ALL_USER',
    ASSIGNCASHIER:'payout/assign/cashier',
    ASSIGNSCHEDULE:'payout/assign/schedule',
    PAYOUTLIST:'payout/list',
    SETRECEIVED:'payout/received'
}

export { Endpoints }