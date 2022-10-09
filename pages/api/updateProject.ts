import { ObjectId, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../appTypes";
import { connectToDatabase } from "../../data/db";

type TReqBody = {
    updatedFields: Partial<IProject>,
    _id: ObjectId
}

type TRes = { error: Error | null } | void

const updateProject = async (req: NextApiRequest, res: NextApiResponse): Promise<TRes> => {
    const parsedBody: TReqBody = JSON.parse(req.body)
    const { updatedFields, _id } = parsedBody

    console.log(updatedFields)

    try {
        const { db } = await connectToDatabase()
        db.collection<IProject>('projects').updateOne({ _id }, { $set: updatedFields })

        res.status(200).end()

    } catch(err) {
        res.status(500).json({ error: err as Error })
    }
}

export default updateProject