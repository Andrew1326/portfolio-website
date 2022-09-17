import fs from 'fs'
import path from 'path';
import { IProject } from "../appTypes";

export interface IData { projects: IProject[] }

const projectsDirPath = path.join(process.cwd(), 'data')
const projectsFilePath = `${projectsDirPath}/data.json`

//* get data
const getData = (): IData => {
    const json = fs.readFileSync(projectsFilePath, 'utf8')
    const data: IData = JSON.parse(json)

    return data
}

//* get projects
export const getProjects = (): IProject[] => getData().projects

//* delete project
export const deleteProject = (id: number): IProject[] => {
    const data = getData()

    data.projects = data.projects.filter((_, i) => i !== id)
    fs.writeFileSync(projectsFilePath, JSON.stringify(data))

    return data.projects
}

//* add project
export const addProject = (project: IProject): IProject[] => {
    const data = getData()

    data.projects.push(project)
    fs.writeFileSync(projectsFilePath, JSON.stringify(data))

    return data.projects
}

//* edit project
export const editProject = (id: number, updatedProject: IProject): IProject[] => {
    const data = getData()

    data.projects[id] = updatedProject
    fs.writeFileSync(projectsFilePath, JSON.stringify(data))

    return data.projects
}