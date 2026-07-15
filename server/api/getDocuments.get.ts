import { getMongoClient } from "~~/server/utils/connection";
// import { MongoClient } from "mongodb";
// let config = useRuntimeConfig();
// const client = new MongoClient(config.websiteConnection);
async function getDocuments() {
  let client = await getMongoClient();
  let database = client?.db("personal");
  let collection = database?.collection("website");
  let result = await collection?.findOne({});
  console.log(result);
  return result;
}

export default defineEventHandler(async (event) => {
  return await getDocuments();
});
