import { MongoClient } from "mongodb";
let config = useRuntimeConfig();
const client = new MongoClient(config.connectionString);

async function loadArticles() {
  try {
    const database = client.db("blog_articles");
    let article_collection = database.collection("case_sums");
    let result = await article_collection.find({}).toArray();
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
