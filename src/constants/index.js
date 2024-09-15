import { SiCodementor, SiMui } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { CgPerformance } from 'react-icons/cg';
import { TiWavesOutline } from 'react-icons/ti';
import { FcCollaboration } from 'react-icons/fc';

const navLinkArray = [
  { id: 101, title: 'Home', link: 'home' },
  { id: 102, title: 'Features', link: 'feature' },
  { id: 103, title: 'Projects', link: 'projects' },
  { id: 104, title: 'Resume', link: 'resume' },
  { id: 106, title: 'Contact', link: 'contact' },
];

export const introduction =
  'As a full-stack developer, I build responsive web apps using React, Vue 3, and Tailwind CSS, integrating Redux Toolkit and third-party APIs. I ensure efficient backend performance with TypeScript, focusing on accessibility and seamless user experiences.';
export default navLinkArray;

export const nextStreamDesc =
  'a cutting-edge streaming platform optimized for lightning-fast video loading, utilizing debouncing and caching for efficiency, offering exceptional user experience with real-time search suggestions and a robust live chat feature.';

export const linkedIn_Profile_link =
  'https://www.linkedin.com/in/shivam-tiwari-iitg';

export const github_Profile_link = 'https://github.com/OptimizationGuru';
export const leetcode_Profile_link = 'https://leetcode.com/u/tiwaribhaiya/';

export const workDescription = [
  {
    id: 1,
    title: 'UI/UX Design',
    description:
      'Translates design concepts into functional, visually appealing interfaces for seamless user experiences..',
    icon: <SiMui />,
  },

  {
    id: 2,
    title: 'Performance Optimization',
    description:
      'Specializes in optimal app performance with code optimization, caching, debouncing, throttling, API polling, and Redux-based state management.',
    icon: <CgPerformance />,
  },

  {
    id: 3,
    title: 'Scalable API Development',
    description:
      'Built high-performance APIs handling millions of requests daily, ensuring low latency, high availability, and efficient data exchange across distributed systems.',
    icon: <TiWavesOutline />,
  },
  {
    id: 4,
    title: 'Collaborations',
    description:
      'Led development and cross-functional teams to deliver projects aligned with business goals and user needs for seamless execution..',
    icon: <FcCollaboration />,
  },
  {
    id: 5,
    title: 'Mentoring & Training',
    description:
      'Mentors interns and junior developers, sharing knowledge and best practices to foster skill development and team growth.',
    icon: <SiCodementor />,
  },
  {
    id: 6,
    title: 'Code Review & QA',
    description:
      'Reviews code contributions to ensure quality, adherence to standards, and identify improvements.',
    icon: <FaCode />,
  },
];

export const fieldTypes = [
  {
    id: 1,
    type: 'name',
    test_func: 'field in not empty',
    errMsg: 'Minimum 3 characters',
    initialError: 'Name field is Empty',
  },
  {
    id: 2,
    type: 'phone',
    test_func: /^[6-9]\d{9}$/,
    errMsg: 'Please enter valid phone number',
    initialError: 'Phone field is Empty',
  },
  {
    id: 3,
    type: 'email',
    test_func: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errMsg: 'Please enter valid email',
    initialError: 'Email field is Empty',
  },
  {
    id: 4,
    type: 'subject',
    test_func: /[^.!?]*[.!?]/,
    errMsg: 'Minimum 50 characters..',
    initialError: 'Subject field is Empty',
  },
  {
    id: 5,
    type: 'message',
    test_func: /[^.!?]*[.!?]/,
    errMsg: 'Minimum one complete sentence.',
    initialError: 'Message field is Empty',
  },
];

export const work_desc = [
  '🌟 Enabled 60s battery swaps, improving efficiency by 30%.',
  '🌟 Reduced wait times by 40%, raising customer satisfaction 25%.',
  '🌟 Ensured 99% uptime with industry-best frontend practices.',
];

export const work_desc2 = [
  '🌟 Built KML parser to convert cluster boundaries into H3 hexagons using Uber’s H3 Index.',
  '🌟 Integrated H3 hexagon data into Google Maps for precise boundary visualization',
  '🌟 Enabled boundary modification directly on the map, simplifying cluster management.',
  '🌟 Contributed to business expansion, adding 2M INR in annual revenue.',
];

export const work_desc3 = [
  '🌟 Built a dynamic, responsive web app with React, TypeScript, and TailwindCSS for a seamless user experience.',
  '🌟 Top-Performant: Applied lazy loading, code-splitting, debouncing, throttling, and caching for fast, scalable features.',
  '🌟 State Management: Optimized data flow with Redux Toolkit for scalability and consistency.',
];

export const work_desc4 = [
  '🌟 Led onboarding and knowledge transfer for interns and new hires, providing guidance to ensure a smooth transition and quick integration into the team',
  '🌟 Conducted thorough code reviews, ensuring adherence to best practices, optimized performance, and maintainability across the team.',
];

export const projectLinks = [
  {
    id: 1,
    liveUrl: 'https://netflixgpt-3cb4b.web.app/',
    githubUrl: 'https://github.com/OptimizationGuru/netflix-gpt/',
  },
  {
    id: 2,
    liveUrl: 'https://netflixgpt-3cb4b.web.app/',
    githubUrl: 'https://github.com/OptimizationGuru/echoview',
  },

  {
    id: 3,
    liveUrl: 'https://netflixgpt-3cb4b.web.app/',
    githubUrl: 'https://github.com/OptimizationGuru/portfolio',
  },
];

export const projectNextStreamDBullets = [
  {
    id: 1,
    desc: '🌟 Cutting-edge streaming platform optimized for lightning-fast video loading.',
  },
  {
    id: 2,
    desc: '🌟 Utilized code-splitting, lazy-loading, debouncing and caching for efficiency.',
  },

  {
    id: 3,
    desc: ' 🌟 Delivered exceptional user experience with real-time search suggestions',
  },
  {
    id: 4,
    desc: ' 🌟 Integrated a robust live chat feature with api polling',
  },
];

export const projectMovieStoreBullets = [
  {
    id: 1,
    desc: '🌟 Cutting-edge streaming platform optimized for lightning-fast video loading.',
  },
  {
    id: 2,
    desc: '🌟 Utilized code-splitting, lazy-loading, debouncing and caching for efficiency.',
  },

  {
    id: 3,
    desc: ' 🌟 Delivered exceptional user experience with real-time search suggestions',
  },
  {
    id: 4,
    desc: ' 🌟 Integrated a robust live chat feature with api polling',
  },
];

export const projectPortfolioBullets = [
  {
    id: 1,
    desc: '🌟 Cutting-edge streaming platform optimized for lightning-fast video loading.',
  },
  {
    id: 2,
    desc: '🌟 Utilized code-splitting, lazy-loading, debouncing and caching for efficiency.',
  },

  {
    id: 3,
    desc: ' 🌟 Delivered exceptional user experience with real-time search suggestions',
  },
  {
    id: 4,
    desc: ' 🌟 Integrated a robust live chat feature with api polling',
  },
];
