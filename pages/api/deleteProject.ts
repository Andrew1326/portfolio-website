import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { connectToDatabase } from "../../data/db";

type TReqBody = { _id: ObjectId }

type TRes = { error: Error | null } | void

const deleteProject = async (req: NextApiRequest, res: NextApiResponse): Promise<TRes> => {
    const parsedBody: TReqBody = JSON.parse(req.body)

    try {
        const { db } = await connectToDatabase()
        db.collection<IProject>('projects').deleteOne({ _id: parsedBody._id })

        res.status(200).end()

    } catch(err) {
        res.status(500).json({ error: err as Error })
    }
}

export default deleteProject