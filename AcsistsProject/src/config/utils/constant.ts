const QUILL_FORMATS = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
  ];
  const applicationStatus = {
    ACCOUNTCREATED: "Account Created",
    APPLICATIONSUBMITTED: "Application Submitted",
    ASSESSMENT: "Assessment",
    APPOINTMENT: "Appointment",
    SCORING:'Scoring',
    REJECTED: "Rejected",
    NEW_SCHOLAR: "New Scholar",
    EXISTING_SCHOLAR: "Existing Scholar",
    PENDING_RENEWAL: "Pending Renewal"
}
const appointmentStatus = {
  NOTAPPOINTED: "Not Appointed",
  APPOINTED: "Appointed",
  RESPONDED:  "Responded",
  REAPPOINTED: "Reappointed",
  INTERVIEWED: "Interviewed",
  SCORING: "",
  PASSED: "Passed",
  FAILED: "Failed"
}
  
const QUILL_MODULES = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const cashierList = [
  {label:'Cashier 1', value:1},
  {label:'Cashier 2', value:2},
  {label:'Cashier 3', value:3},
  {label:'Cashier 4', value:4},
  {label:'Cashier 5', value:5},
  {label:'Cashier 6', value:6},
  {label:'Cashier 7', value:7},
  {label:'Cashier 8', value:8},
  {label:'Cashier 9', value:9},
  {label:'Cashier 10', value:10},
]

  const barangayList = [
    { label: 'Please Select Baranggay', value: '', name: "baranggay" },
    { label: 'Abangan Norte', value: 'Abangan Norte', name: "baranggay" },
    { label: 'Abangan Sur', value: 'Abangan Sur', name: "baranggay" },
    { label: 'Ibayo', value: 'Ibayo', name: "baranggay" },
    { label: 'Lambakin', value: 'Lambakin', name: "baranggay" },
    { label: 'Lias', value: 'Lias', name: "baranggay" },
    { label: 'Loma De Gato', value: 'Loma De Gato', name: "baranggay" },
    { label: 'Nagbalon', value: 'Nagbalon', name: "baranggay" },
    { label: 'Patubig', value: 'Patubig', name: "baranggay" },
    { label: 'Poblacion 1', value: 'Poblacion 1', name: "baranggay" },
    { label: 'Poblacion 2', value: 'Poblacion 2', name: "baranggay" },
    { label: 'Prenza 1', value: 'Prenza 1', name: "baranggay" },
    { label: 'Prenza 2', value: 'Prenza 2', name: "baranggay" },
    { label: 'Saog', value: 'Saog', name: "baranggay" },
    { label: 'Sta. Rosa 1', value: 'Sta. Rosa 1', name: "baranggay" },
    { label: 'Sta. Rosa 2', value: 'Sta. Rosa 2', name: "baranggay" },
    { label: 'Tabing Ilog', value: 'Tabing Ilog', name: "baranggay" },
];
const genderList = [
  { label: 'Select your gender', value: '', name: "gender" },
  { label: 'Male', value: 'Male', name: "gender" },
  { label: 'Female', value: 'Female', name: "gender" },
  { label: 'Others', value: 'Others', name: "gender" }, 
];
const yearList = [
  { label: 'Select your year level', value: '', name: "yearLevel" },
  { label: 'Elementary', value: 'Elementary', name: "yearLevel" },
  { label: 'Junior Highschool', value: 'Junior Highschool', name: "yearLevel" },
  { label: 'Senior Highschool', value: 'Senior Highschool', name: "yearLevel" },
  { label: 'College', value: 'College', name: "yearLevel" },
];
const elementaryList = [
  { label: 'Select your grade level', value: '', name: "gradeLevel" },
  { label: 'Grade 1', value: 'Grade 1', name: "gradeLevel" },
  { label: 'Grade 2', value: 'Grade 2', name: "gradeLevel" },
  { label: 'Grade 3', value: 'Grade 3', name: "gradeLevel" },
  { label: 'Grade 4', value: 'Grade 4', name: "gradeLevel" },
  { label: 'Grade 5', value: 'Grade 5', name: "gradeLevel" },
  { label: 'Grade 6', value: 'Grade 6', name: "gradeLevel" },
];
const juniorhighList = [
  { label: 'Select your grade level', value: '', name: "gradeLevel" },
  { label: 'Grade 7', value: 'Grade 7', name: "gradeLevel" },
  { label: 'Grade 8', value: 'Grade 8', name: "gradeLevel" },
  { label: 'Grade 9', value: 'Grade 9', name: "gradeLevel" },
  { label: 'Grade 10', value: 'Grade 10', name: "gradeLevel" },
];
const seniorhighList = [
  { label: 'Select your grade level', value: '', name: "gradeLevel" },
  { label: 'Grade 11', value: 'Grade 11', name: "gradeLevel" },
  { label: 'Grade 12', value: 'Grade 12', name: "gradeLevel" },
];

const collegeList = [
  { label: 'Select your grade level', value: '', name: "gradeLevel" },
  { label: '1st Year', value: '1st Year', name: "gradeLevel" },
  { label: '2nd Year', value: '2nd Year', name: "gradeLevel" },
  { label: '3rd Year', value: '3rd Year', name: "gradeLevel" },
  { label: '4th Year', value: '4th Year', name: "gradeLevel" },
];

const strandList = [
  { label: 'Select your strand', value: '', name: "course" },
  { label: 'Science, Technology, Engineering, and Mathematics (STEM)', value: 'Science, Technology, Engineering, and Mathematics (STEM)', name: "course" },
  { label: 'Humanities and Social Sciences (HUMSS)', value: 'Humanities and Social Sciences (HUMSS)', name: "course" },
  { label: 'Accountancy, Business, and Management (ABM)', value: 'Accountancy, Business, and Management (ABM)', name: "course" },
  { label: 'General Academic Strand (GAS)', value: 'General Academic Strand (GAS)', name: "course" },
  { label: 'Home Economics', value: 'Home Economics', name: "course" },
  { label: 'Agri-Fishery Arts', value: 'Agri-Fishery Arts', name: "course" },
  { label: 'Industrial Arts', value: 'Industrial Arts', name: "course" },
  { label: 'Information and Communications Technology', value: 'Information and Communications Technology', name: "course" }, 
];
const courseListing = [
  { label: 'Select your course', value: '', name: 'course' },
  { label: 'Bachelor of Science in Respiratory Therapy', value: 'Bachelor of Science in Respiratory Therapy', name: 'course' },
  { label: 'Bachelor in Landscape Architecture', value: 'Bachelor in Landscape Architecture', name: 'course' },
  { label: 'Bachelor in Secondary Education Major in Mathematics', value: 'Bachelor in Secondary Education Major in Mathematics', name: 'course' },
  { label: 'Bachelor in Secondary Education Major in Science', value: 'Bachelor in Secondary Education Major in Science', name: 'course' },
  { label: 'Bachelor of Culture and the Arts Education', value: 'Bachelor of Culture and the Arts Education', name: 'course' },
  { label: 'Bachelor of Data Science and Analytics', value: 'Bachelor of Data Science and Analytics', name: 'course' },
  { label: 'Bachelor of Early Childhood Education', value: 'Bachelor of Early Childhood Education', name: 'course' },
  { label: 'Bachelor of Fine Arts', value: 'Bachelor of Fine Arts', name: 'course' },
  { label: 'Bachelor of Library and Information Science', value: 'Bachelor of Library and Information Science', name: 'course' },
  { label: 'Bachelor of Medical Laboratory Science', value: 'Bachelor of Medical Laboratory Science', name: 'course' },
  { label: 'Bachelor of Science in Accountancy', value: 'Bachelor of Science in Accountancy', name: 'course' },
  { label: 'Bachelor of Science in Agribusiness', value: 'Bachelor of Science in Agribusiness', name: 'course' },
  { label: 'Bachelor of Science in Agricultural and Biosystems Engineering', value: 'Bachelor of Science in Agricultural and Biosystems Engineering', name: 'course' },
  { label: 'Bachelor of Science in Agroforestry', value: 'Bachelor of Science in Agroforestry', name: 'course' },
  { label: 'Bachelor of Science in Aircraft Maintenance Technology', value: 'Bachelor of Science in Aircraft Maintenance Technology', name: 'course' },
  { label: 'Bachelor of Science in Applied Mathematics', value: 'Bachelor of Science in Applied Mathematics', name: 'course' },
  { label: 'Bachelor of Science in Applied Physics', value: 'Bachelor of Science in Applied Physics', name: 'course' },
  { label: 'Bachelor of Science in Applied Statistics', value: 'Bachelor of Science in Applied Statistics', name: 'course' },
  { label: 'Bachelor of Science in Architecture', value: 'Bachelor of Science in Architecture', name: 'course' },
  { label: 'Bachelor of Science in Aviation', value: 'Bachelor of Science in Aviation', name: 'course' },
  { label: 'Bachelor of Science in Aviation Technology', value: 'Bachelor of Science in Aviation Technology', name: 'course' },
  { label: 'Bachelor of Science in Biochemistry', value: 'Bachelor of Science in Biochemistry', name: 'course' },
  { label: 'Bachelor of Science in Biology', value: 'Bachelor of Science in Biology', name: 'course' },
  { label: 'Bachelor of Science in Botany', value: 'Bachelor of Science in Botany', name: 'course' },
  { label: 'Bachelor of Science in Business Administration Major in Business Analytics', value: 'Bachelor of Science in Business Administration Major in Business Analytics', name: 'course' },
  { label: 'Bachelor of Science in Business Analytics', value: 'Bachelor of Science in Business Analytics', name: 'course' },
  { label: 'Bachelor of Science in Ceramic Engineering', value: 'Bachelor of Science in Ceramic Engineering', name: 'course' },
  { label: 'Bachelor of Science in Chemical Engineering', value: 'Bachelor of Science in Chemical Engineering', name: 'course' },
  { label: 'Bachelor of Science in Chemistry', value: 'Bachelor of Science in Chemistry', name: 'course' },
  { label: 'Bachelor of Science in Civil Engineering', value: 'Bachelor of Science in Civil Engineering', name: 'course' },
  { label: 'Bachelor of Science in Climate Change', value: 'Bachelor of Science in Climate Change', name: 'course' },
  { label: 'Bachelor of Science in Community Development', value: 'Bachelor of Science in Community Development', name: 'course' },
  { label: 'Bachelor of Science in Computer Engineering', value: 'Bachelor of Science in Computer Engineering', name: 'course' },
  { label: 'Bachelor of Science in Computer Science', value: 'Bachelor of Science in Computer Science', name: 'course' },
  { label: 'Bachelor of Science in Cyber Security', value: 'Bachelor of Science in Cyber Security', name: 'course' },
  { label: 'Bachelor of Science in Disaster Risk Management', value: 'Bachelor of Science in Disaster Risk Management', name: 'course' },
  { label: 'Bachelor of Science in Electrical Engineering', value: 'Bachelor of Science in Electrical Engineering', name: 'course' },
  { label: 'Bachelor of Science in Electronics and Communications Engineering', value: 'Bachelor of Science in Electronics and Communications Engineering', name: 'course' },
  { label: 'Bachelor of Science in Electronics Engineering', value: 'Bachelor of Science in Electronics Engineering', name: 'course' },
  { label: 'Bachelor of Science in Engineering Technology', value: 'Bachelor of Science in Engineering Technology', name: 'course' },
  { label: 'Bachelor of Science in Entertainment and Multimedia Computing', value: 'Bachelor of Science in Entertainment and Multimedia Computing', name: 'course' },
  { label: 'Bachelor of Science in Environmental Planning', value: 'Bachelor of Science in Environmental Planning', name: 'course' },
  { label: 'Bachelor of Science in Environmental Science', value: 'Bachelor of Science in Environmental Science', name: 'course' },
  { label: 'Bachelor of Science in Food Engineering', value: 'Bachelor of Science in Food Engineering', name: 'course' },
  { label: 'Bachelor of Science in Game Development and Animation', value: 'Bachelor of Science in Game Development and Animation', name: 'course' },
  { label: 'Bachelor of Science in Geodetic Engineering', value: 'Bachelor of Science in Geodetic Engineering', name: 'course' },
  { label: 'Bachelor of Science in Geology', value: 'Bachelor of Science in Geology', name: 'course' },
  { label: 'Bachelor of Science in Hospitality Management', value: 'Bachelor of Science in Hospitality Management', name: 'course' },
  { label: 'Bachelor of Science in Human Biology', value: 'Bachelor of Science in Human Biology', name: 'course' },
  { label: 'Bachelor of Science in Human Services', value: 'Bachelor of Science in Human Services', name: 'course' },
  { label: 'Bachelor of Science in Indigenous Peoples Education', value: 'Bachelor of Science in Indigenous Peoples Education', name: 'course' },
  { label: 'Bachelor of Science in Indigenous Peoples Studies', value: 'Bachelor of Science in Indigenous Peoples Studies', name: 'course' },
  { label: 'Bachelor of Science in Industrial Engineering', value: 'Bachelor of Science in Industrial Engineering', name: 'course' },
  { label: 'Bachelor of Science in Industrial Technology', value: 'Bachelor of Science in Industrial Technology', name: 'course' },
  { label: 'Bachelor of Science in Information Systems', value: 'Bachelor of Science in Information Systems', name: 'course' },
  { label: 'Bachelor of Science in Information Technology', value: 'Bachelor of Science in Information Technology', name: 'course' },
  { label: 'Bachelor of Science in Interior Design', value: 'Bachelor of Science in Interior Design', name: 'course' },
  { label: 'Bachelor of Science in Manufacturing Engineering', value: 'Bachelor of Science in Manufacturing Engineering' , name: 'course' },
  { label: 'Bachelor of Science in Marine Biology', value: 'Bachelor of Science in Marine Biology', name: 'course' },
  { label: 'Bachelor of Science in Marine Engineering', value: 'Bachelor of Science in Marine Engineering', name: 'course' },
  { label: 'Bachelor of Science in Marine Transportation', value: 'Bachelor of Science in Marine Transportation', name: 'course' },
  { label: 'Bachelor of Science in Materials Engineering', value: 'Bachelor of Science in Materials Engineering', name: 'course' },
  { label: 'Bachelor of Science in Mathematics', value: 'Bachelor of Science in Mathematics', name: 'course' },
  { label: 'Bachelor of Science in Mechanical Engineering', value: 'Bachelor of Science in Mechanical Engineering', name: 'course' },
  { label: 'Bachelor of Science in Mechatronics Engineering', value: 'Bachelor of Science in Mechatronics Engineering', name: 'course' },
  { label: 'Bachelor of Science in Mechatronics Engineering Technology', value: 'Bachelor of Science in Mechatronics Engineering Technology', name: 'course' },
  { label: 'Bachelor of Science in Medical Technology', value: 'Bachelor of Science in Medical Technology', name: 'course' },
  { label: 'Bachelor of Science in Metallurgical Engineering', value: 'Bachelor of Science in Metallurgical Engineering', name: 'course' },
  { label: 'Bachelor of Science in Meteorology', value: 'Bachelor of Science in Meteorology', name: 'course' },
  { label: 'Bachelor of Science in Midwifery', value: 'Bachelor of Science in Midwifery', name: 'course' },
  { label: 'Bachelor of Science in Mining Engineering', value: 'Bachelor of Science in Mining Engineering', name: 'course' },
  { label: 'Bachelor of Science in Molecular Biology and Biotechnology', value: 'Bachelor of Science in Molecular Biology and Biotechnology', name: 'course' },
  { label: 'Bachelor of Science in Nursing', value: 'Bachelor of Science in Nursing', name: 'course' },
  { label: 'Bachelor of Science in Nutrition and Dietetics', value: 'Bachelor of Science in Nutrition and Dietetics', name: 'course' },
  { label: 'Bachelor of Science in Occupational Therapy', value: 'Bachelor of Science in Occupational Therapy', name: 'course' },
  { label: 'Bachelor of Science in Peace Education', value: 'Bachelor of Science in Peace Education', name: 'course' },
  { label: 'Bachelor of Science in Peace Studies', value: 'Bachelor of Science in Peace Studies', name: 'course' },
  { label: 'Bachelor of Science in Petroleum Engineering', value: 'Bachelor of Science in Petroleum Engineering', name: 'course' },
  { label: 'Bachelor of Science in Physical Therapy', value: 'Bachelor of Science in Physical Therapy', name: 'course' },
  { label: 'Bachelor of Science in Physics', value: 'Bachelor of Science in Physics', name: 'course' },
  { label: 'Bachelor of Science in Production Engineering', value: 'Bachelor of Science in Production Engineering' , name: 'course' },
  { label: 'Bachelor of Science in Radiologic Technology', value: 'Bachelor of Science in Radiologic Technology', name: 'course' },
  { label: 'Bachelor of Science in Renewable Energy', value: 'Bachelor of Science in Renewable Energy', name: 'course' },
  { label: 'Bachelor of Science in Robotics Engineering', value: 'Bachelor of Science in Robotics Engineering', name: 'course' },
  { label: 'Bachelor of Science in Sanitary Engineering', value: 'Bachelor of Science in Sanitary Engineering', name: 'course' },
  { label: 'Bachelor of Science in Social Work', value: 'Bachelor of Science in Social Work', name: 'course' },
  { label: 'Bachelor of Science in Speech-Language Pathology', value: 'Bachelor of Science in Speech-Language Pathology', name: 'course' },
  { label: 'Bachelor of Science in Statistics', value: 'Bachelor of Science in Statistics', name: 'course' },
  { label: 'Bachelor of Science in Structural Engineering', value: 'Bachelor of Science in Structural Engineering', name: 'course' },
  { label: 'Bachelor of Science in Sustainable Energy', value: 'Bachelor of Science in Sustainable Energy', name: 'course' },
  { label: 'Bachelor of Science in Tourism', value: 'Bachelor of Science in Tourism', name: 'course' },
  { label: 'Bachelor of Science in Tourism Management', value: 'Bachelor of Science in Tourism Management', name: 'course' },
  { label: 'Bachelor of Science/Bachelor of Arts in Psychology', value: 'Bachelor of Science/Bachelor of Arts in Psychology', name: 'course' },
  { label: 'Bachelor of Special Needs Education', value: 'Bachelor of Special Needs Education', name: 'course' },
  { label: 'Bachelor of Sports and Exercise Science', value: 'Bachelor of Sports and Exercise Science', name: 'course' },
  { label: 'Doctor of Dental Medicine', value: 'Doctor of Dental Medicine', name: 'course' },
  { label: 'Doctor of Optometry', value: 'Doctor of Optometry', name: 'course' }
]
const fatherEducationOptions = [
  { value: '', label: 'Please select', name: 'fatherEduc' },
  { value: 'No Grade Completed', label: 'No Grade Completed', name: 'fatherEduc' },
  { value: 'Elementary Undergraduate', label: 'Elementary Undergraduate', name: 'fatherEduc' },
  { value: 'Elementary Graduate', label: 'Elementary Graduate', name: 'fatherEduc' },
  { value: 'High School Undergraduate', label: 'High School Undergraduate', name: 'fatherEduc' },
  { value: 'High School Graduate', label: 'High School Graduate', name: 'fatherEduc' },
  { value: 'Post Secondary Undergraduate', label: 'Post Secondary Undergraduate', name: 'fatherEduc' },
  { value: 'Post Secondary Graduate', label: 'Post Secondary Graduate', name: 'fatherEduc' },
  { value: 'College Undergraduate', label: 'College Undergraduate', name: 'fatherEduc' },
  { value: 'College Graduate', label: 'College Graduate', name: 'fatherEduc' },
  { value: 'Post Baccalaureate', label: 'Post Baccalaureate', name: 'fatherEduc' }
];

const motherEducationOptions = [
  { value: '', label: 'Please select', name: 'motherEduc' },
  { value: 'No Grade Completed', label: 'No Grade Completed', name: 'motherEduc' },
  { value: 'Elementary Undergraduate', label: 'Elementary Undergraduate', name: 'motherEduc' },
  { value: 'Elementary Graduate', label: 'Elementary Graduate', name: 'motherEduc' },
  { value: 'High School Undergraduate', label: 'High School Undergraduate', name: 'motherEduc' },
  { value: 'High School Graduate', label: 'High School Graduate', name: 'motherEduc' },
  { value: 'Post Secondary Undergraduate', label: 'Post Secondary Undergraduate', name: 'motherEduc' },
  { value: 'Post Secondary Graduate', label: 'Post Secondary Graduate', name: 'motherEduc' },
  { value: 'College Undergraduate', label: 'College Undergraduate', name: 'motherEduc' },
  { value: 'College Graduate', label: 'College Graduate', name: 'motherEduc' },
  { value: 'Post Baccalaureate', label: 'Post Baccalaureate', name: 'motherEduc' }
];

const relationshipList = [
  { label: 'Please select', value: '', name: 'relationship' },
  { label: 'Mother', value: 'Mother', name: 'relationship' },
  { label: 'Father', value: 'Father', name: 'relationship' },
  { label: 'Legal Guardian', value: 'Legal Guardian', name: 'relationship' },
  { label: 'Stepmother', value: 'Stepmother', name: 'relationship' },
  { label: 'Stepfather', value: 'Stepfather', name: 'relationship' },
  { label: 'Foster Parent', value: 'Foster Parent', name: 'relationship' },
  { label: 'Grandparent', value: 'Grandparent', name: 'relationship' },
  { label: 'Aunt or Uncle', value: 'Aunt or Uncle', name: 'relationship' },
  { label: 'Other Relative', value: 'Other Relative', name: 'relationship' },
  { label: 'Custodian', value: 'Custodian', name: 'relationship' },
  { label: 'Nanny or Caretaker', value: 'Nanny or Caretaker', name: 'relationship' },
  { label: 'Legal Guardian Appointed by Will', value: 'Legal Guardian Appointed by Will', name: 'relationship' },
  { label: 'Guardian Ad Litem', value: 'Guardian Ad Litem', name: 'relationship' },
  { label: 'Family Friend', value: 'Family Friend', name: 'relationship' }
];
const relationshipListwo = [
  { label: 'Please select', value: '', name: 'relationship' },
  { label: 'Legal Guardian', value: 'Legal Guardian', name: 'relationship' },
  { label: 'Stepmother', value: 'Stepmother', name: 'relationship' },
  { label: 'Stepfather', value: 'Stepfather', name: 'relationship' },
  { label: 'Foster Parent', value: 'Foster Parent', name: 'relationship' },
  { label: 'Grandparent', value: 'Grandparent', name: 'relationship' },
  { label: 'Aunt or Uncle', value: 'Aunt or Uncle', name: 'relationship' },
  { label: 'Other Relative', value: 'Other Relative', name: 'relationship' },
  { label: 'Custodian', value: 'Custodian', name: 'relationship' },
  { label: 'Nanny or Caretaker', value: 'Nanny or Caretaker', name: 'relationship' },
  { label: 'Legal Guardian Appointed by Will', value: 'Legal Guardian Appointed by Will', name: 'relationship' },
  { label: 'Guardian Ad Litem', value: 'Guardian Ad Litem', name: 'relationship' },
  { label: 'Family Friend', value: 'Family Friend', name: 'relationship' }
];

const applicationFormContent = [
  {
      questions:'Saan ka Nakatira?',
      choices:[
          {values:'Subdivision',label:'Subdivision'},
          {values:'Sitio/Purok',label:'Sitio/Purok'},
          {values:'Depressed Area',label:'Depressed Area'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'Gaano na katagal?',
      choices:[
          {values:'6 na buwan',label:'6 na buwan'},
          {values:'1-2 taon',label:'1-2 taon'},
          {values:'3-4 taon',label:'3-4 taon'},
          {values:'Mahigit 5 taon',label:'Mahigit 5 taon'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'Buwanang Kabuuang kita ng pamilya',
      choices:[
          {values:'P1,000-4,000',label:'P1,000-4,000'},
          {values:'P5,000-8,000',label:'P5,000-8,000'},
          {values:'P9,000-12,000',label:'P9,000-12,000'},
          {values:'P13,000-18,000',label:'P13,000-18,000'},
          {values:'P19,000-Pataas',label:'P19,000-Pataas'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'Paano natutustusan ang iyong pag-aaral?',
      choices:[
          {values:'Suporta ng Magulang',label:'Suporta ng Magulang'},
          {values:'Working Student',label:'Working Student'},
          {values:'Sponsorship',label:'Sponsorship'},
          {values:'Suporta ng Kamag-anak o Kapatid',label:'Suporta ng Kamag-anak o Kapatid'},
          {values:'Scholarship',label:'Scholarship'},
      ],
      type:'checkbox',
      required:true,
      percent: 10
  },
  {
      questions:'Ilan ang miyembro ng pamilya?',
      choices:[
          {values:'11 - Pataas',label:'11 - Pataas'},
          {values:'7 - 10 miyembro',label:'7 - 10 miyembro'},
          {values:'4 - 6 miyembro',label:'4 - 6 miyembro'},
          {values:'1 - 3 miyembro',label:'1 - 3 miyembro'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'Uri ng Paaralan',
      choices:[
          {values:'Private',label:'Private'},
          {values:'Public',label:'Public'},
          {values:'ALS',label:'ALS'},
          {values:'Private(Scholarship, Voucher, Sponsored)',label:'Private(Scholarship, Voucher, Sponsored)'},
          {values:'Public(Scholarship, Voucher, Sponsored)',label:'Public(Scholarship, Voucher, Sponsored)'},
          {values:'Out of School Children',label:'Out of School Children'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'General Weighted Average',
      choices:[
          {values:'96-100',label:'96-100'},
          {values:'91-95',label:'91-95'},
          {values:'86-90',label:'86-90'},
          {values:'81-85',label:'81-85'},
          {values:'80-below',label:'80-below'},
      ],
      type:'radio',
      required:true,
      percent: 10
  },
  {
      questions:'Academic Scholarship(Elementary & Highschool)',
      choices:[
          {values:'With Honors',label:'With Honors'},
          {values:'With Higher Honors',label:'With Higher Honors'},
          {values:'With Highest Honors',label:'With Highest Honors'},
      ],
      type:'checkbox',
      required:true,
      percent: 10
  },
  {
      questions:'Ikaw ba ay nabibilang sa mga sumusunod?',
      choices:[
          {values:'Anak ng Solo Parent',label:'Anak ng Solo Parent'},
          {values:'Out of school children',label:'Out of school children'},
          {values:'Person with Disability',label:'Person with Disability'},
          {values:'Working Student',label:'Working Student'},
          {values:'Special Child',label:'Special Child'},
          {values:'Biktima ng Pang-aabuso',label:'Biktima ng Pang-aabuso'},
      ],
      type:'checkbox',
      required:true,
      percent: 10
  },
  {
      questions:'Ang iyong magulang ba ay nabibilang sa mga sumusunod?',
      choices:[
          {values:'Miyembro ng 4Ps',label:'Miyembro ng 4Ps'},
          {values:'OFW',label:'OFW'},
          {values:'Kasambahay',label:'Kasambahay'},
          {values:'Senior Citizen',label:'Senior Citizen'},
          {values:'May malalang karamdaman',label:'May malalang karamdaman'},
          {values:'PWD',label:'PWD'},
      ],
      type:'checkbox',
      required:true,
      percent: 10
  },

]

  export {
    QUILL_FORMATS,
    QUILL_MODULES,
    applicationStatus,
    barangayList,
    genderList,
    yearList,
    elementaryList,
    juniorhighList,
    seniorhighList,
    collegeList,
    strandList,
    courseListing,
    fatherEducationOptions,
    motherEducationOptions,
    relationshipList,
    relationshipListwo,
    applicationFormContent,
    appointmentStatus,
    cashierList
  };
  