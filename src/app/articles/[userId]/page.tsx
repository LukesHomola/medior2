import { ReactElement } from "react";
import ArticleListWrapper from "@/components/ArticleList/ArticleListWrapper";

interface IArticle {
  id: number;
  title: string;
  content: string;
}

interface IUser {
  id: number;
  name: string;
}

async function getArticles(userId: string): Promise<IArticle[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.map((item: { id: number; title: string; body: string }) => ({
    id: item.id,
    title: item.title,
    content: item.body,
  }));
}

async function getUser(userId: string): Promise<IUser> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  return res.json();
}

type TParams = {
  params: {
    userId: string;
  };
};

export default async function Page({ params }: TParams): Promise<ReactElement> {
  const userId = params.userId;

  const [articles, user] = await Promise.all([
    getArticles(userId),
    getUser(userId),
  ]);

  return <ArticleListWrapper articles={articles} authorName={user.name} />;
}
