import Image from "next/image";

export type ArticleType = {
  source: {
    id: string | null,
    name: string,
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
};

interface IProps {
  article: ArticleType;
}

export function Article(props: IProps) {
  const { article } = props;
  const { source, author, title, url, urlToImage, content, publishedAt } = article;

  return <div className="flex items-center">
    <section>
      <Image src={urlToImage} alt={title} width={100} height={100} />
    </section>
    <section>
      <section className="font-medium">
        {title}
      </section>
    </section>
  </div>
}