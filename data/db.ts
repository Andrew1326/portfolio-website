import { Db, MongoClient, MongoClientOptions } from 'mongodb'

interface IDbData {
    client: MongoClient,
    db: Db
}

const { MONGO_URI, DB_NAME } = process.env

if (!MONGO_URI) throw new Error('Define MONGO_URI in env')
if (!DB_NAME) throw new Error('Define DB_NAME in env')

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

//* connect to db
export const connectToDatabase = async (): Promise<IDbData> => {
    if (cachedClient && cachedDb) return {
        client: cachedClient,
        db: cachedDb
    }

    //* connecting
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    const db = client.db(DB_NAME)

    cachedClient = client
    cachedDb = db

    return {
        client: cachedClient,
        db: cachedDb,
    }
}