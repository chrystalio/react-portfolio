/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi There! 👋🏻",
  title2: "Kristoff",
  logo_name: "Kristoff",
  nickname: "Kristoff",
  full_name: "Chrystalio (Kristoff)",
  subTitle:
    "As a computer science student and full-time programmer, I spend most of my time staring at a screen and mumbling about bugs and syntax errors. So, that's me, I'm basically a human caffeine-fueled robot who can survive on coffee or energy drinks alone.",
  resumeLink:
    "https://drive.google.com/file/d/1yU-j_71Xe0pPkGQU1xifQ-ZWAe4CCgr7/view",
  mail: "mailto:chrystalio.k@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/chrystalio",
  linkedin: "https://www.linkedin.com/in/chrystalio/",
  telegram: "https://t.me/kristoffid",
  gmail: "chrystalio.k@outlook.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS, TailwindCSS and NextJS",
        "⚡ Backend development using NodeJS, ExpressJS, HapiJS and Laravel",
      ],
      softwareSkills: [
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Tailwind-CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
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
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Technology Batam",
      subtitle: "👨‍💻 Computer Science",
      logo_path: "logo-iteba.png",
      alt_name: "ITEBA",
      duration: "2021 - Current",
      descriptions: [
        "⚡ Just Trying to Graduate. :)",
      ],
      website_link: "https://www.iteba.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Junior Web Developer VSGA Digital Talent Scholarship 2021",
      subtitle: "Kominfo",
      logo_path: "kominfo.png",
      certificate_link:
        "#",
      alt_name: "KOMINFO",
      color_code: "#EAEDF0",
    },
    {
      title: "BPJS KESEHATAN HEALTHKATHON 2022",
      subtitle: "BPJS Kesehatan",
      logo_path: "bpjs.png",
      certificate_link:
        "https://drive.google.com/file/d/1yU-j_71Xe0pPkGQU1xifQ-ZWAe4CCgr7/view",
      alt_name: "BPJS Kesehatan",
      color_code: "#F6F4EB", // Green: #0C9D58, Blue: #1AA0DC, Orange: #FF9900
    },
    {
      title: "Vocational School Graduate Academy | DTS 2021 ",
      subtitle: "Kominfo",
      logo_path: "kominfo.png",
      certificate_link:
        "#",
      alt_name: "BPJS Kesehatan",
      color_code: "#EAEDF0", // Green: #0C9D58, Blue: #1AA0DC, Orange: #FF9900
    },
    {
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
      subtitle: "Dicoding",
      logo_path: "dicoding.png",
      certificate_link: "https://www.dicoding.com/certificates/L4PQ67WL7PO1",
      alt_name: "dicoding",
      color_code: "#2D3E50",
    },
    {
      title: "Responsive Web Design",
      subtitle: "FreeCodeCamp",
      logo_path: "fcc_primary_small.png",
      certificate_link: "https://www.freecodecamp.org/certification/chrystalio_kie/responsive-web-design",
      alt_name: "fcc",
      color_code: "#0A0A23",
    },
    {
      title: "Cloud Practicioner Essentials (Belajar Dasar AWS Cloud)",
      subtitle: "Dicoding",
      logo_path: "dicoding.png",
      certificate_link: "https://www.dicoding.com/certificates/MRZMQRKVNPYQ",
      alt_name: "dicoding",
      color_code: "#2D3E50",
    },
    {
      title: "Belajar Dasar Manajemen Proyek",
      subtitle: "Dicoding",
      logo_path: "dicoding.png",
      certificate_link: " ",
      alt_name: "dicoding",
      color_code: "#2D3E50",
    },
    {
      title: "Ready Set Code Angkatan II",
      subtitle: "Progate x Kominfo",
      logo_path: "progate.svg",
      certificate_link: "#",
      alt_name: "google",
      color_code: "#F6F4EB",
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      subtitle: "Dicoding",
      logo_path: "dicoding.png",
      certificate_link: "https://www.dicoding.com/certificates/1OP857YR1PQK",
      alt_name: "dicoding",
      color_code: "#2D3E50",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Here are some of the companies that I've worked with",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Web Developer",
          company: "Yayasan Vitka",
          company_url: "https://vitka.id/",
          logo_path: "yv.png",
          duration: "July 2022 - Ongoing",
          location: "Batam, Indonesia",
          description:
            "Working as a fullstack web developer. My job is to develop and maintain the company's project website applications.",
          color: "#F6F4EB",
        },
        {
          title: "Freelance Web Developer",
          company: "PT Kim Seah Shipyard Indonesia",
          company_url: "http://www.penguin.com.sg/",
          logo_path: "kim.jpg",
          duration: "November 2022",
          location: "Batam, Indonesia",
          description:
            "Working on a project to create a random generator prize website for the company's anniversary.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Internship",
          company: "PT. Alusteel Engineering Indonesia",
          company_url: "#",
          logo_path: "alusteel.png",
          duration: "January 2020 - March 2020",
          location: "Batam, Indonesia",
          description:
            "Working as IT Support.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I've had the pleasure of working on a variety of interesting projects. Take a look at some of my favorites below. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kris.jpg",
    description:
      "Ready to rock and roll? I'm all ears for your cool ideas, exciting projects, or even if you just want to chat about the latest cat memes. Don't hesitate to reach out!",
  },
};

const projects = {
  data: [
    {
      name: "Personal Porfolio",
      url: "https://github.com/chrystalio/Nomads",
      description: "Personal portfolio website made with TailwindCSS",
      languages: [
        {
          name: "Tailwind-CSS",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "Nomads",
      url: "https://github.com/chrystalio/Nomads",
      description: "Nomads is a web travel app made with Laravel, and connected with Payment Gateway",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        }
      ],
    },
    {
      name: "Login Page INTERNSHIP BTP",
      url: "https://internship.btp.ac.id",
      description:
        "Login page for internship BTP sliced from Figma made with TailwindCSS",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Tailwind-CSS",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "Movie API",
      url: "https://movie-api.kristoff.my.id/",
      description: "API lists of Indonesian movies made with HapiJS, data scraped from Wikipedia",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HapiJS",
          iconifyClass: "logos-hapi",
        },
        {
          name: "Postman",
          iconifyClass: "logos-postman",
        },
      ],
    },
    {
      name: "forumAPI",
      url: "https://github.com/chrystalio/forumAPI",
      description: "Simple project REST API Forum made with Laravel",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Postman",
          iconifyClass: "logos-postman",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        }
      ],
    },
    {
      name: "Laravel QR",
      url: "https://laravel-qr.kristoff.my.id/",
      description: "Laravel QR code generator is a web app that lets users create custom QR codes and export them to PNG.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Tailwind-CSS",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "Bookshelf Node API",
      url: "https://github.com/chrystalio/bookshelf-node-api",
      description:
        "Restful Bookshelf API built with NodeJS",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Postman",
          iconifyClass: "logos-postman",
        },
      ],
    },
    {
      name: "SIMERU",
      url: "#",
      description:
        "SIMERU is a web app for company's management system",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Highcharts",
          iconifyClass: "logos-highcharts",
        }
      ],
    },
    {
      name: "Weather App",
      url: "https://weather.kristoff.my.id/",
      description:
        "Simple  weather app using OpenWeatherMap API",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind-CSS",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "CarPark-API",
      url: "https://github.com/chrystalio/CarPark-API",
      description:
        "REST API Car Parking with Laravel",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Postman",
          iconifyClass: "logos-postman",
        },
      ],
    },
    {
      name: "Personal Bookmarks",
      url: "https://bookmarks.kristoff.my.id/",
      description:
        "Lists of resources that I use to learn and work",
      languages: [
        {
          name: "NextJS",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MDX",
          iconifyClass: "logos-mdx",
        },
      ],
    },
    {
      name: "Blog",
      url: "https://kristoff.my.id/posts",
      description:
        "My personal blog",
      languages: [
        {
          name: "NextJS",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MDX",
          iconifyClass: "logos-mdx",
        },
      ],
    },
    {
      name: "Jarvis-Bot",
      url: "https://github.com/chrystalio/Jarvis-Bot",
      description:
        "Jarvis-Bot is a simple Discord Bot side project",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Repl.it",
          iconifyClass: "logos-replit",
        }
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
