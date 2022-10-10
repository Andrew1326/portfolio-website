import { WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { connectToDatabase } from "../../data/db";

export type TRes = {
    projects?: WithId<IProject>[],
    error?: Error
}

const getProjects = async (req: NextApiRequest, res: NextApiResponse<TRes>): Promise<void> => {
    try {
        const { db } = await connectToDatabase()
        const projects = await db.collection<IProject>('projects').find({}).toArray()

        res.status(200).json({ projects })

    } catch(err) {
        res.status(500).json({ error: err as Error })
    }
}

export default getProjects