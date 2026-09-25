import { getMongoClient } from "~~/server/utils/connection";

function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
}

async function loadArticles(): Promise<any[]> {
  try {
    const client = await getMongoClient();
    const database = client?.db("blog_articles");
    const article_collection = database?.collection("abstract_collection");
    if (!article_collection) {
      return [];
    }

    const result = await withTimeout(
      article_collection.find({}).toArray() as Promise<any>,
      8000,
      [],
    );
    return result || [];
  } catch (error) {
    console.error("Error in getAbstracts:", error);
    return [];
  }
}

export default defineCachedEventHandler(
  async (event) => {
    const articles = await loadArticles();
    return { articles };
  },
  { maxAge: 60 * 5, name: "getAbstracts", swr: true },
);
