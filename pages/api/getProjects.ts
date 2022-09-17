import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from '../../appTypes'
import { getProjects as loadProjects } from '../../helpers/projects'

interface IResponseData {
    projects?: IProject[];
    error?: Error;
}

const getProjects = (req: NextApiRequest, res: NextApiResponse<IResponseData>): void => {
    try {
        const projects = loadProjects()
        res.status(200).json({projects})

    } catch(err) {
        res.status(400).send({error: err as Error})
    }
}

export default getProjects