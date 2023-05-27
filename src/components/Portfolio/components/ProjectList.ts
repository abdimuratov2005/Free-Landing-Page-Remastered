export interface IProjectsList {
    id: number,
    img: any,
    name: string
}

const projectList: IProjectsList[] = [
    {
        id: 1,
        img: 'project_1',
        name: 'Online fashion store - Homepage'
    },
    {
        id: 2,
        img: 'project_2',
        name: 'Reebok Store - Concept'
    },
    {
        id: 3,
        img: 'project_3',
        name: 'Braun Landing Page - Concept'
    },
]

export default projectList;