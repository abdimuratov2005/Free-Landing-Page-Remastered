export interface IPrograms {
    id: number;
    iconSrc: any;
    name: string;
    rateSrc: any;
}

const skillsPrograms: IPrograms[] = [
    {
        id: 1,
        iconSrc: 'skill_1',
        name: `Adobe Photoshop`,
        rateSrc: 'rate_1',
    },
    {
        id: 2,
        iconSrc: 'skill_2',
        name: `Adobe Illustrator`,
        rateSrc: 'rate_2',
    },
    {
        id: 3,
        iconSrc: 'skill_3',
        name: `Adobe After Effects`,
        rateSrc: 'rate_1',
    },
    {
        id: 4,
        iconSrc: 'skill_4',
        name: `Figma`,
        rateSrc: 'rate_2',
    },
];

export default skillsPrograms;