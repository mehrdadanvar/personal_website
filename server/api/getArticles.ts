import { getMongoClient } from "~~/server/utils/connection";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadArticles() {
  //await delay(2000);
  try {
    let client = await getMongoClient();
    const database = client?.db("blog_articles");
    let article_collection = database?.collection("case_sums");
    let result = await article_collection?.find({}).toArray();
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
