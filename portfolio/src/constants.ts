export interface Experience {
    id: number;
    image: ImageMetadata;
    imageAlt: string;
    color: string;
    title: string;
    organization: string;
    department?: string;
    dates: string;
    description: string;
    images?: string[];
    skills?: string[];
    buttonLink?: string;
    buttonText?: string;
}

export interface Project {
    id: number;
    image?: ImageMetadata;
    imageAlt?: string;
    color?: string;
    title: string;
    subtitle: string;
    description: string;
    link?: string;
    tags: string[];
    featured?: boolean;
    report?: HostedReport;
}

// A PDF hosted on this site, shown on its own page at /projects/<slug>
export interface HostedReport {
    slug: string;
    pdf: string;        // path under public/, e.g. /reports/<file>.pdf
    heading?: string;   // full report title; defaults to the project title
    dates?: string;
    indexed?: boolean;  // allow search engines to index the page (default: no)
}

// Where a project card links: its external site, or its hosted report page
export const projectHref = (p: Project) =>
    p.link ?? (p.report ? `/projects/${p.report.slug}` : undefined);

// Images for the experience tiles (high-level)
import phillyImg from './assets/philly.png';
import pennImg from './assets/penn.jpg';
import jpmcImg from './assets/jpmc.jpg';
import aaoImg from './assets/AAO.png';
import blockOImg from './assets/block_o.png';

// Images for experience carousels
import jpmcCar1 from './assets/carousel/jpmc-car-1.jpg';
import jpmcCar2 from './assets/carousel/jpmc-car-2.jpg';
import jpmcCar3 from './assets/carousel/jpmc-car-3.jpg';

import aaoCar1 from './assets/carousel/aao-car-1.jpg';
import aaoCar2 from './assets/carousel/aao-car-2.jpg';
import aaoCar3 from './assets/carousel/aao-car-3.jpg';
import aaoCar4 from './assets/carousel/aao-car-4.jpg';

// Images for project tiles
import ppa from './assets/projects/ppa.png';
import spst from './assets/projects/spst.png';
import pyth from './assets/projects/pyth.png';
import nycFerry from './assets/projects/nyc-ferry.png';
import detroitChange from './assets/projects/detroit-change.png';
import phillyLocalR2 from './assets/projects/philly-local-r2.png';
import westernAveBrt from './assets/projects/western-ave-brt.png';

export const experiences: Experience[] = [
    {
        id: 6,
        image: phillyImg,
        color: '#0f4d90',
        imageAlt: 'City of Philadelphia',
        title: 'Senior Software Engineer',
        organization: 'City of Philadelphia',
        department: 'Office of Innovation & Technology',
        dates: '2026-Present',
        description: '',
        skills: ['Full-Stack Development', 'Civic Technology', 'CMS'],
        images: [phillyImg.src],
    },
    {
        id: 1,
        image: pennImg,
        color: '#990000',
        imageAlt: 'University of Pennsylvania',
        title: 'Master of Urban Spatial Analytics',
        organization: 'University of Pennsylvania',
        department: 'Weitzman School of Design',
        dates: 'Class of 2026',
        description:
            'The Master of Urban Spatial Analytics (MUSA) program gave me experience in spatial data science, modeling, and visualization, while also connecting that work to real-world planning and policy challenges. To supplement my technical coursework, I took classes such as "Introduction to Housing, Community, and Economic Development" and "Community Engagement for Planners and Policy Makers", which helped me understand the social, economic, and policy context of my work.',
        skills: ['R', 'Python', 'Spatial Statistics', 'Community Engagement', 'Housing Policy'],
        images: [pennImg.src],
    },
    {
        id: 2,
        image: jpmcImg,
        color: '#996c48',
        imageAlt: 'JPMorgan Chase',
        title: 'Software Engineer I & II',
        organization: 'JPMorgan Chase',
        department: 'Consumer Bank Sales, Incentives, & Growth',
        dates: '2022-25',
        description:
            'Worked as a full-stack engineer on a web application used by 5,000+ Chase branch leaders to improve branch performance and growth. Partnered with cross-functional teams in an Agile environment, led scrum ceremonies, and drove continuous improvement in team practices. Mentored interns, organized professional development programs, and led panels to strengthen early-career engagement across the firm.',
        skills: [
            'Vue.js',
            'Spring Boot',
            'API Development',
            'Database Design',
            'Airflow',
            'Architecture',
            'Agile Development',
        ],
        images: [jpmcCar1.src, jpmcCar2.src, jpmcCar3.src],
    },
    {
        id: 3,
        image: aaoImg,
        color: '#388cbb',
        imageAlt: 'All Aboard Ohio',
        title: 'Board Member & Secretary',
        organization: 'All Aboard Ohio',
        department: 'Board of Directors, Executive Committee',
        dates: '2023-25',
        description:
            'Collaborated with board members to develop a new mission, organizational values, and strategic plan. ' +
            'Aided in the recruitment, interviewing, and onboarding of an Executive Director and Communications Director. ' +
            'Organized and advocated for expanded public transportation at the 2024 and 2025 Annual Meetings, engaging key stakeholders and citizens from across Ohio.',
        skills: ['Nonprofits', 'Board Responsibilities', 'Advocacy'],
        images: [aaoCar1.src, aaoCar2.src, aaoCar3.src, aaoCar4.src],
        buttonLink: 'https://allaboardohio.org',
        buttonText: 'All Aboard Ohio ⧉',
    },
    {
        id: 4,
        image: blockOImg,
        color: '#70071c',
        imageAlt: 'The Ohio State University',
        title: 'B.S Computer Science & Engineering',
        organization: 'The Ohio State University',
        department: 'College of Engineering',
        dates: 'Class of 2021',
        description: '🚧 Description coming soon.',
        skills: ['Machine Learning', 'Data Structures', 'Algorithms', 'Systems', 'City Planning'],
        images: [blockOImg.src],
    },
    {
        id: 5,
        image: jpmcImg,
        color: '#996c48',
        imageAlt: 'JPMorgan Chase',
        title: 'Intern',
        organization: 'JPMorgan Chase',
        department: 'Software Engineering Program (SEP)',
        dates: 'Summer of 2020, Summer of 2021',
        description:
            "Summer of 2020: Developed a mobile and web application system enabling seamless, one-time customer authentication across all bank branch applications, earning recognition from Chase's Innovation Lab. " +
            'Summer of 2021: Collaborated on a mobile application project for Experience Columbus, a local non-profit supported by the firm during the COVID-19 pandemic.',
        skills: ['React Native', 'Postgres SQL', 'Kanban', 'Vue', 'Android Dev'],
    },
];

export const projects: Project[] = [
    {
        id: 1,
        image: nycFerry,
        imageAlt: 'NYC Ferry delay prediction app showing ferry routes on a map of New York Harbor',
        title: 'NYC Ferry Delay Prediction',
        subtitle: 'MUSA Program Capstone Project',
        description: 'Partnered with NYCEDC to analyze NYC Ferry delays and built a model that predicts excessive delays up to 48 hours ahead, powering a web app for ferry operations managers.',
        tags: ['Predictive Modeling', 'Transit Operations', 'Geospatial Analysis'],
        featured: true,
        link: 'https://sujankakumanu.com/musa-8010-nycedc/',
    },
    {
        id: 2,
        image: westernAveBrt,
        imageAlt: 'Report cover showing the Chicago street grid with the Western Avenue BRT line and the Chicago star',
        color: '#2a6f97',
        title: 'Western Avenue BRT',
        subtitle: 'A project for the Practice of Transportation Planning',
        description: 'The culmination of a series of policy memos on the Chicago Transit Authority, an agency uniquely positioned by new, stable state funding to invest in the bus network that carries most of its riders. ' +
            'This final report argues that community engagement, not funding or design, is the crucial barrier to implementing the Western Avenue BRT, and draws on the shelved Ashland Avenue BRT and practices from across the U.S. to propose a framework for building a lasting rider coalition.',
        report: {
            slug: 'western-ave-brt',
            pdf: '/reports/western-ave-brt.pdf',
            heading: 'Western Avenue BRT: Building the Coalition it Needs',
            dates: 'Spring 2026',
        },
        tags: ['Transit Policy', 'Community Engagement', 'Stakeholder Analysis'],
    },
    {
        id: 3,
        image: detroitChange,
        imageAlt: 'Map of central Detroit showing k-means clusters of Clay embedding change from 2018 to 2022',
        title: 'Detroit Neighborhood Change',
        subtitle: 'Exploring satellite foundation models - Deep Learning in Remote Sensing',
        description: 'Tested whether satellite foundation model embeddings can detect neighborhood decline and reinvestment in Detroit.',
        link: 'https://github.com/kakumanus/musa-650-spring2026/blob/main/assignments/final_project.ipynb',
        tags: ['Remote Sensing', 'Geospatial Foundation Models', 'Unsupervised Learning'],
    },
    {
        id: 4,
        image: phillyLocalR2,
        imageAlt: 'Map of Philadelphia block groups showing local R² values from geographically weighted regression',
        title: 'Statistical & Data Mining Methods',
        subtitle: 'MUSA 5000 — Course Reports',
        description: 'Modeled Philadelphia housing values with OLS, spatial lag, spatial error, and geographically weighted regression.',
        link: 'https://sujankakumanu.com/MUSA-5000/',
        tags: ['Spatial Statistics', 'Regression Modeling'],
    },
    {
        id: 5,
        image: ppa,
        imageAlt: 'Map of Philadelphia SEPTA bus stops colored by neighborhood cluster',
        title: 'Public Policy Analytics',
        subtitle: 'MUSA 5080 — Course Portfolio',
        description: 'Applied regression and spatial models to policy questions, from Philadelphia home prices and Chicago burglary risk to bike share demand and SEPTA ridership.',
        link: 'https://sujankakumanu.com/musa-5080-portfolio/',
        tags: ['Predictive Modeling', 'Spatial Analysis', 'Public Policy'],
    },
];
