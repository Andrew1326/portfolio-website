import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { deleteProject as deleteItem } from '../../helpers/projects'

interface IResponseData {
    projects?: IProject[];
    error?: Error;
}

interface IReqBody { id: number }

const deleteProject = (req: NextApiRequest, res: NextApiResponse<IResponseData>): void => {
    const parsedBody: IReqBody = JSON.parse(req.body)

    try {
        const projects = deleteItem(parsedBody.id)
        res.status(200).json({projects})

    } catch(err) {
        res.status(400).json({error: err as Error})
    }
}

export default deleteProject