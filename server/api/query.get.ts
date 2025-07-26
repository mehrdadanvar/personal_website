import { MongoClient } from "mongodb";
let config = useRuntimeConfig();
const client = new MongoClient(config.connectionString);
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadSingleArticle(slug: String) {
  //await delay(2000);
  try {
    const database = client.db("blog_articles");
    let article_collection = database.collection("case_sums");
    let result = await article_collection.findOne({ slug: slug });
    console.log(result);
    if (result) {
      return result;
    } else {
      return { article: [] };
    }
  } catch (error) {
    console.log(error);
  }
}
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let article = await loadSingleArticle(query.title);
  if (article) {
    return { article };
  } else {
    return { article: null };
  }
});
