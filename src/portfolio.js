/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abbas's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abbas Ibrahim Portfolio",
    type: "website",
    url: "https:iabbas96.github.io",
  },
};

//Home Page
const greeting = {
  title: "Abbas Ibrahim ",
  logo_name: "AbbasIbrahim",
  // nickname: "Engr. Abbas",
  subTitle:
    "A fullstack developer with a versatile skill set that bridges the gap between astonishing user interfaces and a backend functionality. Always driven by a thirst for knowledge and a desire to grow, I'm constantly learning, honing my skills and expanding my expertise. My deep passion for creating interactive ,responsives designs and also ensuring efficient data handling and server side processes. Feel free to connect with me and lets bring your web projects to life, with an elegance design and fascinating technical excellence.",
  resumeLink:"https://drive.google.com/file/d/1Jfkn24pR2cl_DqQ0eVeZpGXPQWSOH3Z3/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/iabbas96",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/iabbas96",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abbasibrahim/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ibrahimabbas970@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/IAbbas96",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abbas.ibrahim.940",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iabbas96/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development, Languages, Frameworks and Libraries",
      fileName: "FullStackImg",
      skills: [
        "⚡  Building responsive website full stack (Backend/frontend) using JavaScript, NEXT.JS, Typescript. ",
        "⚡  Creating application backend in NodeJS, ExpressJS, Laravel(php)",
        "⚡  Creating full stack applications both independently and with teams using the Github and other tools effectively for collaborations.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Jetstream",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#6875F5",
          },
        },

        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "#CC342D",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#ED8B00",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Shadcn/UI",
          fontAwesomeClassname: "simple-icons:shadcnui",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "simple-icons:mongoose",
          style: {
            color: "#880000",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },

      ],
    },
    {
      title: "Database, AI and Industry Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience with MySQL, SQL, PostgreSQL, Prisma, SQLite3, MongoDB and Mongoose, Neon ",
        "⚡ Completion of a SQL Course Certificate through EntryLevel",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "simple-icons:prisma",
          style: {
            color: "#2D3748",
          },
        },

      ],
    },
    {
      title: "Cloud Infra-Architecture and Other Software",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Experience working on multiple cloud platforms",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "CorelDRAW",
          fontAwesomeClassname: "simple-icons:coreldraw",
          style: {
            color: "#00AF41",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Qwasar Silicon Valley",
      iconifyClassname: "fa6-solid:graduation-cap", 
      style: {
        color: "#2563EB", 
      },
      profileLink: "https://upskill.us.qwasar.io/profile",
    },

    {
      siteName: "Scrimba",
      iconifyClassname: "simple-icons:scrimba",
      style: {
        color: "#2B283A",
      },
      profileLink: "https://scrimba.com/u436e48a", 
    },

    {
      siteName: "EntryLevel",
      // iconifyClassname: "fa6-solid:graduation-cap", 
      // style: {
      //   color: "#2563EB", 
      // },
      iconifyClassname: "fa6-solid:terminal", 
      style: {
        color: "#E21D48", 
      },
      profileLink: "https://app.startwithhex.com/profile#", 
    },
    

    // {
    //   siteName: "Kaduna Polytechnic",
    //   iconifyClassname: "fa6-solid:building-columns", 
    //   style: {
    //     color: "#00703C", 
    //   },
    //   profileLink: "https://kadunapolytechnic.edu.ng/",
    // },




    // {
    //   siteName: "Google Developer Groups",
    //   iconifyClassname: "simple-icons:google", 
    //   style: {
    //     color: "#4285F4",
    //   },
    //   profileLink: "https://google.com",
    // },
    //     {
    //   siteName: "Nigeria Computer Society (NCS)",
    //   iconifyClassname: "fa6-solid:user-tie", 
    //   style: {
    //     color: "#008751",
    //   },
    //   profileLink: "https://ncs.org.ng",
    // },
    // {
    //   siteName: "NACOSS",
    //   iconifyClassname: "fa6-solid:laptop-code", 
    //   style: {
    //     color: "#00693E", 
    //   },
    //   profileLink: "https://nacoss.org.ng", 
    // },


    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
        {
      title: "Qwasar Silicon Valley",
      subtitle: "Certified Software Engineer & Full Stack Developer",
      logo_path: "qwasarLogo2.png",
      alt_name: "Qwasar Silicon Valley",
      duration: "2023 - 2026",
      descriptions: [
        "⚡ Completed a rigorous Software Engineering program designed to Silicon Valley standards, focusing on deep technical proficiency and high-quality code.",
        "⚡ Mastered Full Stack Development by building 20+ production-grade projects, covering everything from memory management in C to scalable web apps in Next.js and Node.js.",
        "⚡ Engaged in intensive peer code reviews and technical interview role-plays, honing the ability to collaborate and communicate complex technical concepts effectively.",
      ],
      website_link: "https://qwasar.io",
    },

    {
      title: "Kaduna Polytechnic",
      subtitle: "HND in Computer Science",
      logo_path: "kadpolyLogo1.png", 
      alt_name: "Kaduna Polytechnic",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Graduated with a Distinction for Higher National Diploma (HND) in Computer Science.",
        "⚡ Developed a strong foundation in core Computer Science principles, including System Analysis and Design, Software Engineering, Compiler Constructions Data Structures and Algorithm (DSA),Object Oriented Programming (OOP), Database Management Systems (DBMS), and Operating Systems.",
        "⚡ Completed intensive coursework and a final year project focused on Enhanced Students Project Allocation and Monitoring System, the demonstrates advanced problem-solving skills through the use of the some programming languages such as Laravel(php), MySQL...",
      ],
      website_link: "https://kadunapoly.edu.ng",
    },

    {
      title: "Kaduna Polytechnic",
      subtitle: "ND in Computer Science",
      logo_path: "kadpolyLogo1.png", 
      alt_name: "Kaduna Polytechnic",
      duration: "2014 - 2016",
      descriptions: [
        "⚡ Graduated with a Distinction for National Diploma (ND) in Computer Science.",
        "⚡ Developed a strong foundation in core Computer Science principles, including Web Development, Data Structures and Algorithm (DSA), Functions and Geometry, Logic and Linear Algebra, Statistics and Probability, Object Oriented Programming (OOP), Database Management Systems (DBMS), and Computer Application Packages.",
        "⚡ Completed intensive coursework and a final year project focused on Students Project Allocation and Monitoring System, the demonstrates advanced problem-solving skills through the use of the some programming languages such as Laravel(php), MySQL...",
      ],
      website_link: "https://kadunapoly.edu.ng",
    },



    // {
    //   title: "Indian Institute of Information Technology Kurno",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "qwasarLogo3.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - 2020",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },

  ],
};

const certifications = {
  certifications: [

    {
      "title": "Introduction to Full Stack Development in Javascript Programming",
      "subtitle": "- Qwasar Silicon Valley",
      "logo_path": "qwasarLogo2.png",
      "certificate_link": "https://upskill.us.qwasar.io/certificates/MTM0Ni1pYnJhaGlfYWJiLWp1bC0yMDIxLTMwLWEyMzQ=",
      "alt_name": "Qwasar Silicon Valley",
      "color_code": "#673AB7"
    },
    {
      "title": "Introduction to Software Engineering in C Programming Level I",
      "subtitle": "- Qwasar Silicon Valley",
      "logo_path": "qwasarLogo2.png",
      "certificate_link": "https://upskill.us.qwasar.io/certificates/MTIwMy1pYnJhaGlfYWJiLW1hci0yMDIxLTExLTNiMjQ=",
      "alt_name": "Qwasar Silicon Valley",
      "color_code": "#673AB7"
    },

    {
      "title": "Full Stack Engineering Programming (including, backend, frontend and database technologies)",
      "subtitle": "- Qwasar Silicon Valley",
      "logo_path": "qwasarLogo2.png",
      "certificate_link": "https://upskill.us.qwasar.io/certificates/MTM1Ni1pYnJhaGlfYWJiLWp1bC0yMDIxLTMwLTQwMjU=",
      "alt_name": "Qwasar Silicon Valley",
      "color_code": "#673AB7"
    },

    {
      "title": "Full Stack Development, Modern React Development with TypeScript Programming, Next.js (including, advanced frontend techniques, backend integration, database technologies )",
      "subtitle": "- Qwasar Silicon Valley",
      "logo_path": "qwasarLogo2.png",
      "certificate_link": "https://upskill.us.qwasar.io/certificates/MTY1My1pYnJhaGlfYWJiLWF1Zy0yMDI1LTMxLWFjYzA=",
      "alt_name": "Qwasar Silicon Valley",
      "color_code": "#673AB7"
    },


    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I have worked as a Fullstack Developer at Smartcode Technologies,specifically with the full stack web development as a team, where we focused on using the following technologies: HTML,CSS,JavaScript,Laravel(php) and MySQL for the database technology. To solve client works, we build alot of full stack websites that meets our client goals and objectives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Fullstack Developer",
          company: "Smartcode Technologies",
          company_url: "https://smartcodetechnologies.com/",
          logo_path: "smartcode-logo.png",
          duration: "October 2023 - Present",
          location: " FF3, Arman Plaza, Unguan Muazu, Kaduna, Nigeria.",
          description:
            "I have worked as a Fullstack Developer at Smartcode Technologies,  where we focused on using the following modern technologies: HTML,CSS,JavaScript,Laravel(php),Jetstream and MySQL for the database technology. to solve client works, we build alot of full stack websites that meets our client goals and objectives.",
          color: "#000000",
        },
        // {
        //   title: "Web Developer",
        //   company: "Dixre Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2023",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Student Software Engineer Experiences",
      experiences: [
        {
          title: "Web Developer",
          company: "Dixre Technology",
          company_url: "https://dixre.com/",
          logo_path: "dixre.png",
          duration: "Jan 2022 - Aug 2023",
          location: "No 8/9 Independence way by Katsina Road, ASD CITY MALL, Kaduna. 4th floor Suite 6D.",
          description:
            "Web Development, Where i gained experience on the following technologies HTML,CSS,Javascript which are the core fundamental of a web developer, also with relevant excercises,reports, meetings and projects.",
          color: "#000000",
        },
        {
          title: "System Administrator and Web Developer",
          company: "Kaduna Refining and Petrochemical Company",
          company_url: "https://www.bpe.gov.ng/kaduna-refining-and-petrochemical-company-krpc/",
          logo_path: "krpc.png",
          duration: "April 2017 - March 2018",
          location: "KM 16, Kachia Road, Kaduna, Kaduna State, Nigeria.",
          description:
            "I have experience on Web Development using the following technologies HTML,CSS and Javascript to create websites and web applications in the software department, I also have experience as a System Administrator where, i help the company to maintain all the various computer system in all the company departments and ensuring they are all working and functioning as expected.",
          color: "#ee3c26",
        },
                {
          title: "System Administrator and Web Developer",
          company: "Kaduna Electric",
          company_url: "https://kadelectric.ng/",
          logo_path: "ke.png",
          duration: "September 2015 - December 2015",
          location: "1-2 Ahmadu Bello Way, Kakuri, Kaduna South, Kaduna State.",
          description:
            "I have experience on Web Development using the following technologies HTML,CSS and Javascript to create websites and web applications in the software department, I also have experience as a System Administrator where, i help the company to maintain all the various computer system in all the company departments and ensuring they are all working and functioning as expected.",
          color: "#ee3c26",
        },

        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have created several projects that makes use of vast variety of latest technology stacks.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abb-ib.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
