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
    isProjectsGallery?: boolean;
    projects?: Project[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags?: string[];
}

// Images for the tiles (high-level)
import pennImg from "./assets/penn.jpg";
import jpmcImg from "./assets/jpmc.jpg";
import aaoImg from "./assets/AAO.png";
import blockOImg from "./assets/block_o.png";

// Images for carousel (within an experience)

// - JPMC
import jpmcCar1 from "./assets/carousel/jpmc-car-1.jpg";
import jpmcCar2 from "./assets/carousel/jpmc-car-2.jpg"
import jpmcCar3 from "./assets/carousel/jpmc-car-3.jpg"

// - AAO
import aaoCar1 from "./assets/carousel/aao-car-1.jpg";
import aaoCar2 from "./assets/carousel/aao-car-2.jpg";
import aaoCar3 from "./assets/carousel/aao-car-3.jpg";
import aaoCar4 from "./assets/carousel/aao-car-4.jpg";

import ppa from "./assets/projects/ppa.png"
import spst from "./assets/projects/spst.png"
import pyth from "./assets/projects/pyth.png"

export const experiences: Experience[] = [
    {
        id: 1,
        image: pennImg,
        color: '#990000',
        imageAlt: 'University of Pennsylvania',
        title: 'Master of Urban Spatial Analytics',
        organization: 'University of Pennsylvania',
        department: 'Weitzman School of Design',
        dates: 'Class of 2026',
        description: 'The Master of Urban Spatial Analytics (MUSA) program gave me experience in spatial data science, modeling, and visualization, while also connecting that work to real-world planning and policy challenges. To supplement my technical coursework, I took classes such as "Introduction to Housing, Community, and Economic Development" and "Community Engagement for Planners and Policy Makers", which helped me understand the social, economic, and policy context of my work. The tiles below link to my technical projects in the MUSA program.',
        skills: ['R', 'Python', 'Spatial Statistics', 'Community Engagement', 'Housing Policy'],
        images: [pennImg.src],
        isProjectsGallery: true,
        projects: [
            {
                id: 1,
                title: 'Public Policy Analytics ⧉',
                description: '',
                image: ppa.src,
                link: 'https://sujankakumanu.com/musa-5080-portfolio',
                tags: ['R', 'Quarto', 'Predictive Modeling']
            },
            {
                id: 2,
                title: 'Statistical and Data Mining Methods ⧉',
                description: '',
                image: spst.src,
                link: 'https://sujankakumanu.com/MUSA-5000',
                tags: ['R', 'Regression', 'Pattern Analysis']
            },
            {
                id: 3,
                title: 'Geospatial Analysis in Python ⧉',
                description: 'Final project',
                image: pyth.src,
                link: 'https://sujankakumanu.com/urban-renewal-explorer',
                tags: ['Python', 'Data Pipelines']
            }
        ],
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
        description: 'Worked as a full-stack engineer on a web application used by 5,000+ Chase branch leaders to improve branch performance and growth. Partnered with cross-functional teams in an Agile environment, led scrum ceremonies, and drove continuous improvement in team practices. Mentored interns, organized professional development programs, and led panels to strengthen early-career engagement across the firm.',
        skills: ['Vue.js', 'Spring Boot', 'API Development', 'Database Design', 'Airflow', 'Architecture', 'Agile Development'],
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
        description: 'Collaborated with board members to develop a new mission, organizational values, and strategic plan. ' +
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
        description: 'Summer of 2020: Developed a mobile and web application system enabling seamless, one-time customer authentication across all bank branch applications, earning recognition from Chase’s Innovation Lab. ' +
            'Summer of 2021: Collaborated on a mobile application project for Experience Columbus, a local non-profit supported by the firm during the COVID-19 pandemic.',
        skills: ['React Native', 'Postgres SQL', 'Kanban', 'Vue', 'Android Dev'],
    }
];