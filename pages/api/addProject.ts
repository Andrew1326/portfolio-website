import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { addProject as addNewProject } from "../../helpers/projects";

interface IResponseData {
    projects?: IProject[];
    error?: Error;
}

const addProject = (req: NextApiRequest, res: NextApiResponse<IResponseData>): void => {
    const project: IProject = JSON.parse(req.body)

    try {
        const projects = addNewProject(project)
        res.status(200).json({projects})

    } catch(err) {
        res.status(400).send({error: err as Error})
    }
}

export default addProject