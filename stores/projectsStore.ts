import { ObjectId, WithId } from "mongodb";
import create from "zustand";
import { IProject } from "../appTypes";
import { TRes as IGetProjectsRes } from "../pages/api/getProjects"

type TPromiseWithStatus = Promise<number | null>

interface IState {
    projects: WithId<IProject>[] | null,
    loading: boolean,
    error: Error | null,
    selectedProjectId: ObjectId | null,
    selectProject: (_id: ObjectId) => void,
    getProjects: () => Promise<void>,
    addProject: (project: WithId<IProject>) => TPromiseWithStatus,
    deleteProject: (_id: ObjectId) => TPromiseWithStatus,
    updateProject: (updatedFields: Partial<IProject>, _id: ObjectId) => TPromiseWithStatus
}

const useProjectsStore = create<IState>()((set) => ({
        projects: null,
        loading: false,
        error: null,
        selectedProjectId: null,

        //* get projects
        getProjects: async () => {
            try {
                set({ loading: true })

                const res = await fetch('/api/getProjects')
                const data: IGetProjectsRes = await res.json()

                set(data)

            } catch(err) {
                set({ error: err as Error })

            } finally {
                set({ loading: false })
            }
        },

        //* add project
        addProject: async (project) => {
            let resStatus: number | null = null

            try {
                set({ loading: true })

                const res = await fetch('/api/addProject', {
                    body: JSON.stringify(project),
                    method: 'POST'
                })

                resStatus = res.status

            } catch(err) {
                set({ error: err as Error })
                
            } finally {
                set({ loading: false })
            }  
            
            return resStatus
        },

        //* delete project
        deleteProject: async (_id) => {
            let resStatus: number | null = null

            try {
                set({ loading: true })

                const res = await fetch('/api/deleteProject', {
                    body: JSON.stringify({ _id }),
                    method: 'POST'
                })

                resStatus = res.status

            } catch(err) {
                set({ error: err as Error })
                
            } finally {
                set({ loading: false })
            }   

            return resStatus
        },

        //* edit project
        updateProject: async (updatedFields, _id) => {
            let resStatus: number | null = null

            try {
                set({ loading: true })

                const res = await fetch('/api/updateProject', {
                    body: JSON.stringify({ updatedFields, _id }),
                    method: 'POST'
                })

                resStatus = res.status

            } catch(err) {
                set({ error: err as Error })
                
            } finally {
                set({ loading: false })
            }

            return resStatus
        },

        //* select project
        selectProject: (id) => set({ selectedProjectId: id })
    })
)

export default useProjectsStore