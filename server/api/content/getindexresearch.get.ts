import { usePrivateMongoClient } from "~~/server/utils/connection";

async function getResearch() {
  const client = await usePrivateMongoClient();
  if (!client) {
    return new Response("Failed to fetch data", { status: 500 });
  }
  const db = client.db("personal");
  const collection = db.collection("index_research");
  const result = await collection.find({}).toArray();
  return result;
}

export default defineEventHandler(async (event) => {
  const result = await getResearch();
  return { research: result };
});
