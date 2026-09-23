import { getMongoClient } from "~~/server/utils/connection";

async function getDocuments(parts?: string[], route?: string) {
  try {
    const client = await getMongoClient();
    const database = client?.db("personal");
    const collection = database?.collection("website");

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

    const result = await collection?.find(query).toArray();
    return result || [];
  } catch (error) {
    console.error("Error in getDocuments:", error);
    return [];
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const route = query.route ? String(query.route) : undefined;
  const parts = query.parts ? String(query.parts).split("-") : undefined;

  return await getDocuments(parts, route);
});
