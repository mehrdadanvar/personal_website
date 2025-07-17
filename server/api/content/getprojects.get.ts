import { getPrivate_mongoClient } from "~/server/connection";

async function getProjects(slug: string | undefined) {
  const client = await getPrivate_mongoClient();
  if (!client) {
    return new Response("Failed to connect to MongoDB", { status: 500 });
  }
  const db = client.db("personal");
  const collection = db.collection("projects");
  if (slug == undefined) {
    const result = await collection.find({}).toArray();
    return result;
  } else {
    const result = await collection.findOne({ slug: slug });
    return result;
  }
}

export default defineEventHandler(async (event) => {
  let quey = getQuery(event);
  console.log(quey, typeof quey);
  console.log(quey.slug);
  if (quey.slug === undefined) {
    const result = await getProjects(undefined);
    return { projects: result };
  }
  if (quey.slug) {
    const result = await getProjects(String(quey.slug));

    return { project: result };
  }
});
