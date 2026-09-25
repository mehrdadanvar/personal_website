import { MongoClient } from "mongodb";

const clientPromises = new Map<string, Promise<MongoClient | null>>();

export async function getMongoClient(): Promise<MongoClient | null> {
  const config = useRuntimeConfig();
  const connection = config.websiteConnection;

  if (!connection) {
    return null;
  }

  if (clientPromises.has(connection)) {
    return clientPromises.get(connection)!;
  }

  const promise = new MongoClient(connection, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
    socketTimeoutMS: 10000,
  })
    .connect()
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      clientPromises.delete(connection); // allow a retry on next request
      return null;
    });

  clientPromises.set(connection, promise);
  return promise;
}
