import ImgLoader from "../../../app/ui/ImgLoader";

export interface IPrograms {
    id: number;
    iconSrc: any;
    name: string;
    rateSrc: any;
}

const skillsPrograms: IPrograms[] = [
    {
        id: 1,
        iconSrc: ImgLoader({img: 'skill_1'}),
        name: `Adobe Photoshop`,
        rateSrc: ImgLoader({img: 'rate_1'}),
    },
    {
        id: 2,
        iconSrc: ImgLoader({img: 'skill_2'}),
        name: `Adobe Illustrator`,
        rateSrc: ImgLoader({img: 'rate_2'}),
    },
    {
        id: 3,
        iconSrc: ImgLoader({img: 'skill_3'}),
        name: `Adobe After Effects`,
        rateSrc: ImgLoader({img: 'rate_1'}),
    },
    {
        id: 4,
        iconSrc: ImgLoader({img: 'skill_4'}),
        name: `Figma`,
        rateSrc: ImgLoader({img: 'rate_2'}),
    },
];

export default skillsPrograms;