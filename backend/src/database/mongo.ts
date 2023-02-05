import { MongoClient as Mongo, Db, WithId } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.DB_URL || "mongodb://localhost:27017";
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    const client = new Mongo(url, {
      auth: { username, password },
    });

    client
      .connect()
      .then(() => {
        console.log("==> Connected to mongodb!");
      })
      .catch((error) => {
        throw new Error(error);
      });

    const db = client.db(process.env.DB_NAME);

    this.client = client;
    this.db = db;
  },
  map(data: any) {
    const { _id, ...rest } = data;
    return { id: _id.toHexString(), ...rest };
  },
  mapArray<T>(data: WithId<T>[]) {
    return data.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  },
};
