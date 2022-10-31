import * as contentful from 'contentful'
import { Entry, Fields } from './types'

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

let clientParams: contentful.CreateClientParams = {
    space: CONTENTFUL_SPACE_ID as string,
    accessToken: CONTENTFUL_ACCESS_TOKEN as string,
}

const client = contentful.createClient(clientParams)

//* getting data from cms
export const getCmsData = async (): Promise<Entry[] | undefined> => {
    const entries = await client.getEntries()
    return entries.items as Entry[] | undefined
}

export enum groupsIds {
    Project = '#project',
    Section = '#section',
    EducationCard = '#educationCard',
    SoftSkill = '#softSkill',
    TechnicalSkill = '#technicalSkill'
}

//* get content
export const getContentGroup = async <T extends Fields>(groupId: groupsIds): Promise<T[] | undefined> => {

    const items = await getCmsData()

    if (items) {
        const fieldsWithId = items.map(el => ({
            ...el.fields,
            id: el.sys.id
        }))

        const content = fieldsWithId.filter(el => el.groupId === groupId) as T[]

        return content
    } 
}

//* get content
export const getContent = async <T extends Fields>(id: string): Promise<T & { id: string; } | undefined> => {

    const item = await client.getEntry<T>(id)

    if (item) {
        const fieldsWithId: T & { id: string; } | undefined = {
            ...item.fields,
            id: item.sys.id
        }

        return fieldsWithId
    }
}