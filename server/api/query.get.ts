import { getMongoClient } from "~~/server/utils/connection";
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadSingleArticle(slug: String) {
  //await delay(2000);
  try {
    const client = await getMongoClient();
    const database = client?.db("blog_articles");
    let article_collection = database?.collection("case_sums");
    let result = await article_collection?.findOne({ slug: slug });
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
