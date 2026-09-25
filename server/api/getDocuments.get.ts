import { getMongoClient } from "~~/server/utils/connection";

function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
}

async function getDocuments(parts?: string[], route?: string) {
  try {
    const client = await getMongoClient();
    const database = client?.db("personal");
    const collection = database?.collection("website");
    if (!collection) {
      return [];
    }

    const query: any = {};
    if (route) {
      query.route = route;
    }
    if (parts && parts.length > 0 && parts[0]) {
      query.$or = [
        { type: { $in: parts } },
        { section: { $in: parts } }
      ];
    }

    const result = await withTimeout(
      collection.find(query).toArray() as Promise<any>,
      8000,
      [],
    );
    return result || [];
  } catch (error) {
    console.error("Error in getDocuments:", error);
    return [];
  }
}

export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const route = query.route ? String(query.route) : undefined;
    const parts = query.parts ? String(query.parts).split("-") : undefined;

    return await getDocuments(parts, route);
  },
  { maxAge: 60 * 5, name: "getDocuments", swr: true },
);
