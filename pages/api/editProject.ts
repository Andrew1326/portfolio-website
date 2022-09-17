import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { IUpdateProjectData } from "../../stores/projectsStore";
import { editProject as updateProject } from '../../helpers/projects'
 
interface IResponseData {
    projects?: IProject[];
    error?: Error;
}

const editProject = (req: NextApiRequest, res: NextApiResponse<IResponseData>): void => {
    const parsedBody: IUpdateProjectData = JSON.parse(req.body)
    const { id, updatedProject } = parsedBody

    try {
        const projects = updateProject(id, updatedProject)
        res.status(200).json({projects})

    } catch(err) {
        res.status(400).send({error: err as Error})
    }
}

export default editProject