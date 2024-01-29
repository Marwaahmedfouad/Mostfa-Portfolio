import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/certificate1.png';
  import Work2 from './assets/certificate2.png';
  import Work3 from './assets/certificate3333.jpeg';
  import Work4 from './assets/certificate4.png';
  import Work5 from './assets/certificate55555.png';
  import Work6 from './assets/frontend_certificate.png';
  import Work7 from './assets/certificate6.png';
  import Work8 from './assets/digital_transformation.png';
  import Work9 from './assets/nasa_certificate.jpg';
  import Work10 from './assets/uxcertificate.png';
  import Work11 from './assets/Niras_certificate_full.png';
  import Work12 from './assets/certificate7.jpg';
  import Certificate1 from './assets/img1.jpeg';
  import Certificate2 from './assets/img2.jpeg';
  import Certificate3 from './assets/img6.jpeg';
  import Certificate4 from './assets/img4.jpeg';

  

  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Mostafa ',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Essam',
    },
  
    // {
    //   id: 3,
    //   title: 'Age : ',
    //   description: '29 Years',
    // },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Egyption',
    },
  
    // {
    //   id: 5,
    //   title: 'Freelance : ',
    //   description: 'Available',
    // },
  
    
    {
      id: 7,
      title: 'Phone : ',
      description: '+01004923915',
    },
  
    // {
    //   id: 9,
    //   title: 'Skype : ',
    //   description: 'steve.milner',
    // },
  
    
    {
      id: 6,
      title: 'Address : ',
      description: 'Gesr Swiss, Cairo, Egypt',
    },
    {
      id: 10,
      title: 'Langages : ',
      description: 'Arabic, English',
    },
      
    {
      id: 8,
      title: 'Email : ',
      description: 'mostafageo2009@gmail.com      ',
    },
  
  ];
  
  export const stats = [
    {
      id: 1,
      no: '2+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '6+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '8+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '12+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Sep 2023 ~ Present',
      // title: 'TRAINING MANAGER      ',
      title: 'PROJECT MANAGER <span> ABM Al-Olaian Group</span>',
      desc:`SPGA Violation observation Center establishment
      `,
      item1:` - Architecting & developing GIS& Remote Sensing Solution for automated Violation detection Model Using ERDAS Imagine.`,
      item2:`- Technical/ business management, Generating systematic workflow for better Digital Transformation process.`,
      // img:Work2
    },
    
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2019 - 2020',
      title: 'PROJECT MANAGER  <span> Spectrum for information systems </span>',
      desc:'DIGITAL TRANSFORMATION PROJECT FOR THE EGYPTIAN ENDOWMENT AUTHORITY (AWQAF) AND ITS AFFILIATED REGIONS',
      item1:'- Architecting & developing GIS/Workflow Enterprise solution (GIS/DB integration).      ',
      item2:'- Technical/ business management, Generating systematic workflow for better Digital Transformation process.',
      item3:'-  Development activities reviewing and checking and reviewing the plan backlog.      ',
      item4:'-  direct, manage and motivate the project team in the client side & Assign tasks.      ',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2017 - 2018',
      title: 'REMOTE SENSING ANALYST      ',
      desc:'niras has conclude with european union delegation to egypt an agreement (main contract) for implementing the field crop mapping project. support the ongoing operations of the wau, working side by side with the planning sector staff to produce especially accurate crop maps for the delta.'   
     },
  
    {
      id: 4,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2016',
      title: 'DB ADMINISTRATOR      ',
      desc:'creating unified safe schemas for ensdi project on postgresql & postgis, designing and applying required development. creating database diagrams, strategies for a unified database schema. implementing, developing spatial database configuration, and managing permissions levels for stagging and database security. monitoring and improving database performance, capacity, load-balancing abilities for further expansion requirements.      '
    },
    {
      id: 5,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2016',
      title: 'REMOTE SENSING CERTIFIED INSTRUCTOR      ',
      desc:'information technology institute, egyptian ministry of communications. preparing, designing remote sensing materials for iti institute students.lecturing both theoretical & practical remote sensing using erdas imagine.'
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2009',
      // title: 'Bachelor of Arts "Geography"',
      title: 'Bachelor of Arts "Geography" <span>Ain Shams university </span>',
      // desc: 'Grade: Good',
      item1: 'Grade: Good',
    },
  
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'Postgraduate GIS Diploma <span> Ain Shams university   </span>',
      item1: `Grade: Excellent 
      Project: Urban Growth Change Detection K.Elsheikh Governorate`,
      // desc: `Grade: Excellent 
      // Project: Urban Growth Change Detection K.Elsheikh Governorate`,
    },
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: ' Premaster in Applied GIS/RS <span> Cairo university       </span>',
      // desc: 'Grade: Very Good      ',
      item1: 'Grade: Very Good      ',
    },
    {
      id: 9,
      category: 'education',
      icon: <FaGraduationCap />,
      year: 'Started 2022',
      title: ' Master’s Degree Preparation ',
      // desc: 'Faculty of African postgraduate "Geography Department" using Geospatial DB, GIS, and RS',
      item1: 'Faculty of African postgraduate "Geography Department" using Geospatial DB, GIS, and RS',
    },
    {
      id: 10,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: 'Data Analysis<span> UDACITY NANODEGREE      </span>',
      // desc: 'Period 4 Months | Finished 3 projects Specialized in Data Analysis, Functions, Python Libs',
      item1: 'Period 4 Months | Finished 3 projects Specialized in Data Analysis, Functions, Python Libs',
    },
    {
      id: 11,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021      ',
      title: ' FrontEnd Web Development <span> UDACITY NANODEGREE    </span>',
      // desc: 'Period 4 Months | Finished 3 projects Specialized in JS Functions, Restful API’s, node JS',
      item1: 'Period 4 Months | Finished 3 projects Specialized in JS Functions, Restful API’s, node JS',
    },
    {
      id: 12,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022      ',
      title: ' Advanced UX Design <span> UDACITY NANODEGREE    </span>',
      // desc: 'Period 4 Months | Finished 7 projects Specialized in Prototypes, Design/Managing Apps',
      item1: 'Period 4 Months | Finished 7 projects Specialized in Prototypes, Design/Managing Apps',
    },
    {
      id: 13,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022      ',
      title: ' CANADIAN SAR APPLICATION  <span> EO COLLEGE      </span>',
      // desc: 'Period 16 Days Specialized in Remote Sensing SAR Data processing.',
      item1: 'Period 16 Days Specialized in Remote Sensing SAR Data processing.',
    },
  ];
  export const Certificate = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Jan 2021  ',
      // title: 'TRAINING MANAGER      ',
      title: 'Edge-Pro Best employee 2021 ',
      // desc:`Certificate for being effective and productive during my journey of work in Edge-Pro as Remote Sensing Analyst & GIS Solution architect. `,
      item1:` Certificate for being effective and productive during my journey of work in Edge-Pro as Remote Sensing Analyst & GIS Solution architect.`,
      // item2:`- Technical/ business management, Generating systematic workflow for better Digital Transformation process.`,
      img:Certificate1
    },
    
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'May 2021      ',
      title: 'SDI Apprectiantion certificate      <span> Spectrum for information systems </span>',
      // desc:'DIGITAL TRANSFORMATION PROJECT FOR THE EGYPTIAN ENDOWMENT AUTHORITY (AWQAF) AND ITS AFFILIATED REGIONS',
      item1:' Awarded from General manager of armed forces surveying authority for being creative contributor in achieving the best practice in SDI Project as GIS Application team leader & Spatial Database Administrator.       ',
      // item2:'- Technical/ business management, Generating systematic workflow for better Digital Transformation process.',
      // item3:'-  Development activities reviewing and checking and reviewing the plan backlog.      ',
      // item4:'-  direct, manage and motivate the project team in the client side & Assign tasks.      ',
      img:Certificate2
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Aug 2023      ',
      title: 'M.I.A Acedmy      ',
      // desc:'niras has conclude with european union delegation to egypt an agreement (main contract) for implementing the field crop mapping project. support the ongoing operations of the wau, working side by side with the planning sector staff to produce especially accurate crop maps for the delta.'   ,
       item2:'Awarded from General manager of MIA Academy for being an instructor of GIS/Remote sensing for more than 3 years to the students and being effective in raising GIS/RS awareness between academy’s students.       ',
       img:Certificate3
       
      },
      
      {
        id: 4,
        category: 'experience',
        icon: <FaBriefcase />,
        year: 'Oct 2022        ',
        title: 'NASA Space App Apprectiation      ',
        item2:'Awarded from NASA Space App Program for my participation giving GIS/Remote sensing Lecture for NASA participants as a contribution in multiverse edition of NASA competition.        ',
      //  desc:'creating unified safe schemas for ensdi project on postgresql & postgis, designing and applying required development. creating database diagrams, strategies for a unified database schema. implementing, developing spatial database configuration, and managing permissions levels for stagging and database security. monitoring and improving database performance, capacity, load-balancing abilities for further expansion requirements.      ',
      img:Certificate4
    },
    {
      id: 5,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2016',
      title: 'REMOTE SENSING CERTIFIED INSTRUCTOR      ',
      desc:'information technology institute, egyptian ministry of communications. preparing, designing remote sensing materials for iti institute students.lecturing both theoretical & practical remote sensing using erdas imagine.',
      img:Work5
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2009',
      // title: 'Bachelor of Arts "Geography"',
      title: 'Bachelor of Arts "Geography" <span>Ain Shams university </span>',
      // desc: 'Grade: Good',
      item1: 'Grade: Good',
      img:Work6

    },
  
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'Postgraduate GIS Diploma <span> Ain Shams university   </span>',
      item1: `Grade: Excellent 
      Project: Urban Growth Change Detection K.Elsheikh Governorate`,
      // desc: `Grade: Excellent 
      // Project: Urban Growth Change Detection K.Elsheikh Governorate`,
      img:Work7

    },
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: ' Premaster in Applied GIS/RS <span> Cairo university       </span>',
      // desc: 'Grade: Very Good      ',
      item1: 'Grade: Very Good      ',
      img:Work8

    },
    {
      id: 9,
      category: 'education',
      icon: <FaGraduationCap />,
      year: 'Started 2022',
      title: ' Master’s Degree Preparation ',
      // desc: 'Faculty of African postgraduate "Geography Department" using Geospatial DB, GIS, and RS',
      item1: 'Faculty of African postgraduate "Geography Department" using Geospatial DB, GIS, and RS',
      img:Work9

    },
    {
      id: 10,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: 'Data Analysis<span> UDACITY NANODEGREE      </span>',
      // desc: 'Period 4 Months | Finished 3 projects Specialized in Data Analysis, Functions, Python Libs',
      item1: 'Period 4 Months | Finished 3 projects Specialized in Data Analysis, Functions, Python Libs',
      img:Work2

    },
    {
      id: 11,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021      ',
      title: ' FrontEnd Web Development <span> UDACITY NANODEGREE    </span>',
      // desc: 'Period 4 Months | Finished 3 projects Specialized in JS Functions, Restful API’s, node JS',
      item1: 'Period 4 Months | Finished 3 projects Specialized in JS Functions, Restful API’s, node JS',
      img:Work2

    },
    {
      id: 12,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022      ',
      title: ' Advanced UX Design <span> UDACITY NANODEGREE    </span>',
      // desc: 'Period 4 Months | Finished 7 projects Specialized in Prototypes, Design/Managing Apps',
      item1: 'Period 4 Months | Finished 7 projects Specialized in Prototypes, Design/Managing Apps',
      img:Work2

    },
    {
      id: 13,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2022      ',
      title: ' CANADIAN SAR APPLICATION  <span> EO COLLEGE      </span>',
      // desc: 'Period 16 Days Specialized in Remote Sensing SAR Data processing.',
      item1: 'Period 16 Days Specialized in Remote Sensing SAR Data processing.',
      img:Work2

    },
  ];
  export const skills = [
    {
      id: 1,
      title: 'Project Manager',
      percentage: '90',
    },
  
    {
      id: 2,
      title: 'Software Development',
      percentage: '90',
    },
   
    {
      id: 3,
      title: 'Solution Architecture',
      percentage: '75',
    },
    {
      id: 4,
      title: 'Problem Solving',
      percentage: '90',
    },
  
    {
      id: 5,
      title: 'Communication ',
      percentage: '90',
    },
  
    {
      id: 6,
      title: 'Leadership',
      percentage: '90',
    },
  
    {
      id: 7,
      title: 'AI in Remote Sensing',
      percentage: '80',
    },
    {
      id: 8,
      title: 'Remote Sensing',
      percentage: '95',
    },
    {
      id: 9,
      title: 'Presentaion',
      percentage: '90',
    },
  
    {
      id: 10,
      title: 'Spatial Modeling',
      percentage: '90',
    },
    {
      id: 11,
      title: 'Business Analysis',
      percentage: '70',
    },
    {
      id: 12,
      title: 'Training',
      percentage: '90',
    },
    {
      id: 13,
      title: 'ArcGIS Products',
      percentage: '95',
    },
    {
      id: 14,
      title: 'Business  Analysis',
      percentage: '80',
    },
    {
      id: 15,
      title: 'SQL Database',
      percentage: '70',
    },
    {
      id: 16,
      title: 'Quality Assurance',
      percentage: '70',
    },
    {
      id: 17,
      title: 'ArcGIS Server',
      percentage: '70',
    },
    {
      id: 18,
      title: ' Python',
      percentage: '50',
    },
    {
      id: 19,
      title: ' .Net Framework',
      percentage: '60',
    },
    {
      id: 20,
      title: 'Excel',
      percentage: '90',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'TRAINING MANAGER      ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
          // icon: <FaCode />,
          // title: 'Language : ',
          // desc: 'TRAINING MANAGER  ',
        // },
        // {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'https://marwaahmedfouad.github.io/E-commerce/#/login',
        // },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: ' GIS DEVELOPMENT TEAM LEADER-EGYPTIAN NSDI ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: 'Native (HTML , CSS)',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: ' REMOTE SENSING ANALYST      ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: 'React Native ',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'DB ADMINISTRATOR      ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS',
        // },
        // {
        //   icon: <FiExternalLink />,
        //   title: 'Preview : ',
        //   desc: 'www.dribble.com',
        // },
      ],
    },
     {
      id: 8,
      img: Work8,
      title: 'nasa_certificate  ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
    {
      id: 9,
      img: Work9,
      title: 'digital_transformation ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
    {
      id: 10,
      img: Work10,
      title: 'ux certificate  ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        // {
        //   icon: <FiExternalLink />,
        //   title: 'Preview : ',
        //   desc: 'www.dibble.com',
        // },
      ],
    },
   
  
    {
      id: 6,
      img: Work6,
      title: 'frontend_certificate  ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
    {
      id: 7,
      img: Work7,
      title: 'data_analysis_certificate  ',
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
    {
      id: 5,
      img: Work5,
      title: 'REMOTE SENSING CERTIFIED INSTRUCTOR      ',
      details: [
        // {
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   title: 'Language : ',
        //   desc: 'React Native',
        // },
        // {
        //   title: 'Preview : ',
        //   desc: 'www.dribble.com',
        // },
      ],
    },
    // {
    //   id: 11,
    //   img: Work11,
    //   title: 'REMOTE SENSING CERTIFIED INSTRUCTOR      ',
    //   details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        // {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
    //     },
    //   ],
    // },
    // {
    //   id: 12,
    //   img: Work12,
    //   title: 'REMOTE SENSING CERTIFIED INSTRUCTOR      ',
    //   details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        // {
        //   icon: <FaCode />,
        //   title: 'Language : ',
        //   desc: ' React JS , Mapp',
        // },
        // {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
    //     },
    //   ],
    // },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  