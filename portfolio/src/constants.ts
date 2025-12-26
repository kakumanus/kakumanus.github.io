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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
            'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
            'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
            'mollit anim id est laborum.',
        images: [pennImg.src, jpmcImg.src, aaoImg.src, blockOImg.src],
        buttonLink: 'https://sujankakumanu.com/musa-portfolio',
        buttonText: 'My MUSA Portfolio',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
            'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
            'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
            'mollit anim id est laborum.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
            'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
            'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
            'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
            'mollit anim id est laborum.',
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
        description: 'DESCRIPTION',
    }
];