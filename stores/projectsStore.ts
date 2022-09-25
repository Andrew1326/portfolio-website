import create from "zustand";
import { IProject } from "../appTypes";
import { IData as IProjectsData } from '../helpers/projects'

export interface IUpdateProjectData {
    id: number, 
    updatedProject: IProject
}

interface IState {
    projects: IProject[] | null,
    loading: boolean,
    error: Error | null,
    selectedProjectId: number | null,
    selectProject: (id: number) => void,
    getProjects: () => Promise<void>,
    addProject: (project: IProject) => Promise<void>,
    deleteProject: (id: number) => Promise<void>,
    editProject: (projectData: IUpdateProjectData) => Promise<void>
}

const useProjectsStore = create<IState>()((set, get) => ({
        projects: null,
        loading: false,
        error: null,
        selectedProjectId: null,

        //* get projects
        getProjects: async () => {
            try {
                set({loading: true})

                const res = await fetch('/api/getProjects', { method: 'POST' })
                const data: IProjectsData = await res.json()

                set(data)

            } catch(err) {
                set({error: err as Error})

            } finally {
                set({loading: false})
            }
        },

        //* add project
        addProject: async (project) => {
            try {
                set({loading: true})

                const res = await fetch('/api/deleteProject', {
                    body: JSON.stringify(project),
                    method: 'POST'
                })
                const data: IProjectsData = await res.json()

                set(data)

            } catch(err) {
                set({error: err as Error})
                
            } finally {
                set({loading: false})
            }   
        },

        //* delete project
        deleteProject: async (id) => {
            try {
                set({loading: true})

                const res = await fetch('/api/deleteProject', {
                    body: JSON.stringify({id}),
                    method: 'POST'
                })
                const data: IProjectsData = await res.json()

                set(data)

            } catch(err) {
                set({error: err as Error})
                
            } finally {
                set({loading: false})
            }   
        },

        //* edit project
        editProject: async (projectData) => {
            try {
                set({loading: true})

                const res = await fetch('/api/editProject', {
                    body: JSON.stringify(projectData),
                    method: 'POST'
                })
                const data: IProjectsData = await res.json()

                set(data)

            } catch(err) {
                set({error: err as Error})
                
            } finally {
                set({loading: false})
            }
        },

        //* select project
        selectProject: (id) => set({selectedProjectId: id})
    })
)

export default useProjectsStore