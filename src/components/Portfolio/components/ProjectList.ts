import project_1 from "../assets/portfolio-pic-1.webp";
import project_2 from "../assets/portfolio-pic-2.webp";
import project_3 from "../assets/portfolio-pic-3.webp";
import { ProjectType } from "../types/ProjectListTypes";

const projectList: ProjectType[] = [
    {
        id: 1,
        imgSrc: project_1,
        name: 'Online fashion store - Homepage'
    },
    {
        id: 2,
        imgSrc: project_2,
        name: 'Reebok Store - Concept'
    },
    {
        id: 3,
        imgSrc: project_3,
        name: 'Braun Landing Page - Concept'
    },
]

export default projectList;