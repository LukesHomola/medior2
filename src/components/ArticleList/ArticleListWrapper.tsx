'use client';
import { ReactElement } from 'react';
import ArticleList from '@/components/ArticleList/ArticleList';
import { UserContext } from '@/context/UserContext';

interface IArticle {
  id: number;
  title: string;
  content: string;
}

interface IProps {
  articles: IArticle[];
  authorName: string;
}

export default function ArticleListWrapper({
  articles,
  authorName,
}: IProps): ReactElement {
  return (
    <UserContext.Provider value={{ name: authorName }}>
      <ArticleList articles={articles} />
    </UserContext.Provider>
  );
}
