import skill_1 from '../assets/icon-1.svg';
import skill_2 from '../assets/icon-2.svg';
import skill_3 from '../assets/icon-3.svg';
import skill_4 from '../assets/icon-4.svg';
import rate_1 from '../assets/rate-1.svg';
import rate_2 from '../assets/rate-2.svg';
import { ProgramsType } from '../types/ProgramsType';

const skillsPrograms: ProgramsType[] = [
    {
        id: 1,
        iconSrc: skill_1,
        name: `Adobe Photoshop`,
        rateSrc: rate_1,
    },
    {
        id: 2,
        iconSrc: skill_2,
        name: `Adobe Illustrator`,
        rateSrc: rate_2,
    },
    {
        id: 3,
        iconSrc: skill_3,
        name: `Adobe After Effects`,
        rateSrc: rate_1,
    },
    {
        id: 4,
        iconSrc: skill_4,
        name: `Figma`,
        rateSrc: rate_1,
    },
];

export default skillsPrograms;