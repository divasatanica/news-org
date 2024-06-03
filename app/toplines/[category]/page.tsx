import { Article, ArticleType } from "@/components/biz/article";
import { fetchClient } from "@/shared/fetch-client";

async function getData(category: string) {
  const res = await fetchClient("/top-headlines", {
    country: "us",
    category,
  });

  return res.json();
}

export default async function Articles({
  params,
}: {
  params: { category: string };
}) {
  const data = await getData(params.category);

  if (data.status !== "ok") {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <div>
      {data.articles.map((article: ArticleType, index: number) => (
        <Article article={article} key={index} />
      ))}
    </div>
  );
}
