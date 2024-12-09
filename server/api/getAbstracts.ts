import { MongoClient } from "mongodb";
let config = useRuntimeConfig();
const client = new MongoClient(config.connectionString);
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadArticles() {
  try {
    const database = client.db("blog_articles");
    let article_collection = database.collection("abstract_collection");
    let result = await article_collection.find({}).toArray();
    console.log(result);
    if (result) {
      return result;
    } else {
      return { articles: [] };
    }
  } catch (error) {
    console.log(error);
  }
}
export default defineEventHandler(async (event) => {
  let articles = await loadArticles();
  if (articles) {
    return { articles };
  } else {
    return { data: [] };
  }
});
