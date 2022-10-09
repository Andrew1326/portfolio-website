import { WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { connectToDatabase } from "../../data/db";

type TReqBody = WithId<IProject>

type TRes = { error: Error | null } | void

const addProject = async (req: NextApiRequest, res: NextApiResponse): Promise<TRes> => {
    const project: TReqBody = JSON.parse(req.body)

    try {
        const { db } = await connectToDatabase()
        db.collection<IProject>('projects').insertOne(project)

        res.status(200).end()

    } catch(err) {
        res.status(500).json({ error: err as Error })
    }
}

export default addProject